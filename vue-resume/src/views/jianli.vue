<template>
  <div>
    <div :class="sticky ? 'sticky' : ''" id="topNavBar" class="topNavBar">
      <div class="topNavBar-inner clearfix">
        <a class="logo" href="#" alt="logo" style="float: left;">
          <span class="rs">陈晗</span>
          <span class="card">简历</span>
        </a>
        <nav class="menu" style="float: right;">
          <ul class="clearfix">
            <li>
              <a href="#siteAbout">关于</a>
            </li>
            <li>
              <a href="#siteSkills">技能</a>
            </li>
            <li>
              <a href="#siteWorks">作品</a>
              <ul class="submenu">
                <li>作品1</li>
                <li>作品2</li>
                <li>作品3</li>
              </ul>
            </li>
            <li>
              <a href="#">博客</a>
              <ul class="submenu">
                <li>博客1</li>
                <li>博客2</li>
                <li>博客3</li>
              </ul>
            </li>
            <li>
              <a href="#">日历</a>
            </li>
            <li>
              <a href="#">联系方式</a>
            </li>
            <li>
              <a href="#">其他</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="banner">
      <div class="mask"></div>
    </div>
    
    <main>
         
      <div data-x id="siteAbout" class="userCard">
        <div class="pictureAndText clearfix">
          <div class="picture">
             
            <img :src="touxiang" width="300" height="400" alt="头像" />
          </div>
          <div class="text">
            <span class="welcome"
              >Hello
              <span class="triangle"></span>
            </span>
            <h1>姓名：陈晗</h1>
            <p>前端开发工程师</p>
            <hr />
            <dl>
              <dt>年龄</dt>
              <dd>24</dd>
              <dt>所在城市</dt>
              <dd>广州</dd>
              <dt>邮箱</dt>
              <dd>c158595@126.com</dd>
              <dt>手机</dt>
              <dd>15088053345</dd>
            </dl>
          </div>
        </div>
        
        <footer class="media">
          <a href="#">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github"></use>
            </svg>
          </a>
          <a href="#">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Ankerwebicon-"></use>
            </svg>
          </a>
          <a href="#">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weibo"></use>
            </svg>
          </a>
        </footer>
      </div>
 
      <div class="zijigexinghuadingzhicode">
        <div class="downloadResume-wrapper">
          <div class="downloadResume" target="_blank">
            个人简介
          </div>
        </div>

        <div>
         
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
    <div class="line4"></div>
        </div>

        <p class="selfIntroduction">
          陈晗,前端开发工程师 精通vue，react，html，JavaScript，css3，jquery，小程序
          <br />
          技能：前端开发，php，Node.js，express，mangodb，webpack，bootstrap
          <br />热爱学习各种前沿的前端技术，喜欢钻研，代码上追求完美！
        </p>
      </div>
   
    </main>
    <section data-x id="siteSkills" class="skills">
      <h2>技能</h2>
      <ol class="clearfix">
        <li>
          <h3>
            HTML 5 &amp; CSS 3
          </h3>
          <div class="progressBar">
            <div ref="html1" class="progress" :style="{ width: width1 }"></div>
          </div>
        </li>
        <li>
          <h3>
            JavaScript
          </h3>
          <div class="progressBar">
            <div class="progress2"   :style="{ width: width2 }"></div>
          </div>
        </li>
        <li>
          <h3>
            jQuery
          </h3>
          <div class="progressBar">
            <div class="progress3" :style="{ width: width3 }"></div>
          </div>
        </li>
        <li>
          <h3>
            Vue.js
          </h3>
          <div class="progressBar">
            <div class="progress4" :style="{ width: width4 }"></div>
          </div>
        </li>
        <li>
          <h3>
            React.js
          </h3>
          <div class="progressBar">
            <div class="progress5" :style="{ width: width5 }"></div>
          </div>
        </li>
        <li>
          <h3>
            Node.js
          </h3>
          <div class="progressBar">
            <div class="progress6" :style="{ width: width6 }"></div>
          </div>
        </li>
      </ol>
    </section>
    <section class="portfolio" id="siteWorks">
      <h2>作品集</h2>
      <nav>
        <ol class="clearfix">
          <li @click="portfolio1">所有</li>
          <li @click="portfolio2">框架</li>
          <li @click="portfolio3">原生JS&amp;CSS</li>
        </ol>
        <div
          id="portfolioBar"
          :class="{
            bar: true,
            'state-1': bar1,
            'state-2': bar2,
            'state-3': bar3,
          }"
        >
          <div class="bar-inner"></div>
        </div>
      </nav>


      <!-- 使用组件 -->
      <div class="show">
        <keep-alive>

          <router-view :imgUrl="imgs"></router-view>
        </keep-alive>
         <!-- <Home :imgUrl="imgs"></Home> -->
      </div>
    </section>
    <div class="continue">
      <h1>作品详情</h1>
      <div class="continue-img">
           <img :src="imgs.img1" alt="">
           <img :src="imgs.img2" alt="">
           <img :src="imgs.img3" alt="">
           <img :src="imgs.img4" alt="">
           <img :src="imgs.img5" alt="">
           <img :src="imgs.img6" alt="">
           <img :src="imgs.img7" alt="">
           <img :src="imgs.img8" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import Home from "./Home.vue"
