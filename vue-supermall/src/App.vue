<template>
  <div id="app">
     <router-view/>

     <MainTabBar />
  </div>
</template>


<script>

import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
    name: "App",
    components: {
      MainTabBar
    }
}
</script>

<style lang="scss">

@import './assets/css/base.css';

</style>
