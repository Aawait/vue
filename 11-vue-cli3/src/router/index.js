// 1. 引入第三方包 Vue 和 Vue-router
import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

// 2. 通过Vue.use(插件) 使用这个插件
// 因为上面引入了 所有可以使用vue导出的这个方法
Vue.use(VueRouter)

// 3. 创建VueRouter对象
const routes = [
  // 1个对象就是一个路由映射关系，什么路径下展示什么组件
  {
    // 这个对象有两个必须填的属性 path 路径 component 组件
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

]

// 4. 配置路由与组件之间的关系
const router = new VueRouter({
  routes
})


// 5. 将router对象导出，传入到vue实例中
export default router
