
// 配置vuex

import Vue from 'vue'
import Vuex from 'vuex'

// 把几个关键的对象抽离出去 使vuex的配置更加简洁
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex);


 /**
     * 观察者模式：每一个定义再state里的属性都会被watcher观察监听 DEV -> [watcher,watcher]
     * 
     *   这些state里面的属性都会被加入到响应式的系统中，而响应式系统会监听数据的变化，
     *   当属性发生改变，会通知所有界面中使用该属性的地方，让界面发生刷新
     */
// 状态 在这里可以定义一些所有组件都需要使用的变量

const state =  {
    counter: 1000,
    students: [
        {id:100,name:"cici",age:24},
        {id:101,name:"vivi",age:18},
        {id:102,name:"kobe",age:30},
        {id:103,name:"brand",age:56},
        {id:104,name:"curry",age:14},
    ],
    info: {
        name: "kobe666",
        age : 30,
        gender: "nan"
    }
 }

// 2.创建vuex对象 再一个项目里最好只有一个store 永远对应其他所有组件的$store
const store = new Vuex.Store({
   state,
   mutations,
   actions,
   getters,
   modules: {
     
     moduleA
   },
   
})


// 3.导出这个对象
export default store
