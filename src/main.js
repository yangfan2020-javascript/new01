import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false
// 配置请求的跟路径
axios.defaults.baseURL = ''
axios.interceptors.request.use(config => {
  // console.log(config)
  // config.headers.Authorization = window.sessionStorage.getItem('token')

  return config
})
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
