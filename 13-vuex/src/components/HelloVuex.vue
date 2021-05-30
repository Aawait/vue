<template>
<div>

  <h2>{{$store.state.counter}}</h2>
  <h2>{{$store.getters.filterStu}}+{{$store.getters.filterStuLen}}</h2>
  <h2>{{$store.getters.filterStuAge(30)}}</h2>

</div>

</template>

<script>

export default {
  name: 'HelloVuex',
}
</script>
