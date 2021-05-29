<template>
     <div id="tabbar">
         <slot></slot>
     </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
   name:"TabBar",
   components : {
       TabBarItem
   }
}
</script>


<style>
  #tabbar{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -2px 2px rgba(201,201,201,0.2);
  }

</style>
