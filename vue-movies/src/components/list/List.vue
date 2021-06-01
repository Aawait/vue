<template>
       
       <ul class="list">
           <li v-for="(item,index) in list" class="listitem" :key="index" @click="goDetails(item.filmId)">
               <div class="item-left">
                   <img :src="item.poster" alt="">
               </div>
               <div class="item-middle">
                  <div class="middle-header">
                      <span class="name">{{item.name}}</span>
                      <span class="num">{{item.item.name}}</span>
                  </div>
                  <div class="middle-score" v-if="type == 1">
                       <span class="label">观众评分</span>
                       <span class="score">{{item.grade}}</span>
                  </div>
                  <div class="middle-actor">
                       <span>主演：{{item.actors | actor}}</span>
                  </div>
                  <div class="middle-coun" v-if="type == 1">
                       <span>{{item.nation}}</span>&nbsp;|&nbsp;<span>{{item.runtime}}分钟</span>
                  </div>
                  <div class="middle-coun" v-if="type == 2">
                       <span>上映时间：</span><span>{{item.premiereAt | formatTime}}</span>
                  </div>
               </div>
               <div class="item-right" v-if="type == 1">
                   <button class="buy">购票</button>
               </div>
               <div class="item-right" v-if="type == 2 && item.isPresale">
                   <button class="pre">预购</button>
               </div>
           </li>
       </ul>
</template>


<script>


export default {
    name: "List",
    props: ['list','type'],
    filters: {
        actor(value){
            let str = '';
            if(value){
                value.forEach(item=>{
                    str += item.name + ' '
                })
            }else{
                str = "暂无数据"
            }

            return str
            
        },
        formatTime(value){
            // 时间戳转换
            value = value *1000;
            let time =  new Date(value).toLocaleString();  // "2021/6/4上午8:00:00"
             //  2021/6/4 -> 2021-6-4
            time = /\d{4}\/\d+\/\d+/.exec(time)[0].replace(/\//g,'-'); 
            //  2021-6-4 -> 5
            let day = new Date(time).getDay();
            let week;
            switch(day){
               case 1:
               week = "周一"
               break
               case 2:
               week = "周二"
               break
               case 3:
               week = "周三"
               break
               case 4:
               week = "周四"
               break
               case 5:
               week = "周五"
               break
               case 6:
               week = "周六"
               break
               case 0:
               week = "周日"
               break
            }

            return week +' '+ time
        }
    },
    methods: {
        goDetails(filmId){

            this.$router.push('/details/'+filmId);
        }
    }
}
</script>

<style lang="scss" scoped>
    .list{
         padding: 0 15px;
        .listitem{
            padding: 15px 0;
            display: flex;
            font-size: 13px;
            border-bottom: 1px solid #ededed;
          
            .item-left img{
                border-radius: 2px;
                width: 66px;
                height: 96px;
            }

            .item-middle{
                width: 210px;
                padding: 0 10px;
                color: #797D82;
               .middle-header{
                   margin-bottom: 5px;
                   display: flex;
                   align-items: center;
                   .name{
                   font-size: 16px;
                   margin-right: 5px;
                   color: #191A1b;
                 }

                 .num{
                   background: #D6D2DC;
                   font-size: 9px;
                   color: #fff;
                   height: 14px;
                   line-height: 14px;
                   padding: 0 2px;
                   border-radius: 2px;
                  }
               } 
               .middle-score{
                   margin-bottom: 5px;
                   .score{
                   font-size: 14px;
                   color: #ffb232;
                   margin-left: 5px;
                   }
               }
               .middle-actor{
                   text-overflow: ellipsis;
                   overflow: hidden;
                   white-space: nowrap;
                   margin-bottom: 5px;
               }

        }

        .item-right{
            width: 50px;
            line-height: 100px;
            button{
              width: 100%;
              height: 25px;
              border-radius: 4px;
              background: #fff;
            }

            .buy{
              border: 1px solid #ff5f16;
              color:#ff5f16;
            }
            .pre{
              border: 1px solid #ffb232;
              color:#ffb232;
            }


        }
    }
}
</style>