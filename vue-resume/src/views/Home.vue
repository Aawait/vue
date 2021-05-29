<template>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class='home'>
      <p>作品1</p>
    <div class="works">
        <div class="big works-item" style="top: 0; left: 0;">
          <!-- <img
            src="https://ftp.bmp.ovh/imgs/2020/11/1ada6c681f4ff642.jpg"
            alt="作品1"
          /> -->
          <img :src="imgUrl.img1" alt="优品购首页">
        </div>
        <div class="big works-item" style="top: 0; left: 645px;">
          <!-- <img
            src="https://ftp.bmp.ovh/imgs/2020/11/66e27522ff9b4a04.jpg"
            alt="作品2"
          /> -->
          <img :src="imgUrl.img2" alt="优品购详情页">
        </div>
        <div class="big works-item" style="top: 312px; left: 645px;">
           <!-- <img
            src="https://ftp.bmp.ovh/imgs/2020/11/0a79d95e76a6590f.jpg"
            alt="作品3"
          />  -->
          <img :src="imgUrl.img3" alt="Gshopper首页">
        </div>
        <div class="big works-item" style="top: 312px; left: 645px;">
          <!-- <img
            src="https://ftp.bmp.ovh/imgs/2020/11/0a79d95e76a6590f.jpg"
            alt="作品3"
          /> -->
          <img :src="imgUrl.img4" alt="Gshopper首页">
        </div>

      </div>
    </div>

   
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props:['imgUrl']
}
</script>


<style scoped>
    .home p{
       margin-top: 10px;
       font-size: 20px;
       font-weight: 600;
    }
    .works{
      height: 700px;
      display: grid;
      grid-template-columns: repeat(2,50%);
      grid-template-rows: repeat(2,50%);
    }

    .works .works-item{
      margin: 10px;
      box-sizing: border-box;
      border: 2px solid skyblue;
      border-radius: 3px;
      overflow: hidden;
    }
    .works .works-item img{
      width: 100%;
      height: 100%;
    }
</style>