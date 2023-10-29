// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './index.scss'
import './assets/css/animate.min.css'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/theme/index.css'
import socket from './socket'
import utils from './utils.js'                                        // 封装function 方法


import store from './store/index' 
Vue.prototype.$store = store 

Vue.use(utils)                                 // 添加
Vue.use(socket);
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
