import Vue from 'vue'
import Router from 'vue-router'

// 将原始的 Router.prototype.push 方法进行备份，并重新定义 Router.prototype.push 方法。
const originalPush = Router.prototype.push
// 避免 Vue Router 抛出重复导航到相同的路由的错误
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'login ', component: resolve => require(['@/views/login/index'], resolve), },
    {
      path: '/home', name: 'home ', component: resolve => require(['@/views/home/index'], resolve), redirect: '/index', children: [
        { path: '/index', name: 'index ', component: resolve => require(['@/views/home/pages/index'], resolve), },
        { path: '/chat', name: 'chat ', component: resolve => require(['@/views/home/pages/chat'], resolve), },
        { path: '/app', name: 'app ', component: resolve => require(['@/views/home/pages/app'], resolve), },
      ]
    },
  ]
})
