
import HttpRequest from './axios'

const axios = new HttpRequest("http://127.0.0.1:3000/")

export function getUserAxios(){
    const config = {
        url: '/axios/test1',
        method: "GET",
        params: {
            type: "get",
            name: "getuser"
        }
    }
    return axios.request(config)
}

export function postUserAxios(){
    const config = {
        url: '/axios/test2',
        method: "POST",
        data: {
            type: "post",
            name: "postuser"
        }
    }

    return axios.request(config)
}

export function errUserAxios(){
    const config = {
        url: '/axios/test3',
        method: "POST",
        data: {
            code: 0,
            message: "服务器你错没？",
            name: "POST请求测试"
        }
    }

    return axios.request(config)
}