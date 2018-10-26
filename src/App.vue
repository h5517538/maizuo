<template>
  <div id="app">
      <header class="app_header">
         <span class="app_header_bars" @click="showNav"><i class="fa fa-bars" aria-hidden="true"></i></span>
         <span class="app_header_title" ref="first">首页</span>
         <span class="app_header_address" @click="jump">青岛<i class="fa fa-angle-down" aria-hidden="true"></i></span>
         <span class="app_header_user" @click="come('mine')"><i class="fa fa-user-o" aria-hidden="true"></i></span>
      </header>
       <div class="app_content">
         <div class="mask" v-show="isMask"></div>
         <div class="menuNav" ref="nav">
            <div class="menuNav_item clearfix"
                 v-for="item,index in navArr"
                 @click="go(item,index)">
              <span class="alignLeft">{{item.title}}</span>
              <span class="alignRight"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
            </div>
         </div>
         <router-view class="app-view"></router-view>
       </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    //  控制导航的显示
    showNav(){
      // 通过控制 nav的left让他显示隐藏
      // 通过控制 isMask来显示隐藏 遮罩层
       //当前导航和 遮罩层都是显示的
       if(this.isMask){
         this.$refs.nav.style.left = -210 + 'px';
         this.isMask = false;
       }else {
         //抓到 导航 让他的 left = 0 显示出来
         this.$refs.nav.style.left = 0 ;
         this.isMask = true;
       }
    },
    //页面跳转
    go(item){
      //显示中
      if(this.isMask){
          this.$refs.nav.style.left = -210 + 'px';
          this.isMask = false;
      }
      //跳转
      this.$router.push({
          name:  item.name
      });
      this.$refs.first.innerText = item.title;
    },
    come(title){
        this.$router.push({
          name:title
        })
      this.$refs.first.innerText = '我的';
    },
    jump(){
        this.$router.push({
            name: 'city'
        })
    }
  },
  data:function () {
    return{
      navArr: [
        {
          title: '首页',
          name: 'home'
        },
        {
          title: '影片',
          name: 'films'
        },
        {
          title: '影院',
          name: 'cinema'
        },
        {
          title: '我的',
          name: 'mine'
        },
        {
          title: '卖座卡',
          name: 'card'
        }
      ],
      isMask: false,
    }
  }
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  #app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .app_header{
    width: 100%;
    /*display: flex;*/
    background-color: #282828;
    position: fixed;
    z-index: 10;
  }
  .app_header span{
    display: inline-block;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
  }
  .app_header_bars{
    width: 48px;
    border-right: 1px solid #333333;
  }
  span.app_header_title{
    width: calc(100% - 183px);
    text-align: left;
    padding-left: 10px;
  }
  .app_header_address{
    width: 70px;
  }
  .app_header_user{
    width: 48px;
    border-left: 1px solid #333333;
  }

  .app_content{
    flex: 1;
    width: 100%;
    position: relative;
    padding-top: 50px;
    margin-top: -1px;
  }
  .mask{
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
  }
  .menuNav{
    position: fixed;
    top: 50px;
    left: -210px;
    transition: all .3s;
    border-top: 1px solid #333333;
    background-color: #282828;
    height: 100%;
    width: 210px;
    z-index: 10;
    margin-top: -1px;
  }
  .menuNav_item{
    line-height: 50px;
    padding: 0 15px;
    color: #ffffff;
    font-size: 18px;
    border-bottom: 1px solid #333333;
  }
  .app-view{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>

