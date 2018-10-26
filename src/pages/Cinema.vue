<template>
  <div id="cinema">
    <div class="ads" v-for="item,index in cinemas">
        <div class="ads-header" @click="showHide(item,index)">
            <p>
                {{item.district.name }}
            </p>
        </div>
        <div class="cinema-content">
            <div class="right_content clearfix">
                <div class="right-box" ref="citys" style="display: none"
                     v-for="view in cinemas">
                    <div class="alignLeft">
                        <p>{{view.name}}</p>
                        <p>{{view.c2}}</p>
                        <p>{{view.address}}</p>
                    </div>
                    <div class="alignRight">></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: "Cinema",
        data(){
            return {
                // cityArr:[
                //   {
                //     city:'市北区',
                //     cinemas:[
                //       {
                //         c1:'横店电影城青岛中山路店',
                //         c2:'青岛市市南区中山路６７号乐喜客来广场２-４层',
                //         c3:'距离位置',
                //       }
                //       ]
                //   },
                //   {
                //     city:'市北区',
                //     cinemas:[
                //       {
                //         c1:'横店电影城青岛中山路店',
                //         c2:'青岛市市南区中山路６７号乐喜客来广场２-４层',
                //         c3:'距离位置',
                //       }
                //     ]
                //   },
                //   {
                //     city:'市北区',
                //     cinemas:[
                //       {
                //         c1:'横店电影城青岛中山路店',
                //         c2:'青岛市市南区中山路６７号乐喜客来广场２-４层',
                //         c3:'距离位置',
                //       }
                //     ]
                //   }
                // ],
                isClick:false
            }
      },
      methods:{
        showHide(item,index){
          // this.isClick=!this.isClick
          console.log(this.$refs.citys[index]);
          console.log(this.$refs.citys[index].style.display);
          if(this.$refs.citys[index].style.display=='none'){
              this.$refs.citys[index].style.display='block'
          }else{
              this.$refs.citys[index].style.display='none'
          }
        }
      },
      computed:{
        ...mapState(['cinemas'])
      },
      beforeRouteEnter(to,from,next){
          next(async vm=>{
            let flag = await vm.$store.dispatch('getCinema');
            console.log('干活干活干活',flag);
            if(!flag){
              vm.$router.replace({name:'404'})
            }
          })
      }
    }
</script>

<style scoped>
  #cinema{
    background: #fff;
  }
  .ads-header{
    background: #e1e1e1;
    text-indent: 16px;
    font: 16px/40px '';
  }
  .ads-header p{
    border-bottom: 1px solid #fff;
  }

  .right-box{
    padding: 10px 16px 12px 16px;
    flex: 1;
    overflow: hidden;
    border-bottom: 1px solid #e1e1e1;
  }
  .alignLeft p{
    font: 16px/32px '';
  }
  .right-box p:nth-child(2){
    font: 12px/24px '';
    color: #ccc;
  }
  .right-box p:nth-child(3){
    font: 12px/24px '';
    color: #ccc;
  }
</style>
