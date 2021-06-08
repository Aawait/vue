import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
   {
     path: '/',
     redirect: '/home'
   },
   {
     path: '/home',
     component: () => import('views/home/Home'),
   },
   {
     path: '/category',
     component: () => import('views/category/Category')
   },
   {
     path: '/cart',
     component: () => import('views/cart/Cart')
   },
   {
     path: '/profile',
     component: () => import('views/profile/Profile')
   }
]

// 更改重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originalPush.call(this,location).catch(err => err)
}

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
