<template>
  <div id="home">
    <NavBar class="home-nav">
      <span slot="center">蘑菇街</span>
    </NavBar>
    <HomeSwiper :banners="banners" />
    <Recommend :recommends="recommends" />
    <Feature />
    <TabControl  :titles="['流行','新款','精选']" class="tab-control" />
    <router-view />
  </div>
</template>


<script>

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl"

import HomeSwiper from './childcpn/HomeSwiper'
import Recommend from './childcpn/Recommend'
import Feature from './childcpn/Feature.vue'

import { getHomeMultidata,getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    Recommend,
    Feature
  },
  data() {
    return {
      banners: null,
      recommends: null,
      goods: {
        pop: { page: 0,list: [] },
        new: { page: 0,list: [] },
        sell: { page: 0,list: [] }
      }
    };
  },
  created() {

   // 请求banner数据
   this.homeMultidata()
   // 请求商品列表数据
   this.homeGoods('pop')

  },

  methods: {
    // 首页 banner图数据
    homeMultidata(){

      getHomeMultidata()
      .then((res) => {
        //  this.result = res
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
      .catch((err) => {
        console.log(err);
      });
    },

   // 首页 商品列表数据
    homeGoods(type){
      const page = this.goods[type].page ++
      getHomeGoods(type,page)
      .then(res => {

        this.goods[type].list = res

      })

    }
  }
};
</script>

<style lang="scss" scoped>
.home-nav {
  background: var(--color-tint);
  color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.tab-control{
  position: sticky;
  background: #fff;
  top: 44px;
  left: 0;
  right: 0;
}

</style>
