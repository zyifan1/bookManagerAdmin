/**
 * 封装axios
 * 使用时只需要引入即可
 */


import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:8090",
    timeout: 10000,
    // header: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJvbmlva2V5IiwiaWQiOiJUZXN0VXNlcklEIiwiZXhwIjoxNjg1ODg3ODExLCJpYXQiOjE2ODU4ODQyMTEsInVzZXJuYW1lIjoiVGVzdFVzZXIifQ.KzVyk4iV_WKFpsgzZF0WbzVOzlntcu0YqDZ7gch-7j8'},
})

/**
 * 全局响应拦截器
 */

axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default instance;