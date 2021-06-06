<template>
   <div class="recommend">
       <div v-for="(item,i) in recommends" :key="i" class="recommend-item">
            <a :href="item.link">
              <img :src="item.image" alt="">
              <span class="title">{{ item.title }}</span>
            </a>
       </div>
   </div>
</template>

<script>

export default {
   name: "Recommend",
   props: {
     recommends: {
       type: Array,
       default(){
         return []
       }
     }
   }

}
</script>

<style lang="scss" scoped>

  .recommend{
    width: 100vw;
    height:140px;
    padding-top: 20px;
    display: flex;
    border-bottom: 8px solid #eee;
    .recommend-item{
      flex: 1;
      text-align: center;
      font-size: 12px;
      img{
        width: 70px;
        height: 70px;
        margin-bottom: 5px;
      }
      .title{
        display: block;
      }
    }
  }
</style>
