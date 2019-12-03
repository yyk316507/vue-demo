import axios from 'axios'
import HttpApi from './api'
import { Toast } from 'vant'

let instance = axios.create({
  // baseURL: '/newapi',
  timeout: 1000
})
// 包裹请求方法的容器
const Http = {}
for (let key in HttpApi) {
  let api = HttpApi[key]
  // async  作用：避免进入回调地狱
  Http[key] = async function (params, isFormData, config = {}) {
    let url = api.url
    let newParams = {}
    // content-type是否是form-data的判断
    if (params && isFormData) {
      newParams = new FormData()
      for (let i in params) {
        newParams.append(i, params[i])
      }
    } else {
      newParams = params
    }
    // 不同请求的判断
    // 请求的返回值
    let response = {}
    if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
      try {
        response = await instance[api.method](url, newParams, config)
      } catch (err) {
        response = err
      }
    } else if (api.method === 'delete' || api.method === 'get') {
      config.params = newParams
      try {
        response = await instance[api.method](api.url, config)
      } catch (err) {
        response = err
      }
    }
    return response
  }
}
// 请求拦截器
instance.interceptors.request.use((config) => {
// 发起请求前做些什么
  Toast.loading({
    mask: false,
    duration: 0,
    forbidClick: true, // 禁止点击
    message: '加载中...'
  })
  return config
}, _err => {
  Toast.clear()
  Toast('请求错误，稍后重试')
})
// 响应拦截器
instance.interceptors.response.use(res => {
  // 发起响应前做些什么
  Toast.clear()
  return res
}, _err => {
  Toast.clear()
  Toast('请求错误，稍后重试')
})

export default Http
