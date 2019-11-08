import { AxiosInstance } from './axiosType'
import Axios from './axiosExtends/Axios'
import { extend } from './handle/util'

function createInstance(): AxiosInstance {
    const context = new Axios()
    const instance = Axios.prototype.request.bind(context)

    extend(instance, context)

    return instance as AxiosInstance
}

const axios = createInstance()

export default axios