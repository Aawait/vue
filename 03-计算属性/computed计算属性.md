## computed vue实例中的计算属性

```js
<script>
      const app = new Vue({
          el :"#app",
          data:{
              firstName :'Lebron',
              lastName :'James'
          },
          // 计算属性，里面一般定义一些函数,使用时直接写属性名就可以使用，不需要加()调用
          computed:{
              fullName : function(){
                return this.firstName + ' ' + this.lastName;
              }
          },
          methods:{
              getFullName : function(){
                  return this.firstName + ' ' + this.lastName;
              }
          }
      });
    </script>
```

  -  如果我们需要拼接两个变量显示再dom中我们可以这样操作 
  -  但是这样写不便于观看，代码过长过于复杂 
        <h2>{{firstName + ' ' + lastName}}</h2>
        <h2>{{firstName}} {{lastName}}</h2>

  -  在开发中，我们可能需要再数据展示之前，对他进行一些结合或者一些变化，之后再展示 
        <h2>{{getFullName()}}</h2>

  -  vue实例中的计算属性对象 computed 
  -  计算属性computed中 虽然是一个函数，但是也是一个属性，直接写属性名就可以使用，不用加()调用，也是种语法糖 
        <h2>{{fullName}}</h2>
  

## methods 和 computed 的区别
  + methods 方法 每次执行都会调用一次函数
  + computed 计算属性 vue内部会缓存 如果数据没有发生改变 只会从vue缓存中返回 不会多次调用这个函数
     - 如果有需要多次使用的地方 使用计算属性性能更好 如果值发生改变 vue内部会监听到 并把最新的值缓存到vue内部中