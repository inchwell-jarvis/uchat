import Vue from 'vue'
import Router from 'vue-router'
import CookieManager from '../utils/CookieManager'
import { Message } from "element-ui"; // element
// 将原始的 Router.prototype.push 方法进行备份，并重新定义 Router.prototype.push 方法。
const originalPush = Router.prototype.push
// 避免 Vue Router 抛出重复导航到相同的路由的错误
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'login', component: resolve => require(['@/views/login/index'], resolve) },
    {
      path: '/home', name: 'home', component: resolve => require(['@/views/home/index'], resolve), redirect: '/index', children: [
        { path: '/index', name: 'index', component: resolve => require(['@/views/home/pages/index'], resolve) },
        { path: '/chat', name: 'chat', component: resolve => require(['@/views/home/pages/chat'], resolve) },
        { path: '/app', name: 'app', component: resolve => require(['@/views/app/index'], resolve) },
        { path: '/api', name: 'api', component: resolve => require(['@/views/home/pages/api'], resolve) },
        { path: '/permission', name: 'permission', component: resolve => require(['@/views/permission/index'], resolve) },
        { path: '/me', name: 'me', component: resolve => require(['@/views/me/index'], resolve) },
      ]
    },
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  // 获取本地的身份信息
  const token = CookieManager('get', 'token')
  // console.log(token)
  // 如果要去的地方不是登录页 且 没有身份信息的话 就驳回到登录页
  if (to.name !== 'login' && !token) {
    // 驳回到登录页
    Message({ message: '请先登录！', type: "error" });
    next({ name: 'login' })
  } else {
    // 包含身份
    next()
  }
})



export default router
