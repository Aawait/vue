<template>

        <div class="hotshow">
            <loading v-if="list.length == 0"></loading>
            <list :list="list" :type="type"></list>
        </div>
        
</template>


<script>

import axios from '@/api/axios'
import Loading from 'components/loading/Loading'
import List from 'components/list/List'

export default {
    name: "HotShow",
    props: {},
    created(){
        //  https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=5348003
        
        // 配置请求头 拿待映列表数据
       axios.defaults.headers.info = ''
       axios({
             url: 'https://m.maizuo.com/gateway',
             method: 'get',
             params: {
                     cityId: 440100,
                     k: 5348003 ,
                     pageNum: this.pageNum,
                     pageSize: this.pageSize,
                     type: this.type
              },
             
       }).then(res=>{
           this.list = res.data.data.films
       })
    },
    data(){
        return {
           type: 1,
           list: [],
           pageNum: 1,
           pageSize: 10,
        }
    },
    components: {
      Loading,
      List
    },
    methods: {
        
    }
   
}
</script>

<style lang="scss" scoped>
    
</style>