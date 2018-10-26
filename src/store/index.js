import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
      citys:[],
      datailsl:[],
      filmsHome:[],
      filmsList:[],
      filmsSoon:[],
      cinemas:[],
      isLogin:0
  },
  mutations:{
      getCinema(state,cinemas){
        state.cinemas.length=0;
        state.cinemas=state.cinemas.concat(cinemas);
      },
      getCity(state,cities){
        state.citys.length=0;
        state.citys=state.citys.concat(cities);
      },
      homeFilms(state,films){
        state.filmsHome.length=0;
        state.filmsHome=state.filmsHome.concat(films)
        console.log('首页数据',state.filmsHome);
      },
      addFilms(state,films){
        state.filmsList.length=0;
        state.filmsList=state.filmsList.concat(films)
      },
      addSoon(state,films){
        state.filmsSoon.length=0;
        state.filmsSoon=state.filmsSoon.concat(films);
        console.log('111',state.filmsSoon)
      },
      changeLogin(state,zt){
        state.isLogin=zt
    }
  },
  actions:{
      getCity({commit , state},str){
        return new Promise(function(resolve,reject){
          let timeTemp = new Date().getTime();
          //https://m.maizuo.com/v4/api/city?__t=1538216475174
          let url = `/mm/v4/api/city?__t=${timeTemp}`;
          axios.get(url).then(function(data){
            let cities=[];
            for(let i =0; i <data.data.data.cities.length;i++){
              let first = data.data.data.cities[i].pinyin.substring(0,1)
              if(first==str){
                cities[cities.length]=data.data.data.cities[i];
              }
            }
            commit('getCity',cities);
            resolve(1)
          }).catch(err=>{reject(0)})
        })
      },
    getCinema({commit,state}){
      return new Promise(function (resolve,reject) {
        let timeTemp = new Date().getTime();
        //https://m.maizuo.com/v4/api/cinema?__t=1538288304158
        let url = `/mm/v4/api/cinema?__t=${timeTemp}`;
        axios.get(url).then(function(data){
          console.log('影院',data.data.data.cinemas);
          commit('getCinema',data.data.data.cinemas);
          resolve(1)
        }).catch(err=>{reject(0)})
      })
    },
      homeFilms({commit , state},page){
        return new Promise(function(resolve,reject){
          let timeTemp = new Date().getTime();
          let url = `/mm/v4/api/film/now-playing?__t=${timeTemp}&page=${page}&count=5`;
          axios.get(url).then(function(data){
            console.log(data);
            commit('homeFilms',data.data.data.films);
            resolve(1)
          }).catch(err=>{reject(0)})
        })
      },
      addFilms({commit , state},page){
      return new Promise(function (resolve, reject) {
      let url = `/mm/v4/api/film/now-playing?page=${page}&count=7`;
      axios.get(url).then(function(data){
        commit('addFilms',data.data.data.films)
        resolve(1)
      }).catch(err=>{reject(0)})
      })
      },
      //https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
      addSoon({commit , state},pages){
      return new Promise(function (resolve, reject) {
      let url = `/mm/v4/api/film/coming-soon?page=${pages}&count=7`;
      axios.get(url).then(function(data){
        commit('addSoon',data.data.data.films);
        resolve(1)
      }).catch(err=>{reject(0)})
      })
      },
      changeLogin({commit},data){
        commit('changeLogin',data)
      }
  },
  getters:{

  }
})
