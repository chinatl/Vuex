import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
//导入状态管理工具
import store from './store'
// 导入reset.css
import './assets/reset.css'
import Icon from 'vue-awesome'
Vue.component('icon', Icon)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})