<template>
  <div id="home">
    <NavBar class="home-nav">
      <span slot="center">购物街</span>
    </NavBar>
    <Scroll class="content">
        <HomeSwiper :banners="banners" />
        <Recommend :recommends="recommends" />
        <Feature />
        <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" />

        <GoodsList :goods="goods[currentType].list" />
    </Scroll>
    <router-view />
  </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import HomeSwiper from "./childcpn/HomeSwiper";
import Recommend from "./childcpn/Recommend";
import Feature from "./childcpn/Feature.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    HomeSwiper,
    Recommend,
    Feature,
  },
  data() {
    return {
      banners: null,
      recommends: null,

      // 定义一个对象 存放着流行，新款，精选3个页面的数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    // 请求banner数据
    this.homeMultidata();
    // 请求商品列表数据
    this.homeGoods("pop");
    this.homeGoods("new");
    this.homeGoods("sell");
  },

  methods: {
    /**
     *
     * 事件监听相关方法
     *
     */
    // 流行，新款，精选 tab切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /**
     *
     * 网络请求相关方法
     */

    // 首页 banner图数据
    homeMultidata() {
      getHomeMultidata()
        .then((res) => {
          //  this.result = res
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 首页 商品列表数据
    homeGoods(type) {
      const page = ++this.goods[type].page;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        // 将请求的数据保存
        this.goods[type].list.push(...res.data.list);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
   height: 100vh;
  .content{
    height: calc(100% - 93px);
    overflow: hidden;
  }
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.tab-control {
  position: sticky;
  background: #fff;
  top: 44px;
  left: 0;
  right: 0;
}

</style>
