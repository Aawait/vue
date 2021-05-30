<template>
  <div id="app">
     <h2>-----------modules的内容---------</h2>

     <!-- 定义的模块最终会塞到state里面去，所以组件使用直接 $store.state.moduleA -->
      <h2>{{$store.state.moduleA}}</h2>
      <button @click="updateName">修改modules的name</button>
      <h2>{{$store.getters.fullName}}</h2>
      <h2>{{$store.getters.fullName2}}</h2>
      <h2>{{$store.getters.fullName3}}</h2>

      <button @click="asyncUpname">异步修改modules的name</button>


     <h2>-----------mutations的内容---------</h2>
     <h2>{{$store.state.info}}</h2>
     <!-- <p>{{$store.state.students}}</p> -->
     <button @click="updateInfo">修改属性</button>

     <h2>-----------actions的内容---------</h2>
     <button @click="asyncUpdate">异步修改</button>

     <h2>-----------mutations的内容---------</h2>
     <h2>{{$store.state.counter}}</h2>
     <button @click="addition">+</button>
     <button @click="subition">-</button>
     <button @click="addCount(5)">+5</button>
     <button @click="addCount(10)">+10</button>
     <button @click="addStudent()">添加学生</button>
      
      <h2>---------getters的内容------------</h2>
     <h2>{{$store.getters.powerCounter}}</h2>
     <h3>计算属性中传参：{{fullage(30)}}</h3>

     <!-- <h2>{{$store.getters.filterStu}}</h2> -->
     <h2>-----------Hello Vuex内容---------</h2>
     <hello-vuex></hello-vuex>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex'
import {INCREMENT,DECREMENT} from './store/mutation-type'
export default {
   name: "App",
   data(){
     return {
       message: "我是App组件",
       stu: {id:114,name:"alan",age:35}
     }
   },
   components: {
     HelloVuex
   },
   methods: {
     addition(){
       // 必须通过$store.commit的方式来修改vuex state对象中保存的数据，传递的参数是mutations中定义的方法名，它会执行对应的方法
       // 这样能明确的追踪数据的变化，方便调试
      //  this.$store.commit('increment')

      // 官方建议使用常量定义mutations的方法，以免混淆
       this.$store.commit(INCREMENT)
     },
     subition(){
      //  this.$store.commit('decrement')
       this.$store.commit(DECREMENT)
     },
     addCount(count){
       // 如果再提交的时候想要传递一些参数过去，就写在方法后面
       // 专业名词叫payload 负载，意思是提交的时候负载一些东西过去
       
       // 1.普通的提交封装
      //  this.$store.commit('incrementCount',count);

       // 2.特殊的提交封装,如果commit的参数是一个对象的时候，那么再 mutation中接收的方法的参数就成了一个对象
       this.$store.commit({
         type: "incrementCount",
         count,
         age:66
       })
     },
     addStudent(){
       // 如果需要传递多个数据，直接传递一个对象过去
       this.$store.commit('addStudent',this.stu);
     },
     updateInfo(){
      
       this.$store.commit('updateInfo')
     },
     asyncUpdate(){
        
      //  this.$store.commit('asyncUpdate')
      // 执行异步程序，先使用dispatch提交到actions中，再由actions执行完异步再提交到 mutations
      // dispatch调用哪个函数，哪个函数的返回值就会返回到dispatch这 因为再actions里面返回的promise 所以可以直接在这拿到异步的结果
      this.$store
      .dispatch('aUpdateInfo','我是payload参数')
      .then(res=>{
        console.log(res);
      })
     },

      // modules 中的mutations 也是正常提交就行
     updateName(){
        this.$store.commit('updateName','jerry')
     },
     // modules 中的 actions 也是和根里面的一样使用
     asyncUpname(){
        this.$store.dispatch('asyncUpName')
     }
   },
   computed: {
     // 所以再计算属性中也可以这样操作,要想传递参数，就返回一个函数
     fullage(){
       return function(age){
          return this.$store.state.students.filter(s => s.age > age)
       }
     }  
   }
}
</script>

<style>

</style>
