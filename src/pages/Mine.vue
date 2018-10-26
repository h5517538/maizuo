<template>
    <div id="mine">
      <div class="mine-header">
          <div class="mine-left">
            <img :src='img' alt="">
          </div>
          <div class="mine-right">
            <p>手机用户6731</p>
            <p>ID:220461386</p>
            <p>退出</p>
          </div>
      </div>
      <div class="mine-content">
          <div class="mine-list">
            <div class="list-l">
              <i class="fa fa-user-o" aria-hidden="true"></i>
                <span>影票订单</span>
            </div>
            <div class="list-r">
              <span>0</span>
              <span>张</span>
              <span>></span>
            </div>
          </div>
          <div class="mine-list">
          <div class="list-l">
            <i class="fa fa-user-o" aria-hidden="true"></i>
            <span>影票订单</span>
          </div>
          <div class="list-r">
            <span>0</span>
            <span>张</span>
            <span>></span>
          </div>
        </div>
          <div class="mine-list">
            <div class="list-l">
              <i class="fa fa-user-o" aria-hidden="true"></i>
              <span>影票订单</span>
            </div>
            <div class="list-r">
              <span>0</span>
              <span>张</span>
              <span>></span>
            </div>
          </div>
          <div class="mine-list">
            <div class="list-l">
              <i class="fa fa-user-o" aria-hidden="true"></i>
              <span>影票订单</span>
            </div>
            <div class="list-r">
              <span>0</span>
              <span>张</span>
              <span>></span>
            </div>
          </div>
          <div class="mine-list">
            <div class="list-l">
              <i class="fa fa-user-o" aria-hidden="true"></i>
              <span>影票订单</span>
            </div>
            <div class="list-r">
              <span>0</span>
              <span>张</span>
              <span>></span>
            </div>
          </div>
          <div class="mine-list">
            <div class="list-l">
              <i class="fa fa-user-o" aria-hidden="true"></i>
              <span>影票订单</span>
            </div>
            <div class="list-r">
              <span>0</span>
              <span>张</span>
              <span>></span>
            </div>
          </div>
          <div class="mine-list">
            <div class="list-l">
              <i class="fa fa-user-o" aria-hidden="true"></i>
              <span>影票订单</span>
            </div>
            <div class="list-r">
              <span>0</span>
              <span>张</span>
              <span>></span>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Mine",
      data() {
        return {
          mobile: '',
          password: '',
          img:'https://pic.maizuo.com/usr/default/maizuomoren66.jpg'
        }
      },
    }
</script>

<style scoped>
  .mine-header{
    height: 152px;
    background: #303030;
    margin-top: -1px;
    padding: 36px 12px 24px 10%;
  }
  .mine-left{
    float: left;
  }
  .mine-left img{
    width: 92px;
    height: 92px;
    border-radius: 50%;
    margin-right: 14px;
  }
  .mine-right{
    float: left;
    color: #fff;
    margin-top: 16px;
  }
  .mine-right p:first-child{
    font: 14px/20px '';
  }
  .mine-right p:nth-child(2){
    font: 12px/18px '';
  }
  .mine-right p:nth-child(3){
    font: 12px/18px '';
    color: #ffbd80;
    margin-top: 0;
    text-decoration: underline;
  }
  .mine-list{
    background: #fff;
    height: 60px;
    margin: 14px 0;
    font: 12px/60px '';
    padding: 0 16px;
  }
  .list-l{
    float: left;

  }
  .list-l span{
    margin-left: 9px;
  }
  .list-r{
    float: right;
  }
  .list-r span:first-child{
    color: #e7a858;
  }
</style>
