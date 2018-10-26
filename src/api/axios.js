import axios from 'axios'

const Axios = axios.create({
  // baseURL: 'https://localhost:8080',
  timeout: 8000
});



export default {
  install(Vue,options){
    Vue.prototype.$http = Axios;
  }
}
