
// 配置网络请求

import axios from 'axios'

export function request(config){

    // 创建axios实例
    const instance = axios.create({
      baseURL: "http://123.207.32.32:8000",
      timeout: 5000
    })

    // 拦截请求配置
    instance.interceptors.request.use(config => {
            return config
    },err => {
           console.log(err);
    })
    // 拦截服务器返回的响应数据
    instance.interceptors.response.use(res => {
      return res
    },err => {
      console.log(err);
    })

    return instance(config)
}
