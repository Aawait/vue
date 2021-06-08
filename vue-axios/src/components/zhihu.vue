
<template>
  <div>
    <div id="fix-menu-warp">
      <div id="menu-scroll-div" style="top: 0px">
        <div id="main-menu" ref="top">主菜单 首页 会员发现</div>
        <div id="details-menu" ref="bottom">推荐 关注 热榜</div>
      </div>
    </div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
  </div>
</template>

<script>
export default {
  name: "zhihu",
  props: [],
  components: {},
  data() {
    return {

     flag : true
};
  },
  //方法 函数写这里
  methods: {},
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {},
  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后
  created() {},
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {
 
     window.onscroll = () => {
        if(window.scrollY >= this.$refs.top.offsetHeight){
            this.$refs.top.style.height = 0
        }

        if(window.scrollY <= this.$refs.top.offsetHeight){
            this.$refs.top.style.height = '50px'
        }
        
     }
      
  },
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
};
</script>


<style lang="scss"  scoped>
*{
  margin: 0;
  padding: 0;
}

#fix-menu-warp{
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 100;
  box-shadow:0 1px 3px rgba(26,26,26,.1) ;
}
#menu-scroll-div{
  position: relative;
  height: 50px;
  overflow: hidden;
  width: 100%;
  transition: 0.5s all ease;
}

#main-menu{
  height: 50px;
  width: 100%;
  background: brown;
  text-align: center;
  display: block;
  transition: all 0.5s ease;
  line-height: 50px;
  position: relative;
  top: 0; 
  overflow: hidden;
}

.main-menu-active{
   display: none !important;
}

#details-menu{
  height: 50px;
  width:  100%;
  background: pink;
  text-align: center;
  transition: all 0.5s ease;
  display: block;
   line-height: 50px;
  overflow: hidden;

}

</style>
