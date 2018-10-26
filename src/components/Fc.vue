<template>
  <div class="fc" @click="details(msg.id)">
    <img :src="msg.cover.origin" alt="">
    <div class="fc_card_content clearfix">
      <div class="alignLeft">
        <p>{{msg.name}}</p>
        <p>{{msg.cinemaCount}}家电影院上映{{msg.scheduleCount}}人购票</p>
      </div>
      <div class="alignRight">{{msg.grade}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Fc",
        props: {
           msg: {
              default:  {
                cover:{
                  origin:''
                },
                name: '-.-',
                id:'--',
                cinemaCount: '-.-',
                grade: '-.-',
                scheduleCount: '-.-',
              },
              type:  Object
           }
        },
      methods:{
        details(id){
          console.log(id)
          this.$router.push({
            name: 'deTails',
            params: {
              id: id,
            }
          })
        }
      },
      mounted(){
        console.log(this.msg.id);
      }
    }
</script>

<style scoped>
  .fc{
    border-radius: 3px;
    margin-bottom: 25px;
  }
  .fc img{
    display: block;
    width: 100%;
    height: 160px;
  }
  .fc_card_content{
    background-color: #fff;
    padding: 10px;
  }
  .fc_card_content div:first-of-type p{
    line-height: 25px;
    font-size: 14px;
    text-align: left;
  }
  .fc_card_content div:last-of-type{
    line-height: 50px;
    color: #f78360;
    font-size: 24px;
    text-align: left;
  }
</style>
