<template>
  <div id="city">
    <div class="ctct">
      <div class="city-px">按字母排序</div>
      <div class="city-English" >
          <ul>
            <li v-for="i, index in 26" :key="index"
                @click="climb(index)">{{i | abc}}</li>
          </ul>
      </div>
      <div class="city-content" >
          <ul class="cE" ref="bottom">
            <Scity v-for="i, index in 26" :i="i"/>
            <!--<li >-->
                <!--<div class="city-px" ref="tou">{{i | abc}}</div>-->
                <!--<div class="city-English">-->
                  <!--<ul>-->
                    <!--<li v-for='item,index in citys'>{{item.name}}</li>-->
                  <!--</ul>-->
                <!--</div>-->
            <!--</li>-->
          </ul>
        <p style="height: 500px"></p>
      </div>
    </div>
  </div>
</template>

<script>
  import Scity from "../components/Scity"
  import Bsroll from 'better-scroll'//插件，下载
  export default {
    name: "City",
    data(){
      return{
          topArr: [],
          city:[]

      }
    },
    mounted(){
      this.init();
    },
    components: {Scity},
    methods:{
      init(){
        Array.from(this.$refs.bottom.children).map( (item) => {
          this.topArr[this.topArr.length] = item.offsetTop
        });
        this.scroll = new Bsroll('#city',{ scrollY:true, scrollX:false, click:true ,bounce:false})
      },
      climb(index){
        let distance = this.$refs.bottom.children[index].offsetTop;
        this.scroll.scrollTo(0,-distance,800)
      },
    },
    // beforeRouteEnter(to,from,next){
    //   next(async vm=>{
    //     let flag =await vm.$store.dispatch('getCity');
    //     if(!flag){
    //       vm.$router.replace({name:'404'})
    //     }
    //   })
    // }

  }

</script>

<style scoped>
  #city{
    height: 100%;
    position: relative;
  }
  .city-px{
    padding-left: 15px;
    font-size: 14px;
    line-height: 45px;
    height: 45px;
    background-color: #ebebeb;
  }
  .city-English ul{
    display: flex;
    flex-warp:warp;//换行
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    text-align: center;
    background: #fff;
  }
  .city-English ul li{
    width:25%;
    height: 45px;
    font: 16px/45px '';
    border-bottom: #ebebeb 1px solid;
    color:#838383;
  }
  .ctct{
    position: absolute;
    width: 100%;
  }
</style>
