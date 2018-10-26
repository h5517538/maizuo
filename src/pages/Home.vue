<template>
    <div id="home">
        <div class="home_swiper">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item,index in arr">
                      <img :src="item" alt="">
                    </div>
                </div>
            </div>
        </div>
      <div class="home_nowPlaying">
        <Fc v-for="item,index in filmsHome" :msg="item" :key="index" ></Fc>
      </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import Fc from "../components/Fc";
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        mounted(){
            this.mySwiper = new Swiper('.swiper-container', {
              autoplay: true,//可选选项，自动滑动
            })
        },
        data(){
           return {
             // cArr: [
             //   {
             //     imgSrc: 'https://pic.maizuo.com/usr/movie/89e79e0e2560f5d26e695b476e8997fd.jpg',
             //     name: '黄金兄弟',
             //     score: '8.0',
             //     num: 216,
             //     people: 33
             //   },
             //   {
             //     imgSrc: 'https://pic.maizuo.com/usr/movie/3102318cd8a56bce767cf03916412334.jpg',
             //     name: '黄金兄弟',
             //     score: '8.0',
             //     num: 216,
             //     people: 33
             //   },
             //   {
             //     imgSrc: 'https://pic.maizuo.com/usr/movie/2a136488333756915654d214f9632966.jpg',
             //     name: '黄金兄弟',
             //     score: '8.0',
             //     num: 216,
             //     people: 33
             //   },
             //   {
             //     imgSrc: 'https://pic.maizuo.com/usr/movie/15365ca6bd353cd64184206155add71a.jpg',
             //     name: '黄金兄弟',
             //     score: '8.0',
             //     num: 216,
             //     people: 33
             //   }
             // ],
             arr:[
               'http://pic.maizuo.com/h5PicUpload/eea83a19889a2e1565d4f34bbb3b3f52.jpg',
               'http://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg',
               'http://pic.maizuo.com/h5PicUpload/776a3be84a90e0ffd4489c95cd3e3746.jpg'
             ]
           }
        },
        components: {
          Fc
        },
      computed:{
        ...mapState(['filmsHome'])
      },
      beforeRouteEnter(to,from,next){
          next(async vm=>{
            let flag =await vm.$store.dispatch('homeFilms',1);
            console.log(flag);
            if(!flag){
              vm.$router.replace({name:'404'})
            }
          })
      }
    }
</script>

<style scoped>
 #home{
   width: 100%;
   height: 100%;
   overflow: hidden;
   margin-top: -1px;
 }
  .home_swiper{
    width: 100%;
    height: 180px;
  }
  .home_nowPlaying{
    padding: 15px;
  }
</style>
