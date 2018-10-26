<template>
    <li id="scity">
      <div class="city-px" ref="tou">{{i | abc}}</div>
      <div class="city-English">
        <ul>
          <li v-for='item,index in cities'>{{item.name}}</li>
        </ul>
      </div>
    </li>
</template>

<script>
    export default {
        name: "Scity",
        mounted(){
            this.ct();
        },
        props:['i'],
        methods:{
          async ct(){
            let str = this.$refs.tou.innerHTML;
            let flag =await this.$store.dispatch('getCity',str);
            if(flag){
              this.cities = this.cities.concat(this.$store.state.citys);
            }
          }
        },
      data() {
        return {
          cities: []
        }
      }
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
