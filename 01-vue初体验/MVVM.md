![image-20210511093407123](C:\Users\你是不是CC\AppData\Roaming\Typora\typora-user-images\image-20210511093407123.png)

## 什么是MVVM呢？ Model viewModel view

## view  视图层
   - 在前端中，通常就是DOM层
   - 主要的作用就是给用户展现各种信息

## Model 数据层
   - 数据可能是我们固定的死数据，更多的是来自我们服务器，从网络上请求下来的数据


## viewmodel 视图模型层  视图模型层是view 和 model沟通的桥梁 主要做的两件事情
   - Data Binding
     + 把model的数据绑定到界面上，将model的改变实时反应到view中(界面)
   - DOM Listener
     + DOM监听，当DOM发生一些事件时，可以监听到，并在需要的情况下改变对应的data   