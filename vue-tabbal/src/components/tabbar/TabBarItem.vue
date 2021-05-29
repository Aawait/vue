<template>
     <div class="tabbar-item" @click="itemClick">
         <!-- 每一个item里面展示的内容由使用组件的时候决定，我们给它两个具名插槽 -->
         <div v-if="!isActive"> <slot name="item-icon"></slot> </div>
         <div v-else> <slot name="item-icon-active"></slot> </div>
         <div :class="{active:isActive}">
             <slot name="item-text"></slot>
         </div>
     </div>
</template>

<script>
export default {
   name:"TabBarItem",
   props: {
     path: String
   },
   data(){
       return {
           isActive:true
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
  .active{
      color: red;
  }
</style>
