import { message } from "antd"
import axios from "axios"

const service = axios.create({
  // baseURL: '',
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  // <T>(response:AxiosResponse<IResponse<T>, any>):Promise<AxiosResponse<IResponse<T>, any>>=> {
  // <T>(response:AxiosResponse<IResponse<T>, any>):Promise<IResponse<T>>=> {
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      message.error(res.message)
      return Promise.reject(new Error(res.message) as any)
    } else {
      return Promise.resolve(res)
    }
  },
  (error) => {
    message.error(error.message)
    return Promise.reject(error)
  },
)

export default service
