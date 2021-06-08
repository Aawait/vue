<template>
  <div class="goodslist">
     <GoodsItem v-for="(item,i) in goods" :key="i" :gooditem="item" />
  </div>
</template>


<script>

import GoodsItem from './GoodsItem.vue'

export default {
  name: "GoodsList",
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .goodslist{
    display: flex;
    flex-wrap: wrap;
    // padding: 0 5px;
    justify-content: space-evenly;

  }
</style>
