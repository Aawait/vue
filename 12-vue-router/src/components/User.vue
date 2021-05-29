<template>
    <div>
        <h2>我是User页面</h2>
        <p>我是User内容，嘿嘿嘿</p>
        <button @click="btnClick">按钮</button>
        <p>欢迎您：{{ userid }}</p>
        <p>{{$route.params.userid}}</p>
    </div>
</template>

<script>

 export default {
     name : "User",
     data(){
       return {
         
       }
     },
     created(){
         console.log("User created");
     },
     destroyed(){
         console.log("User destroyed");
     },
     
     computed:{
       userid(){
           // this.$route 拿到当前活跃的路由对象（即正在展示的路由）
           // 通过this.$route 的params对象可以拿到路由后面的参数
           return this.$route.params.userid
       }
     },
     methods:{
        btnClick(){
            console.log(this.$route);
        }
     }
 }
</script>