export default {
  //组件名字
  name: "comfilmlisttopnav",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    color: {
      type: String,
      default: "#000",
    },
  },
  //组件注册
  components: {
    Home
    },
  // vue数据集中管理
  data() {
    return {
      value: "1",
      isbar: true,
      bar1: true,
      bar2: false,
      bar3: false,
      sticky: false,
      width1: 10 + "%",
      width2: 1 + "%",
      width3: 1 + "%",
      width4: 1 + "%",
      width5: 1 + "%",
      width6: 1 + "%",
      width7: 1 + "%",
      width8: 1 + "%",
      touxiang:
        "https://www.hualigs.cn/image/60b205983dc17.jpg",
        imgs : {
          img1 : "https://z3.ax1x.com/2021/05/29/2A3FPS.png",
          img2 : "https://z3.ax1x.com/2021/05/29/2A3ern.png",
          img3 : "https://z3.ax1x.com/2021/05/29/2AtrDJ.png",
          img4 : "https://www.hualigs.cn/image/60b20f9374c50.jpg",

          img5 : "https://z3.ax1x.com/2021/05/29/2A3KaV.png",
          img6 : "https://www.hualigs.cn/image/60b209f3b37a6.jpg",
          img7 : "https://www.hualigs.cn/image/60b213ba6acf6.jpg ",
          img8 : "https://www.hualigs.cn/image/60b2106b9a419.jpg",

          img9 : "https://z3.ax1x.com/2021/05/29/2AGmNV.png",
          img10 : "https://www.hualigs.cn/image/60b2120c1b5ab.jpg",
          img11 : "https://www.hualigs.cn/image/60b2120c1831f.jpg",
          img12 : "https://www.hualigs.cn/image/60b2120c2b957.jpg",
          img13 : "https://www.hualigs.cn/image/60b2120c2e066.jpg ",
          img14 : "https://www.hualigs.cn/image/60b2120c28881.jpg"
        }
    };
  },
  //方法 函数写这里
  methods: {
    portfolio1() {

      this.bar1 = true;
      this.bar2 = false;
      this.bar3 = false;

      this.$router.push('/all')
    },
    portfolio2() {
      this.bar1 = false;
      this.bar2 = true;
      this.bar3 = false;

      this.$router.push('/details');
    },
    portfolio3() {
      this.bar1 = false;
      this.bar2 = false;
      this.bar3 = true;

      this.$router.push('/former');
    },
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
    toUpcase(value) {
      return value ? value.toUpperCase() : "";
    },
  },
  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后
  created() {
     setTimeout(() => {
            window.L2Dwidget.init({
                pluginRootPath: '../static/live2dw/',
                pluginJsPath: 'lib/',
                pluginModelPath: 'live2d-widget-model-haru_2/assets/', //中间这个haru_2就是你的老婆,想换个老婆,换这个就可以了
                tagMode: false,
                debug: false,
                model: { jsonPath: '../static/live2dw/live2d-widget-model-haru_2/assets/haru02.model.json' }, 
                display: { position: 'left', width: 350, height: 800 },  //调整大小,和位置
                mobile: { show: true },   //要不要盯着你的鼠标看
                log: false,
            })
        }, 1000);
           
           // 获取设置的title
        document.title = this.$route.matched[0].meta.title;
  },
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {
    window.addEventListener(
      "scroll",
      (e) => {
        // console.log("我进入了scroll监听  ");
        let top = document.documentElement.scrollTop;
        if (top > 300) {
          this.width1 = 90 + "%";

          // console.log(this.$refs)
          // this.$refs.html1.style.width = 200 +'px'
          // this.$refs.html1.style.width = 95 +'%'
        }
        if (top > 350) {
          this.width2 = 95 + "%";
        }
        if (top > 400) {
          this.width3 = 95 + "%";
        }

         if (top > 450) {
          this.width4 = 95 + "%";
        }
         if (top > 500) {
          this.width5 = 95 + "%";
        }
         if (top > 570) {
          this.width6 = 95 + "%";
        }
        // console.log(top);
        //吸顶高级效果
        if (top > 200) {
          this.sticky = true;
        } else {
          this.sticky = false;
        }
      },
      true
    );
  },
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},
  //组件路由守卫enter
  beforeRouteEnter(to, from, next) {
    next((vm) => {});
    // 注意，在路由进入之前，组件实例还未渲染，所以无法获取this实例，只能通过vm来访问组件实例
  },
  //组件路由守卫update更新
  beforeRouteUpdate(to, from, next) {
    // 同一页面，刷新不同数据时调用，
    next();
  },
  //组件路由守卫离开
  beforeRouteLeave(to, from, next) {
    // 离开当前路由页面时调用
    next();
  },
};
</script>

