//axios封装
import axios from "axios";

//创建axios实例用来管理axios创建的api
   export const httpInstance = axios.create({
    baseURL: "http://47.115.221.26:8080",//基地址 就是前面公共的url地址 就像百度的基地址是http://baidu.com
    timeout: 5000,//超时时间


})
// axios请求拦截器
httpInstance.interceptors.request.use(config => {


    // const token = JSON.parse(localStorage.getItem('token') as string).token
    // if(token){
    //     config.headers.Authorization = `Bearer ${token}`
    // }



    return config;
}, e => Promise.reject(e))

// axios响应式拦截器
//这里的拦截器没有考虑状态异常  只考虑了吧请求过来的数据的res.data变为res来调用方便
httpInstance.interceptors.response.use(res => res.data, e => {
    //请求失败后的操作
 alert('发送失败')
    //如果token过期 则需要重新登录

    return Promise.reject(e)
})
