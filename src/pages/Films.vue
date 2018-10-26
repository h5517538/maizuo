<template>
  <div id="films">
    <div class="films_header">
      <span v-for="item,index in biaoti"
            @click="active(item,index)"
            :class="{active: showIndex === index}"
            ref="ns">{{item.title}}</span>
    </div>
    <div class="films_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Films",
        data(){
          return {
            showIndex: 0,
            biaoti:[
              {title:'正在热映',name:'now'},
              {title:'即将上映',name:'soon'}
            ],
            filmData:[],
          }
        },
      methods:{
        active(item,index){
          this.showIndex=index
          this.$router.push({
            name:  item.name
          })
        }
      },
      // methods:{
      //     active(item,index){
      //       this.showIndex = index;
      //       this.$router.push({
      //         name:  item.name
      //       })
      //     }
      // },
      mounted(){
          this.$router.push({
          name:  'now'
          })
      }
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  #films {
    width: 100%;
    height: 100%;
    background: #f9f9f9;
    padding: 0 15px;
  }
  .films_header{
    border-bottom: 1px solid #fe6e00;
    width: 100%;
  }
  .films_header span{
    text-align: center;
    width:50%;
    height: 45px;
    font:17px/44px '';
    display: inline-block;
  }
  .active{
    color:#fe6e00;
    border-bottom: 2px solid #fe6e00
  }

</style>
