export default {
    
    // 针对不同的模块做数据保存
    // vue使用单一状态树，那么就意味着有很多数据交给vuex管理，当应用变得复杂的时候，store对象可能就很复杂
    // 为了解决这个问题，vuex中允许我们将store分割成模块，每一个模块拥有自己的state，mutations，actions，getters


    //定义再模块的state最终会塞到根实例的state里面去，所以使用直接 $store.state.moduleA
    state:{
        name :"Tom"
    },
    // 定义再模块中mutations的方法，在组件内按照正常commit提交就好，它会先到根的mutations中找，然后再去模块中的mutations中找
    mutations:{
        updateName(state,payload){
            state.name = payload
        }
    },
    // 定义再模块中的getters的方法，再组件内也是正常直接使用 通过$store.getters.fullName
    getters: {
        // 第一个参数为当前模块的state对象
        fullName(state){
           return state.name + '66666666'
        },
        // 第二个参数为当前模块的getters对象
        fullName2(state,getters){
            return getters.fullName + '777777777'
        },
        // 第三个参数为 根实例中的state对象
        fullName3(state,getters,rootState){
            return getters.fullName2 + rootState.counter
        }
    },
    // 定义再模块中的actions的方法，和再根里面定义的使用方法一样，但是注意只能提交到自己模块的 mutations对象，无法提交到根mutations
    actions: {
        asyncUpName(context){
           // 模块中的 context ，可以通过rootState,rootGetters 拿到根里面的state和getters对象
           setTimeout(()=>{
               console.log(context);
               context.commit('updateName','black')
           },1000)
        }
    }
}