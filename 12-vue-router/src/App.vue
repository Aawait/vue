<template>
  <div id="app">
    
     <!-- router-link 是 vue-router注册的全局组件，可以在任意地方使用 -->
     <!-- router-link 有一个属性 to="路径" 可以实现a标签的跳转 -->
     <!-- router-link还有一个属性 tag="标签名" 决定渲染出来的是什么标签 -->
      <!-- router-link有一个属性 replace 加上它会让浏览器失去返回的功能 -->
      <!-- router-link有一个属性 active-class 可以改变它点击默认添加的类名 -->
      <!-- <router-link to="/home"  active-class="active" replace>首页</router-link> -->
      <!-- <router-link to="/about"  replace active-class="active">关于</router-link> -->

     <h1>我是APP组件</h1>
      <!-- 通过代码跳转路由路径  -->
      <button @click="homeClick">点击首页</button>
      <!-- <button @click="aboutClick">点击关于</button> -->
      <router-link to="/home"  >我是首页</router-link>
      <router-link to="/about" >我是关于</router-link>

      <!-- 动态绑定路由，用v-bind拼接上变量 -->
      <router-link :to="'/user/'+userid"  >我是用户</router-link>
     
      <!-- to也可以动态绑定一个对象，里面的path就是跳转路径，query是跳转时传递的参数，属性值是一个对象，以get请求方式拼接再地址栏 -->
      <router-link :to="{path:'/profile',query:{name:'cici',age:24,height:1.88}}">我是档案</router-link>
     

     <button @click="userClick">用户组件</button>
     <button @click="profileClick">档案组件</button>
     <!-- router-view 用于决定渲染的组件放在什么位置 相当于占位 -->
      <!-- <router-view></router-view> -->
      
      <!-- 再组件有多个路由的时候，我们该怎样让他保留其中一个的状态 -->
      <!-- 使用keep-alive使组件保持生命缓存下来，不会再路由跳转的时候销毁和创建，生命周期函数也不会频繁创建销毁 -->
      <!-- include 匹配的组件都会被缓存 -->
      <!-- exclude 匹配的组件都不会被缓存  需要频繁创建销毁的组件，他们的created 和 destroyed会频繁调用 -->
      <keep-alive exclude="ProFile,User">
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>

export default {
  name:"App",
  data(){
    return {
       userid:'cici'
    }
  },
  methods:{
    // 通过代码改变路由路径跳转
    homeClick(){
     // vue-router插件往每一个组件都加了一个$router对象，包含一些路由跳转的方法，可以理解为路由导航对象
     // $router为VueRouter的实例，想要导航到不同的url，则使用$router.push方法
      this.$router.push('/home');

      // 调用vue原型添加的testMethod方法
      this.testMethod();

     // $route为当前router跳转的组件对象里面可以获取到name，path，query，params等，可以理解为路由参数对象
      console.log(this.$route);
    },
    aboutClick(){
    
    // replace 可以不让浏览器缓存，无法后退
      // this.$router.replace('/about');
      this.$router.push('/about');
    },
    userClick(){
      this.$router.push('/user/'+this.userid)
    },
    profileClick(){
      // 使用this.$router.push 跳转组件，想要传参数的话，参数是一个对象，对象必有path属性和query属性，query里面写参数
      this.$router.push({
        path:"/profile",
        query:{
          name:'vivi',
          age:17,
          height:1.6
        }
      })
    }
  },
  
}
</script>


<style>
  .active{
    color: #f00;
  }
</style>
