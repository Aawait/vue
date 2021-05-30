<template>
  <div id="app">
     <router-view></router-view>
      <MainTabBar></MainTabBar>
  </div>
</template>

<script>

// 层层抽出 直导出最大的组件 使组件形成组件树 app主文件里面更加简洁
import MainTabBar from 'components/MainTabBar'
export default {
   name:"App",
   components : {
      MainTabBar   
   } 
}
</script>


<style>
  @import "./assets/css/base.css";

</style>
