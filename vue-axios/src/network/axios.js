
import axios from 'axios'
import store from '../store/index'
class HttpRequest{
    constructor(baseURL){
        this.baseURL = baseURL
        this.query = {

        }
    }
   
    // 设置axios请求的初始配置值
    getInsideConfig(){
        return {
            baseURL : this.baseURL,
            headers: {}
        }
    }
    
    // 销毁url
    distory(url){
        delete this.query[url]
        // Object.keys 返回一个数组 数组里的每一项是这个对象的key值
        if(Object.keys(this.query).length === 0){
            store.commit('changeloading',false)
        }
    }

    interceptors(instance,url){

        console.log("进入了axios拦截器");
        // 设置请求拦截
        instance.interceptors.request.use(config => {
            console.log("请求拦截了");
         
            if(Object.keys(this.query).length === 0){
                store.commit('changeloading',false)
            } 
             // 请求地址添加到属性中
             this.query[url] = true
            return config
        },err => {
            console.log(err);
        })


        // 设置响应拦截
        instance.interceptors.response.use(res => {
            console.log("响应拦截了");
           // 响应回来删掉url
           this.distory(url)
            return res.data  // 过滤掉axios给添加的一些属性 只取重要数据
        },err => {
            console.log("进入响应错误的err了",err);
            
            this.distory(url)

            if(err && err.response){
                switch(err.response.status){
                    case 400:
                        err.message = '请求错误噢 '
                        break
                    case 401:
                        err.message = '未授权，请登录'
                        break
                    case 403:
                        err.message = '拒绝访问'
                        break
                    case 404:
                        err.message = `请求地址出错`
                        break
                    case 408:
                        err.message = '请求超时'
                        break
                    case 500:
                        err.message = '服务器内部错误'
                        break
                    case 501:
                        err.message = '服务未实现'
                        break
                    case 502:
                        err.message = '网关错误'
                        break
                    case 503:
                        err.message = '服务不可用'
                        break
                    case 504:
                        err.message = '网关超时'
                        break
                    case 505:
                        err.message = 'HTTP版本不受支持'
                        break
                }
            }
            // 把错误返回
            return Promise.reject(err)
        })
    }

    request(config){

        // 创建一个axios实例对象
        const instance = axios.create()

        config = Object.assign(this.getInsideConfig(),config)
       
        // 发送前先将请求推入拦截器处理
        this.interceptors(instance,config.url)

        return instance(config)
    }

}


export default HttpRequest