<template>
        <div id="movie">
              <nav-bar>
                       <div class="navbar-top" slot="navbar-top"  :class="{topshow:!fixed}">
                                <div class="navbar-sm" slot="address">
                                     <span>广州</span>
                                     <i class="iconfont icon-xia"></i> 
                                </div>
                                <div class="navbar-bl" slot="type">电影</div>
                                <div class="navbar-sm" slot="search"></div>
                       </div>
                       <div class="navbar-down" slot="navbar-down" :class="{downshow:fixed}">
                            <div class="navbar-item">
                                <router-link  to="/movie/hotshow">
                                   正在热映
                                </router-link>
                            </div>
                           <div class="navbar-item">
                             <router-link to="/movie/theshow">
                                  即将上映
                             </router-link>
                            </div>    
                       </div>
              </nav-bar>
           <router-view></router-view>
        </div>
</template>


<script>

 import NavBar from 'components/navbar/NavBar'

export default {
    name: "Movie",
    components: {
        NavBar
    },
    data(){
        return {
           fixed: false,
        }
    },
    created(){},
    methods: {},
    mounted(){
     
        addEventListener('scroll',()=>{

            this.fixed = window.scrollY >= 130 ? true : false
        })
    }
}
</script>


<style lang ="scss" scoped>
       
</style>