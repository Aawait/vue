

// 在这里配置路由相关

// 导入vue路由插件
import VueRouter from 'vue-router'

// 导入vue对象
import Vue from 'vue'

// 导入组件
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'


// 使用路由懒加载导入，就是再这个路由被访问的时候才加载组件代码，这样节约性能，防止文件过大出现留白
// 这样使用webpack打包的时候不会把所有js都放一个文件，使用懒加载的组件会单独打包
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/ProFile.vue')

const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

// 1.使用vue插件 Vue.use(插件) 
Vue.use(VueRouter);

//获取原型对象上的push函数,这是防止路由连续跳同一个位置会报错
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


const routes = [
    // 配置组件和路由的映射关系，一个url对应一个组件，一个映射关系就是一个对象
    {
        // 重定向，默认给他跳到首页
        path:"/",
        redirect:"/home"
    },
    {
        // 如果路径出现/home的时候，显示下面对应的组件 它会自动找到router-view 替代它
        path:"/home",
        component: Home,
        // meta 元数据（描述数据的数据），如果想给路由加一些东西，可以写在meta对象中
        meta:{
            title:"首页"
        },
        // 创建home的子路由 嵌套路由
        children: [
            // 1.配置嵌套子路由，注意嵌套路由的path不能加/，它会自动加上的/home/news
            {
                // 设置一个默认路径，让他展示一个出来
                path:'',
                redirect : 'news'
            },
            {
               path:'news',
               component : HomeNews
            },
            {
               path:'message',
               component : HomeMessage
            }
        ]
    },
    {
        path:"/about",
        component: About,
        meta:{
            title:"关于"
        },
        // 注册局部守卫，一旦进入这个路由就会回调它
        beforeEnter:(to,from,next)=>{
           console.log("进入about路由了，我是about的局部守卫");
           next()
        }
    },
    {
        // 动态路由,某些情况下一个页面的path路径可能不确定，就可以使用动态路由决定
        path:"/user/:userid",
        component : User,
        meta:{
            title:"用户"
        },
    },
    {
        path:"/profile",
        component:Profile,
        meta:{
            title:"档案"
        },
    }
];

// 2. 创建vueRouter对象
const router = new VueRouter({
    // 配置路由和组件之间的映射关系
    routes,
    // 配置路径，项目默认是哈希模式，改为history模式
    mode:'history',
    // 更改组件router-link标签活跃状态默认class名
    linkActiveClass: 'active'
});


// 创建全局守卫（路由导航），我们需要再路由跳转的时候做一些事，比如更改title
// 前置守卫（guard） 就是路由即将跳转执行的回调
router.beforeEach((to,from,next)=>{
    // 当从一个路由跳到另一个路由的时候，就会执行这个函数 从from跳到to
    // to === $route 对象 即将要进入目标的路由对象
    // from  当前导航即将要离开的路由对象
    // next  调用该方法后，才会继续执行
    // console.log(to);

    // 永远取matched中的第一个，不然有嵌套路由会获取不到
    document.title = to.matched[0].meta.title;
    // next放行，没有这一步代码不会往下执行 
    next();
})


// 后置钩子（hook）  路由跳转之后执行的函数
router.afterEach((to,from)=>{
    // console.log("我是路由跳转之后执行的全局守卫");
})


// 3. 将router对象传入到vue实例中
export default router