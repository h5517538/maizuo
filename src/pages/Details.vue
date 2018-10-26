<template>
    <div id="detailsl" >
      <div>
        <div class="dta-header">
          <img :src="detailsl.cover.origin" alt="">
        </div>
        <div class="dta-content">
          <div class="dc-h">
            <h3>影片简介</h3>
          </div>
          <div class="dc-c">
            <h3>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{{detailsl.director}}</h3>
            <h3>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:&nbsp;&nbsp;<span v-for="item in detailsl.actors">{{item.name}}|</span></h3>
            <h3>地区语言:&nbsp;&nbsp;{{detailsl.language}}</h3>
            <h3>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;&nbsp;{{detailsl.category}}</h3>
            <h3>上映日期:&nbsp;&nbsp;{{timeMonth}}月{{timeDate}}日上映</h3>
            <h3>{{detailsl.synopsis}}</h3>
          </div>
          <div class="dc-b">
            <button>立即购票</button>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "deTails",
        data(){
          return{
            detailsl: {},
            timeMonth:[],
            timeDate:[],
          }
        },
        mounted(){
          // console.log(this.$route.params);
          let id = this.$route.params.id;
          let timeTmp = new Date().getTime();
          let url = `/mm/v4/api/film/${id}?__t=${timeTmp}`;
          let _this=this;
          this.$http.get(url).then(function (data) {
            _this.detailsl= data.data.data.film ;
            console.log(_this.detailsl);
            let time = new Date(_this.detailsl.premiereAt);
            _this.timeMonth=time.getMonth()+1;
            _this.timeDate=time.getDate();
          })
        }
    }
</script>

<style scoped>
  #detailsl{
    font-size: 12px;
  }
  .dc-h h3{
    margin: 16px auto;
    border-left: 16px solid RGB(228, 200, 156);
    font-size: 16px;
    padding-left: 4px;
  }
  .dc-c h3{
    height: 18px;
    margin-bottom: 12px;
    padding-left: 20px;
  }
  .dc-c h3:last-child{
    text-overflow: ellipsis;
    margin-bottom: 80px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .dc-b{
    position: fixed;
    transform: translateX(50%);
    bottom: 3%;
  }
  button{
    font-size: 14px;
    min-width: 156px;
    height: 36px;
    line-height: 36px;
    border: none;
    background-color: #fe8233;
    padding: 0;
    margin: 0;
    border-radius: 18px;
    color: #fff;
    -webkit-transition: 0.5s ease;
  }
</style>
