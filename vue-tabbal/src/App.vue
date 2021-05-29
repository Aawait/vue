<template>
  <div id="app">
     <router-view></router-view>
      <TabBar>
          <TabBarItem path="/home">
            <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
             <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
            <div slot="item-text">首页</div> 
          </TabBarItem>
          <TabBarItem path="/category">
             <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
             <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">

             <div slot="item-text">分类</div> 
          </TabBarItem>
          <TabBarItem path="/cart">
             <img slot="item-icon" src="./assets/img/tabbar/cart.svg" alt="">
             <img slot="item-icon-active" src="./assets/img/tabbar/cart_active.svg" alt="">
             <div slot="item-text">购物车</div> 
          </TabBarItem>
          <TabBarItem path="/profile">
             <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
             <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
             <div slot="item-text">我的</div> 
          </TabBarItem>
      </TabBar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar.vue'
import TabBarItem from './components/tabbar/TabBarItem.vue'
export default {
   name:"App",
   components : {
      TabBar,
      TabBarItem
   }
}
</script>


<style>
  @import "./assets/css/base.css";

</style>
