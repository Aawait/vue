<template>
    <div>
        <h2>我是profile组件</h2>
        <!-- 获取组件跳转query传参传递过来的参数 -->
        <h2>{{$route.query}}</h2>
    </div>
</template>

<script>

 export default {
     name : "ProFile",
     created(){
         console.log("ProFile created");
     },
     destroyed(){
         console.log("ProFile destroyed");
     }
 }
</script>