<style >
.topNavBar {
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.5s;
  color: #b7b7b7;
}
.topNavBar.sticky {
  background: white;
  padding: 10px 0;
  z-index: 1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  color: #3d4451;
}
.topNavBar-inner {
  padding: 0 16px;
}
.topNavBar nav {
  padding-top: 5px;
}
.topNavBar nav > ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.topNavBar nav > ul > li {
  float: left;
  margin-left: 17px;
  margin-right: 17px;
  position: relative;
}
.topNavBar nav > ul > li > a {
  font-size: 12px;
  color: inherit;
  font-weight: bold;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  padding-top: 5px;
  padding-bottom: 5px;
  display: block;
  position: relative;
}
.topNavBar nav > ul > li.active > a::after,
.topNavBar nav > ul > li.highlight > a::after {
  content: "";
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #e06567;
  height: 3px;
  animation: menuSlide 0.3s;
}
@keyframes menuSlide {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.topNavBar .submenu {
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  color: #3d4451;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.topNavBar li.active > .submenu {
  display: block;
  animation: submenuSlide 0.3s;
}
@keyframes submenuSlide {
  0% {
    margin-right: 100%;
  }
  100% {
    margin-right: 0%;
  }
}
.topNavBar .submenu > li {
  white-space: nowrap;
  padding: 5px 10px;
}

.topNavBar .logo {
  font-size: 24px;
  font-family: "Arial Black";
  padding-top: 3px;
  padding-bottom: 4px;
}
.topNavBar .logo .rs {
  margin-right: 4px;
  color: #e6686a;
}
.topNavBar .logo .card {
  color: #9a9da2;
}
.banner {
  height: 515px;
  background-image: url("https://ftp.bmp.ovh/imgs/2020/11/8af5cf9a2d77f24b.jpg");
  background-position: center center;
  background-size: cover;
}
.banner .mask {
  height: 515px;
  background-color: rgba(0, 0, 0, 0.8);
}

.userCard {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
}
.userCard .welcome {
  background: #e6686a;
  color: white;
  display: inline-block;
  padding: 4px 16px;
  line-height: 22px;
  position: relative;
  margin-bottom: 10px;
}
.userCard .welcome .triangle {
  display: block;
  border: 10px solid transparent;
  width: 0px;
  border-left-color: #e6686a;
  border-top-width: 0px;
  position: absolute;
  left: 4px;
  top: 100%;
}
.userCard .picture {
  float: left;
}
.userCard .text {
  float: left;
  margin-left: 65px;
  width: 470px;
}
.userCard .text h1 {
  margin-top: 18px;
}
.userCard .text hr {
  margin: 20px 0;
}
.userCard .pictureAndText {
  padding: 50px;
}
.userCard dl dt,
.userCard dl dd {
  float: left;
  padding: 5px 0;
}
.userCard dl dt {
  width: 30%;
  font-weight: bold;
}
.userCard dl dd {
  width: 70%;
  color: #9da0a7;
}

.userCard > footer.media {
  background: #e6686a;
  text-align: center;
}
.userCard > footer.media > a {
  display: inline-block;
  width: 40px;
  line-height: 30px;
  padding: 5px 0;
  border-radius: 50%;
  margin: 16px;
}
.userCard > footer.media > a:hover {
  background: #cf5d5f;
}
.userCard svg {
  width: 30px;
  height: 30px;
  fill: white;
  vertical-align: top;
}
main {
  margin-top: -340px;
}
main .downloadResume-wrapper {
  text-align: center;
}
main .downloadResume {
  font-size: 14px;
  line-height: 16px;
  padding: 21px 55px;
  border: 1px solid #e6686a;
  background: #e6686a;
  display: inline-block;
  border-radius: 2px;
  color: #3d4451;
  font-weight: bold;
  margin: 32px 0;
  transition: box-shadow 0.2s;
}
main .downloadResume:hover {
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.2);
}

