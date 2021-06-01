<template>
    <div>
        <nav-bar>
              <div class="navbar-top" slot="navbar-top">
                                <div class="navbar-sm" slot="address">
                                     <span>广州</span>
                                     <i class="iconfont icon-xia"></i> 
                                </div>
                                <div class="navbar-bl" slot="type">影院</div>
                                <div class="navbar-sm" slot="search">
                                    <i class="iconfont icon-sousuo"></i>
                                </div>
                       </div>
                       <div class="navbar-down" slot="navbar-down">
                            <div class="navbar-item">
                                   <span>全城</span>
                                   <i class="iconfont icon-xia"></i> 
                            </div>
                           <div class="navbar-item">
                                   <span>APP订票</span>
                                   <i class="iconfont icon-xia"></i> 
                            </div>   
                            <div class="navbar-item">
                                   <span>最近去过</span>
                                   <i class="iconfont icon-xia"></i> 
                            </div>  
                       </div>
        </nav-bar>
    </div>
</template>


<script>

import NavBar from 'components/navbar/NavBar'

export default {
    name: "Cinema",
    components: {
        NavBar
    }
}
</script>