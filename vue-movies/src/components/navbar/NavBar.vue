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
            background: #fff;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;

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
           display: flex;
           align-items: center;
           background: #fff;
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

        .topshow{
            display: none;
        }

        .downshow{
            position: fixed;
            top: 44px;
            left: 0;
            right: 0;
        }
     }
</style>