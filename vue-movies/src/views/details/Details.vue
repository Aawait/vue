<template>
    <div id="details">
         <div class='header'>
             <img src="https://static.maizuo.com/pc/v5/usr/movie/4c4153c2a4c00a055f839adc9b85c551.jpg?x-oss-process=image/quality,Q_70" alt="">
             <router-link to="/movie" class="icon">
                <i class="iconfont icon-left"></i>
             </router-link>
         </div>
         <div class="content">
              <div class="title">
                  <p class="title-left">
                      <span>速度与激情9</span>
                      <span>3D</span>
                  </p>
                  <p class="title-right">
                       <span>7.2</span>
                       <span>分</span>
                  </p>
              </div>
         </div>
    </div>
</template>

<script>

import axios from '@/api/axios'

export default {
    name: "Details",
    data(){
        return {
            filmid : this.$route.params.filmid,
            data : {}
        }
    },
    methods: {
        test(){
            console.log(this.$route);
            console.log(this.data);
        }
    },
    created(){
      
        // 配置请求头 拿详情页数据
       axios.defaults.headers.info = 'info'
       axios({
           url: "https://m.maizuo.com/gateway",
           method: 'get',
           params: {
               k: 3633812,
               filmId: this.filmid
           }
       })
       .then(res => {
           this.data = res.data.data.film
       })
    }
}
</script>

<style lang="scss" scoped>
  #details{
      .header{
          height: 210px;
          overflow: hidden;
          position: relative;
          img{
              width: 100%;
              position: absolute;
              top: -80%;
          }

          .icon{
              display: block;
              width: 30px;
              height: 30px;
              position: absolute;
              top: 10px;
              left: 10px;
              text-align: center;
              line-height: 26px;
              background-color: rgba(201,201,201,0.6);
              border-radius: 50%;
              i{
                  font-size: 20px;
              } 
          }
      }

      .content{
          padding: 15px;
          color: #797D82;
          font-size: 13px;
          .title{
              display: flex;
              .title-left{
                  width: 250px;
                  display: flex;
                  align-items: center;
                  :nth-child(1){
                      font-size: 18px;
                      color: #191A1B;
                      margin-right: 8px;
                  }
                  :nth-child(2){
                      font-size: 12px;
                      background-color: #D2D6DC;
                      color: #fff;
                      padding: 0 2px;
                      border-radius: 2px;
                  }

              }

              .title-right{
                  display: flex;
                  flex: 1;
                  justify-content: flex-end;
                  color: #ffb232;
                  :nth-child(1){
                      font-size: 18px;
                      font-style: italic;
                      margin-right: 3px;
                  }
                  :nth-child(2){
                      font-size: 12px;
                      height: 16px;
                      align-self: flex-end;
                      margin-bottom: 2px;
                  }
              }
              
          }
      }
  }
</style>