.selfIntroduction {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: kai;
  line-height: 1.8;
  font-size: 18px;
}

section.skills,
section.portfolio {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}
section.skills > h2,
section.portfolio > h2 {
  text-align: center;
  color: #3d4451;
  font-size: 34px;
  line-height: 1.2;
  font-weight: 600;
}
section.skills h3 {
  font-size: 14px;
  line-height: 1.1;
  padding-right: 40px;
}
section.skills > ol {
  background: white;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
  padding: 42px 50px 10px;
  margin-top: 30px;
}
section.skills > ol > li {
  float: left;
  width: 98%;
  box-sizing: border-box;
}
section.skills > ol > li:nth-child(even) {
  float: right;
}
section.skills .progressBar {
  height: 5px;
  background: #fae1e1;
  border-radius: 2px;
  margin: 4px 0 40px;
  overflow: hidden;
}
section.skills .progressBar > .progress {
  height: 100%;
  background: #e6686a;
  width: 70%;
  border-radius: 2px;
  transform: translateX(0);
  transition: all 1s;
 background: -webkit-gradient(linear, 50% 50%, 70% 100%, from(red), to(#006495));/*谷歌*/
 background: -webkit-gradient(linear, 0 100%, 100% 100%, from(#2e98ff), to(#9276f7)); /** Chrome Safari **/
 background: -webkit-gradient(linear, 0 100%, 100% 100%, from(#2e98ff), to(#9276f7)); /** Chrome Safari **/
}
section.skills .progressBar > .progress2 {
  height: 100%;
  background: #e6686a;
  width: 70%;
  border-radius: 2px;
  transform: translateX(0);
  transition: all 1s;
 background: -webkit-gradient(linear, 50% 50%, 70% 100%, from(red), to(#006495));/*谷歌*/
background: -webkit-gradient(linear, 0 100%, 100% 100%, from(#2e98ff), to(#9276f7)); /** Chrome Safari **/
 background: -webkit-gradient(linear, 0 100%, 100% 100%, from(red), to(blue)); /** Chrome Safari **/
}

section.skills .progressBar > .progress3 {
  height: 100%;
  background: #e6686a;
  width: 70%;
  border-radius: 2px;
  transform: translateX(0);
  transition: all 1s;
background: -webkit-gradient(linear, 50% 50%, 70% 100%, from(red), to(#006495));/*谷歌*/
 background: -webkit-gradient(linear, 0 100%, 100% 100%, from(#2e98ff), to(#9276f7)); /** Chrome Safari **/
 background: -webkit-gradient(linear, 0 100%, 100% 100%, from(skyblue), to(pink)); /** Chrome Safari **/
}

section.skills .progressBar > .progress4 {
  height: 100%;
  background: #e6686a;
  width: 70%;
  border-radius: 2px;
  transform: translateX(0);
  transition: all 1s;
background: -webkit-gradient(linear, 50% 50%, 70% 100%, from(red), to(#006495));/*谷歌*/
 background: -webkit-gradient(linear, 0 100%, 100% 100%, from(#2e98ff), to(#9276f7)); /** Chrome Safari **/
 background: -webkit-gradient(linear, 0 100%, 100% 100%, from(black), to(grey)); /** Chrome Safari **/
}

section.skills .progressBar > .progress5 {
  height: 100%;
  background: #e6686a;
  width: 70%;
  border-radius: 2px;
  transform: translateX(0);
  transition: all 1s;
 background: -webkit-gradient(linear, 50% 50%, 70% 100%, from(red), to(#006495));/*谷歌*/
 background: -webkit-gradient(linear, 0 100%, 100% 100%, from(#2e98ff), to(#9276f7)); /** Chrome Safari **/
 background: -webkit-gradient(linear, 0 100%, 100% 100%, from(pink), to(yellow)); /** Chrome Safari **/
}
section.skills .progressBar > .progress6 {
  height: 100%;
  background: #e6686a;
  width: 70%;
  border-radius: 2px;
  transform: translateX(0);
  transition: all 1s;
 background: -webkit-gradient(linear, 50% 50%, 70% 100%, from(red), to(#006495));/*谷歌*/
 background: -webkit-gradient(linear, 0 100%, 100% 100%, from(#2e98ff), to(#9276f7)); /** Chrome Safari **/
 background: -webkit-gradient(linear, 0 100%, 100% 100%, from(blue), to(yellow)); /** Chrome Safari **/
}
section.skills.offset .progress {
  transform: translateX(-100%);
  background-image: linear-gradient(180deg, white 50%, red 50%);
}

section.portfolio {
  text-align: center;
  margin-bottom: 100px;
}
section.portfolio > nav {
  text-align: center;
}
section.portfolio > nav > ol {
  margin: 0 auto;
  display: inline-block;
  vertical-align: top;
}
section.portfolio > nav > ol > li {
  float: left;
  margin-left: 30px;
  cursor: pointer;
}
section.portfolio > nav > ol > li:first-child {
  margin-left: 0;
}
section.portfolio > nav {
  display: inline-block;
  vertical-align: top;
  margin-top: 32px;
}
section.portfolio > nav .bar {
  height: 5px;
  background: white;
  margin-top: 5px;
  margin-bottom: 28px;
  border-radius: 2px;
}
section.portfolio > nav .bar-inner {
  height: 100%;
  background: #e6686a;
  border-radius: 2px;
  transition: all 2s;
}
section.portfolio > nav .bar.state-1 .bar-inner {
  margin-left: 0;
  width: 50px;
}
section.portfolio > nav .bar.state-2 .bar-inner {
  margin-left: 65px;
  width: 50px;
}
section.portfolio > nav .bar.state-3 .bar-inner {
  margin-left: 140px;
  width: 96px;
}


.zijigexinghuadingzhicode {
  max-width: 940px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 5px solid skyblue;
  padding-bottom: 10px;
}

.continue {
  width: 1200px;
  margin: 0 auto;
}
 .continue h1 {
    text-align: center;
  }
  .continue .continue-img{
    width: 100%;
   
  }
  .continue .continue-img img{
    margin: 10px 0;
    width: 100%;
    height: 700px;
     border: 2px solid skyblue;
    border-radius: 5px;
  }

















 
</style>
