<template>
  <div class="goodsitem">
       <img :src="gooditem.show.img" alt="" class="goods-img">
       <p class="goods-title">{{ gooditem.title }}</p>
       <div class="goods-info">
             <span class="goods-price">￥{{ gooditem.price }}</span>
             <i class="goods-icon"><img src="~assets/img/common/collect.svg" alt=""></i>
             <span class="goods-cfav">{{ gooditem.cfav }}</span>
       </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    gooditem: {
      type: Object,
      default(){
        return{}
      }
    }
  }

}
</script>


<style lang="scss" scoped>
  .goodsitem{
      padding:5px;
      width: 50%;
      text-align: center;
      .goods-img{
        width: 100%;
        height: 260px;
        border-radius: 5px;

      }
      .goods-title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        color:#333;
        margin: 5px 0;
      }

      .goods-info{
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
        .goods-price{
          color: var(--color-tint);
          margin-right:15px;
        }
        .goods-cfav{
          margin-left: 2px;
          color: #fcaf17;
        }

        .goods-icon{

          img{
            margin-top: 2px;
             width: 15px;
             height: 15px;
          }
        }
      }
  }
</style>
