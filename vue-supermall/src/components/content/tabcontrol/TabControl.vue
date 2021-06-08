<template>
   <div class="tabcontrol">
         <div v-for="(item,i) in titles"
          :key="i" class="tabcontrol-item"
          :class="{active: i === selectIndex}"
          @click="tabClick(item,i)">
                 <span>{{ item }}</span>
         </div>
   </div>
</template>

<script>
export default {
    name: "TabControl",
    props: {
      titles:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
         selectIndex :0
      }
    },
    methods: {
      tabClick(item,i){

        this.selectIndex = i

        // 发送数据给父组件，并把索引传过去
        this.$emit('tabClick',i)

      }
    }
}
</script>

<style lang="scss" scoped>
   .tabcontrol{
     width: 100vw;
     display: flex;
     .tabcontrol-item{
       flex: 1;
       height: 40px;
       text-align: center;
       font-size: 15px;
       line-height: 40px;
        span{
          border-bottom: 3px solid transparent;
          padding: 5px;
        }
     }

        .active{
             color: var(--color-high-text) ;
           }

        .active span{
           border-color:var(--color-high-text);
        }
   }
</style>
