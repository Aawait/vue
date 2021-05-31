import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入px转rem的第三方包
import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
