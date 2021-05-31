<template>
       <div id="navbar">
         <slot name="navbar-top"></slot>
         <slot name="navbar-down"></slot>
       </div>
</template>


<script>
export default {
    name: "NabBar"
}
</script>

<style lang ="scss" scoped>
     #navbar{
        .navbar-top{
            width: 100%;
            height: 44px;
            display: flex;
            color:#191A1b;
            .navbar-sm{
                width: 70px;
                text-align: center;
                line-height: 44px;
                font-size: 13px;
                display: flex;
                justify-content: center;
            }
            .navbar-bl{
                flex: 1;
                text-align: center;
                line-height: 44px;
                font-size: 17px;
            }
        }

        .navbar-down{
           width: 100%;
           height: 49px;
           background: #f1f1f1;
           display: flex;
           align-items: center;
             .navbar-item{
                  height: 100%;
                  font-size: 14px;
                  flex: 1;
                  text-align: center;
                  line-height: 49px;
                  display: flex;
                  justify-content: center;
                   a{
                      color: #191A1b;
                      border-bottom: 2px solid transparent;
                      text-decoration: none;
                   }

                   .active{
                       color: #ff5f16;
                       border-color: #ff5f16;
                   }

               }

  
        }
     }
</style>