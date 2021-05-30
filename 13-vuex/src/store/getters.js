
export default {
     // 类似于计算属性，当想把数据进行变化之后再给其他组件使用
   // 和mutations一样，调用getters里面的方法时，也会默认把state传递过来
   
    powerCounter(state){
        return Math.pow(state.counter,2) 
    },
    filterStu(state){
        return state.students.filter(s => s.age > 20)
    },
    // 第二个参数getters 可以拿到整个getters对象
    filterStuLen(state,getters){
        return getters.filterStu.length
    },
    // getters中的方法 默认是不能传递参数的，如果希望传递参数进来，只能让这个方法返回一个函数
    filterStuAge(state,getters){
        return function(age){
             return state.students.filter(s => s.age > age)
        }
    }
}