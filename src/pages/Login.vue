<template>
  <div id="login">
    <div class="login-login">
      <div>
        <input type="text" v-model="mobile">
      </div>
      <div>
        <input type="text" v-model="password">
      </div>
      <div>
        <span @click="getCode">验证码</span>
      </div>
    </div>
    <div class="login-button" @click="come">登录 </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return{
        mobile:'',
        password:'',
        cc:''
      }
    },
    methods:{
      getCode(){
        // console.log(this.mobile);
        let self = this;
        //https://m.maizuo.com/v4/api/code?__t=1538107230419
        let timeTemp = new Date().getTime();
        let url=`/mm/v4/api/code?__t=${timeTemp}`;
        this.$http.post(url,{
          type:2,
          mobile:self.mobile
        }).then(function(data){
          console.log(data)
        })
      },
      come(){
        let self = this;
        this.$store.dispatch('changeLogin',1);
        this.$router.replace({name:this.cc})
        console.log(this);
      }
    },
    beforeRouteEnter(to,from,next){
      console.log('this is login.vue 的 to ',to.params);
      next(vm=>{
        vm.cc=to.params.name
      })
    }
  }
</script>

<style scoped>
  #login{
    width: 100%;
    background-color: #fff;
  }
  .login-login{
    width: 85%;
    margin: 0 auto;
    padding: 50px 0;
  }
  .login-login input{
    width: 100%;
    height: 42px;
    margin-bottom: 15px;
    background-color: #f2f2f2;
    border: 1px solid #333333;
  }
  .login-button{
    width: 163px;
    background-color: #fe8233;
    color: #fff;
    border: none;
    border-radius: 36px;
    margin: 0 auto;
    text-align: center;
    padding: 8px 12px;
    font-size: 15px;
    outline: none;
  }
</style>
