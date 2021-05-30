import {INCREMENT,DECREMENT} from './mutation-type'

export default {
   // mutation 同步函数 如果想修改vuex中保存的数据，通过提交mutations的方式，可以使vuex更加明确的追踪到数据的每一次改变的状态

    // 执行 mutations的方法时，会默认把state对象传过来，只需要接收即可

    // 官方推荐使用常量来定义 mutations 里面的方法，以免混淆搞错，
    [INCREMENT](state){
     state.counter ++ 
    },
    [DECREMENT](state){
     state.counter --
    },
  // mutations中的方法，第一个参数为默认传递过来的 state对象 第二个参数为提交时传递过来的参数
  incrementCount(state,payload){
 //    console.log(payload);
      state.counter += payload.count
  },
  addStudent(state,stu){
      state.students.push(stu)
  },
  updateInfo(state){
       // 动态修改也是响应式的，因为数据定义再state中已经被监听了
     //  state.info.name = "coderwhy"

     // 但是后面动态添加的数据页面无法响应式更新，因为没有被监听
     // state.info['address'] = "洛杉矶"
     Vue.set(state.info,'address','洛杉矶');
     
     // 删除某个属性并让页面响应式,适用于对象或数组，对象传递属性，数组传递索引
     // Vue.delete(state.info,'gender')
     Vue.delete(state.students,1)
  },
  // 如果是异步的程序，定义再mutation中，会使devtolls给出错误的更新，所以不要再mutation中使用异步操作
  asyncUpdate(state){
     //  setTimeout(()=>{
     //      state.info.name = "ooooo"
     //  },1000)
     state.info.name = "ooooo"
  }
}