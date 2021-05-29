<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>{{ sonHelloMsg }}</h2>
    <HelloWorld msg="Welcome to Your Vue.js App" :father-msg="homeMsg" @sonMsg="sonMsg" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return{
      homeMsg : "传递给儿子组件HelloWorld的message,由儿子组件展示",
      sonHelloMsg : ''
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    sonMsg(sonData){
        // console.log("拿到儿子传递过来的数据并展示了");
        this.sonHelloMsg = sonData;
    }
  }
}
</script>
