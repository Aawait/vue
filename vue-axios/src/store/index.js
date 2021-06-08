import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true
  },
  mutations: {
    changeloading(state,payload){
        state.loading = payload
    } 
  },
  actions: {
  },
  modules: {
  }
})
