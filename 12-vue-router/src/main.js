import Vue from 'vue'
import App from './App.vue'
// import store from './store'

// 这里接收router导出的路由对象,如果导入的是一个文件夹，它会自动去找index文件
import router from './router'
Vue.config.productionTip = false

// 所有的组件都继承vue的原型
// 往vue的原型添加一个方法，所有组件都可以调用
Vue.prototype.testMethod = function(){
  console.log("往vue原型添加的testMethod方法");
}

new Vue({
  // store,
  // 挂载路由到vue实例
  router,
  render: h => h(App)
}).$mount('#app')
