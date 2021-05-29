<template>
    <div>
        <h2>我是Home首页</h2>
        <p>我是首页内容哈哈哈</p>
       
        <router-link to="/home/news">新闻列表</router-link>
        <router-link to="/home/message">消息列表</router-link>
        
        <!-- 因为有子路由嵌套再这个组件模板，所以需要router-view 来决定子组件的展示位置 -->
         <router-view></router-view>
    </div>
</template>

<script>

 export default {
     name : "Home",
     data(){
         return {
             path:"/home/news"
         }
     },
     created(){
      // 所有的组件创建之后都会调用created生命周期函数
      // 所以路由跳转的时候都是销毁这个组件，再次跳转回来都是重新创建这个组件
     console.log("home created");
    },
    // 组件被销毁就会调用destroyed生命周期函数
    destroyed(){
      console.log("home destroyed");
    },
    // 这两个生命周期函数只有再组件被keep-alive保持了生命状态才会执行
    activated(){
        // activated会再组件活跃状态被调用，即路由跳转过来的展示组件的时候
        console.log("activated再组件活跃状态被调用");
        // this.$router.push(this.path)
    },
    deactivated(){
        // deactivated 再组件失去活跃的时候调用，即跳转离开这个路由
        console.log("deactivated再组件失去活跃状态被调用");
    //    console.log(this.$route.path);
    },
    // 组件内导航守卫,离开该组件会调用这个,记录它离开的状态
    // beforeRouteLeave(to,from,next){
    //     // console.log(this.$route.path);
    //     this.path = this.$route.path;
    //     next();
    // }
 }
</script>
