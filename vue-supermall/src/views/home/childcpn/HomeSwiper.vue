<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#33a3dc" :show-indicators="true">
      <van-swipe-item v-for="(item,i) in banners" :key="i">
          <a :href="item.link">
            <img :src="item.image" alt="">
            </a>
      </van-swipe-item>
    </van-swipe>
</template>

<script>
export default {
   name: "HomeSwiper",
   props: {
     banners: {
       type: Array,
       default(){
         return []
       }
     }
   }
}
</script>


<style lang="scss">

.my-swipe{
  width: 100vw;
  overflow: hidden;
  position: relative;
  .van-swipe-item{
      float: left;
       img{
      width: 100%;
      height: 100%;
      }
  }
}

.van-swipe__indicators{
    height: 10px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    .van-swipe__indicator{
      display: inline-block;
      margin: 0 3px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #fff;
    }


  }

</style>
