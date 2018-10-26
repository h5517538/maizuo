import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Details from '../pages/Details'
import Films from '../pages/Films'
import Cinema from '../pages/Cinema'
import Mine from '../pages/Mine'
import Card from '../pages/Card'
import Login from '../pages/Login'
import Now from '../pages/Now'
import Soon from '../pages/Soon'
import City from '../pages/City'
import E404 from '../components/E404'
import 'swiper/dist/css/swiper.min.css'
import store from '../store'

Vue.use(Router);


let router = new Router({
  // app   home/films/cinema/mine/card/login
  routes: [
    {path: '/', component: Home},
    {name:'home',path: '/home', component: Home},
    {name:'deTails',path: '/deTails', component: Details},
    {name:'films',path: '/films', component: Films},
    {
      name:'cinema',
      path: '/cinema',
      component: Cinema,
      meta:{
          authRequired:1,
      }
      },
    {name:'mine',
      path: '/mine',
      component: Mine,
      meta:{
        authRequired:1,
      }
    },
    {name:'card',path: '/card', component: Card},
    {name:'city',path: '/city', component: City},
    {name:'404',path: '/e404', component: E404},
    {name:'login',path: '/login', component: Login},
    {
      path: '/films',
      component: Films,
      children: [
        {name:'now',path: '/now', component: Now},
        {name:'soon',path: '/soon', component: Soon}
      ]
    },
  ]
});

//这是为了保存 login之前的路径
let toName = '';
router.beforeEach((to,from,next)=>{
  if(to.name !== 'login'){
      toName = to.name;
  }

  if(to.meta.authRequired) {
      if (!store.state.isLogin) {
        next({name:'login', params:{name: toName}})
      } else {
        next()
      }
    }else{
      next()
    }
});

export  default router;
