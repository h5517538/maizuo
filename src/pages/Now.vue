<template>
  <div id="now">
      <Ncc v-for="item,index in filmsList" :msg="item" :key="index"></Ncc>
    <div style="text-align: center;padding: 20px;">
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    </div>
  </div>
</template>

<script>
  import Ncc from "../components/Ncc";
  import { mapState } from 'vuex'
    export default {
        name: "Now",
      data(){
        return {
          // nArr: [
          //   {
          //     imgSrc: 'https://pic.maizuo.com/usr/movie/df44cf38656235812fe38494e18d17ed.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300',
          //     name: '黄金兄弟',
          //     score: '8.0',
          //     num: 216,
          //     people: 33,
          //     dec:'哈哈哈哈哈哈哈哈哈哈哈或或'
          //   },
          //   {
          //     imgSrc: 'https://pic.maizuo.com/usr/movie/1ee012502c478fddd0cddad0fcc13b54.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300',
          //     name: '黄金兄弟',
          //     score: '8.0',
          //     num: 216,
          //     people: 33,
          //     dec:'哈哈哈哈哈哈哈哈哈哈哈或或'
          //   },
          //   {
          //     imgSrc: 'https://pic.maizuo.com/usr/movie/7affbfe709c89903bb2a08880841513d.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300',
          //     name: '黄金兄弟',
          //     score: '8.0',
          //     num: 216,
          //     people: 33,
          //     dec:'哈哈哈哈哈哈哈哈哈哈哈或或'
          //   },
          //   {
          //     imgSrc: 'https://pic.maizuo.com/usr/movie/c419c069135040ff40741a3fac41ff31.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300',
          //     name: '黄金兄弟',
          //     score: '8.0',
          //     num: 216,
          //     people: 33,
          //     dec:'哈哈哈哈哈哈哈哈哈哈哈或或'
          //   }
          // ],.
          page:1
        }
      },
      components: {
        Ncc
      },
      computed:{
        ...mapState(['filmsList'])
      },
      beforeRouteEnter(to,from,next){
        console.log(to);
        next(async vm=>{
          let flag = await vm.$store.dispatch('addFilms',1);
          console.log('干活干活干活',flag);
          if(!flag){
            vm.$router.replace({name:'404'})
          }
        });
      },
    }
</script>

<style scoped>
</style>
