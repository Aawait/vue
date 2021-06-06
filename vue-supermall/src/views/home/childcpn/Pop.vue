<template>
  <div class="pop">
       <h3>我是pop</h3>
       <GoodsList type ="pop" />
  </div>
</template>

<script>

import GoodsList from 'components/content/goods/GoodsList'

export default {
  name: "Pop",
  components: {
    GoodsList
  }
}
</script>
