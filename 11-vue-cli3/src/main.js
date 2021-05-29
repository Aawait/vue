import Vue from 'vue'
import App from './App.vue'
// 导入router对象
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 将导入的router对象挂载到vue实例中，就可以使用vue路由了
  router,
  store,
  render: h => h(App)
}).$mount('#app')
