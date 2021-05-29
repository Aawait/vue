<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>


 <script>
 
 export default {
   name:'App',
   data(){
     return {
       a:1,
       
     }
   },
   mounted(){
  
 
   },
    
created() {
   
  },
 
 
 
   components:{
      // vueLive2d
   },
   methods: {
       
    },
 
   
 }
 </script>
 


<style>
body {
  background: #efefef;
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
}
hr {
  height: 0;
  border: none;
  border-top: 1px solid #dedede;
}
ul,
ol {
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}


 #app {
   position: relative
 }
    
  .tools-panel
  {
     position: fixed   !important;
    left: 0;
    bottom :0;
    max-width: 32px;
  }
   
   
   
</style>
