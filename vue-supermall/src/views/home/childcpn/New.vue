<template>
  <div class="new">
        <h3>我是new</h3>
        <GoodsList type ="new" />
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name: 'New',
  components: {
    GoodsList
  }
}
</script>
