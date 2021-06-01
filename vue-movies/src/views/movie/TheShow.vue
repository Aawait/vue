<template>
       <div class="theshow">
            <loading v-if="list.length == 0"></loading>
            <list :list="list" :type="type"></list>
       </div>
</template>


<script>

import axios from '@/api/axios'
import Loading from 'components/loading/Loading'
import List from 'components/list/List'

export default {
    name: "TheShow",
    components: {
        Loading,
        List
    },
    data(){
        return {
           type: 2,
           list: [],
           pageNum: 1,
           pageSize: 10,
        }
    },
    created(){
        // 配置请求头 拿待映列表数据
        axios.defaults.headers.info = ''
        axios({
             url: 'https://m.maizuo.com/gateway',
             method: 'get',
             list: [],
             params: {
                     cityId: 440100,
                     k: 1853317 ,
                     pageNum: this.pageNum,
                     pageSize: this.pageSize,
                     type: this.type
              }
         })
        .then(res=>{
          
           this.list = res.data.data.films
        })


    }
}
</script>