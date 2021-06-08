
const express = require('express')
const cors = require('cors')


const app = express()

// express配置 POST请求 req.body获取参数
app.use(express.json()) 
app.use(express.urlencoded({ extended: false}))

app.use(cors())

app.get('/',function(req,res){
    res.send('hello world')
})

app.get('/axios/test1',function(req,res){
   
    res.send({
        code: 1,
        message: '收到客户端的/axios/test1请求了',
        path: req.path,
        query: req.query
    })
})


app.post('/axios/test2',function(req,res){

    res.status(403).send({
        code: 0,
        message: "看看哪里出错啦",
        path: req.path,
        data: req.body
    })
})


app.post('/axios/test3',function(req,res){

    res.status(401).send({
        code: 0,
        message: "看看哪里出错啦",
        path: req.path,
        data: req.body
    })
})


app.listen(3000,function(){
    console.log("app is running at port 3000...");
})