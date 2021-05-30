<template>
     <div class="tabbar-item" @click="itemClick">
         <!-- 每一个item里面展示的内容由使用组件的时候决定，我们给它两个具名插槽 -->
         <div v-if="!isActive"> <slot name="item-icon"></slot> </div>
         <div v-else> <slot name="item-icon-active"></slot> </div>
         <div :style="activeStyle">
             <slot name="item-text"></slot>
         </div>
     </div>
</template>

<script>
export default {
   name:"TabBarItem",
   props: {
     path: String,
     activeColor: {
         type: String,
         default: "deepPink"
     }
   },
   data(){
       return {
        //    isActive:true
       }
   },
   computed:{
       isActive(){
        //    $route 是当前跳转的路由对象，每一个路由都有一个对应的$route对象
           return this.$route.path == this.path;
       },
       activeStyle(){

           return this.isActive ? {color:this.activeColor} : {}
       }
   },
   methods: {
       itemClick(){
        //   console.log(this.path);
           this.$router.push(this.path)
       }
   }
}
</script>


<style>

  .tabbar-item{
    flex: 1;
    text-align: center;
    box-sizing: border-box;
    height: 50px;
    font-size: 14px;
  }
  .tabbar-item img{
      width: 24px;
      height: 24px;
      margin: 3px 0;
      vertical-align: middle ;
  }

</style>
