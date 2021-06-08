<template>
  <div id="app">
    <router-view/>
    <zhihu />
    <el-button @click="reqGet" type="success">点击GET</el-button>
    <el-button @click="reqPost" type="danger">点击POST</el-button>
    <el-button @click="errPost" type="warning">点击Error</el-button>

  </div>
</template>

<script>

import {getUserAxios,postUserAxios,errUserAxios} from './network/user'
import zhihu from '@/components/zhihu'
export default {
  name: "App",
  components: {
      zhihu
  },
  methods: {
     reqGet(){
          getUserAxios()
          .then(res => {
            console.log(res);
            this.$message({
              type:'success',
              message: res.message
            })
          })
          .catch(err => {
            console.log(err);
            this.$message.error(err.message)
          })
     },

     reqPost(){
          postUserAxios()
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
            this.$message.error(err.message)
          })
     },

     errPost(){
        errUserAxios()
        .then(res => {
          console.log(res);
          this.$message({
            type: 'success',
            message: res.message
          })
        })
        .catch(err => {
          console.log(err);
          this.$message({
            type: 'warning',
            message: err.message
          })
        })
         
     }
  }
}
</script>

<style lang="scss"  scoped>

</style>
