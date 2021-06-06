<template>
  <div class="sell">
        <h2>我是sell</h2>
        <GoodsList type="sell" />
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name: "Sell",
  components: {
    GoodsList
  }
}
</script>
