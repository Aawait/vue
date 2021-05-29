## v-bind
   - v-bind 指令用于绑定一个或多个属性值
     + 在开发中，哪些属性是需要动态绑定？
        + 例如a标签的href
        + img的src
        + 动态绑定一些类 样式等等

     <img v-bind:src="imgUrl" alt=""> 
    - 使用v-bind 指令 需要给哪个属性绑定动态属性，就再哪个属性前面加 
    - vue会解析v-bind指令，动态的给属性绑定变量，才会让属性里面的内容成为变量解析
    - 此时src中的imgUrl就是一个变量了，不再是一个普通的字符串，vue会自动解析这个变量

   - v-bind:要绑定的属性="vue变量"

   - 语法糖写法
      -  <img :src="imgUrl" alt="">  === <img v-bind:src="imgUrl" alt="">


## v-bind动态绑定class属性
 + 对象语法
   <h2 class='h2'  :class='{类名1:boolean,类名2:boolean}'>{{message}}</h2> -->
    + 动态绑定的class不会覆盖原有的class，会合并
    + 对象语法也可以写简单点，把对象放在vue实例的方法中，直接调用这个方法
      <h2 class='title' :class='getClass()'>{{message}}</h2>
   ```js
      <script>
        const app = new Vue({
            el: "#app",
            data: {
                message: "你好啊",
                isActive: true,
                isLine: true,
                active:'cici',
                line:'vivi'
            },
            methods: {
                btnClick: function () {
                    this.isLine = !this.isLine;
                },
                getClass: function () {
                    return {
                        active: this.isActive,
                        line:this.isLine
                    }
                },
                arrClass: function () {
                    return [this.active,this.line]
            
            }
        })
     </script>
   ```
      + 数组语法 (少用)
            + 缺点:类名写死了
               <h2 class='title' :class="['类名1','类名2',...]">{{message}}</h2>

            + 当然可以写变量，注意写变量不能加单引号，否则当成字符串解析
               <h2 class='title' :class="[active,line]">{{message}}</h2>

            + 也可以把数组写到vue实例中methods对象中，这样代码更加简介
               <h2 class='title' :class="arrClass()">{{message}}</h2>


## v-bind动态绑定style属性
   - 这里v-bind动态绑定style标签,参数是一个对象，key：value的形式
     +  <h2 :style="{key1(css属性):value1(css属性值)}">{{message}}</h2>

   - 对象的属性key可以不加引号，值value一定要加引号，否则会被vue当成变量解析
     +  <h2 :style="{fontSize:'50px'}">{{message}}</h2>

   -  这里对象中的属性值不加引号，vue会对它当成变量解析，会去实例中的data对象中查找fontSize这个变量
     +  <h2 :style="{fontSize:fontSize,color:color}">{{message}}</h2>

   -  如果觉得对象太长不便于观看，可以把这个对象抽出来，放入vue实例的methods对象中定义一个方法返回该对象
     +  <h2 :style="setStyle()">{{message}}</h2>

   -  也可以这样写,把单位拼接再变量后面
     +  <h2 :style="{fontSize:font+'px'}">{{message}}</h2>

     ```js
          <script>
        const app = new Vue({
            el:'#app',
            data:{
                message:'你好啊',
                fontSize:'100px',
                font:200,
                color:'red'
            },
            methods:{
                setStyle(){
                    return {fontSize:this.fontSize,color:this.color}
                }
            }
        });
    </script>

     ```
