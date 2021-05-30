
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
// 1.使用插件
Vue.use(VueRouter);

//获取原型对象上的push函数,这是防止路由连续跳同一个位置会报错
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}



// 2. 配置路由映射关系
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
     path: '/cart',
     component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
    routes,
    // 更改url地址模式为history 默认是hash
    mode: "history"
})


export default router
