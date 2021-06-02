import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入px转rem的第三方包
import 'amfe-flexible'

Vue.config.productionTip = false

// 定义事件列车,将vue实例保存再原型上，所有组件都能访问了
Vue.prototype.eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
