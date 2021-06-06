<template>
  <div class="goodslist">
    <div>我是goods的 {{type}} 商品列表</div>
    <goods-item></goods-item>
    <goods-item></goods-item>
    <goods-item></goods-item>
    <goods-item></goods-item>
    <goods-item></goods-item>
    <goods-item></goods-item>
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
    type:String
  }
}
</script>
