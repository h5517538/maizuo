<template>
  <div class="ncc" >
    <img :src="msg.poster.thumbnail" alt="">
    <div class="right_content clearfix">
      <div class="alignLeft">
        <p>{{msg.name}}</p>
        <p>{{msg.intro}}</p>
        <p>{{msg.cinemaCount}}家电影院上映{{msg.scheduleCount}}人购票</p>
      </div>
      <div class="alignRight"><span>{{msg.grade}}</span>></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Ncc",
    props: {
      msg: {
        default:  {
          poster:{
            thumbnail:""
          },
          name: '-.-',
          cinemaCount: '-.-',
          grade: '-.-',
          scheduleCount: '-.-',
          intro:'-.-',
        },
        type:  Object
      }
    },
  }
</script>

<style scoped>
  .ncc{
    display: flex;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
  }
  img{
    width: 60px;
    height: 83px;
  }
  .right_content{
    flex: 1;
    padding-left: 15px;
  }
  p{
    font: 16px/32px '';
  }
  p:nth-child(2){
    font: 12px/24px '';
    color: #8e8e8e;
  }
  p:nth-child(3){
    font: 12px/24px '';
    color: #8e8e8e;
  }
  span{
    color: #fc7103;
  }
</style>
