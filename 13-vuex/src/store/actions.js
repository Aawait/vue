export default {
    // 用来做异步操作，都再actions里面进行

    //  actions里面的方法，执行会默认传进来一个参数  context 上下文 相当于组件中的$store
    // 第二个参数也是传递过来的数据
    // 异步的代码。必须先经过actions，然后再提交到mutation，这样完整的过程，才能让devtools插件正常运行
    
     aUpdateInfo(context,payload){
        // 完成异步之后，我想告诉外界，我已经完成了，可以返回promise出去
         return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                 context.commit('asyncUpdate')
                 resolve('完成了异步任务')
             },1000)
         })
     }
   }