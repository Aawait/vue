import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Former from '../views/Former.vue'
import jianli from '../views/jianli.vue'
Vue.use(VueRouter)


//获取原型对象上的push函数,这是防止路由连续跳同一个位置会报错
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: '/',
    name: 'jianli',
    component: jianli,
    meta: {
      title:"陈晗的个人简历"
    },
    children:[
      {
        // 默认看到第一页
        path : '',
        redirect : 'all'
      },
      {
        path : 'all',
        component : Home
      },
      {
        path : 'details',
        component : Details
      },
      {
        path : 'former',
        component : Former
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
