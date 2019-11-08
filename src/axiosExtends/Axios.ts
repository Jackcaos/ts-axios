import axiosRequest from './axiosRequest'
import { AxiosReqConfig } from '../reqType';
import { AxiosPromise, AxiosResConfig } from '../resType';
import InterceptorManager from './interceptor';
import { ResolveFn, RejectedFn } from '../axiosType';

interface Interceptors {
    request: InterceptorManager<AxiosReqConfig>
    response: InterceptorManager<AxiosResConfig>
}

interface InterceptorPromise<T> {
    resolved: ResolveFn<T> | ((config: AxiosReqConfig)=> AxiosPromise)
    rejected?: RejectedFn
}

export default class Axios {
    public interceptors: Interceptors

    constructor(){
        this.interceptors = {
            request: new InterceptorManager<AxiosReqConfig>(),
            response: new InterceptorManager<AxiosResConfig>()
        }
    }

    request(config?: any): AxiosPromise {
        const InterceptorRes: InterceptorPromise<any>[] =  [{
            resolved: axiosRequest,
            rejected: undefined
        }]
        
        this.interceptors.request.each(interceptor => {
            InterceptorRes.unshift(interceptor)
        })
        
        this.interceptors.response.each(interceptor => {
            InterceptorRes.push(interceptor)
        })
    
        let promise = Promise.resolve(config)
        
        while(InterceptorRes.length !== 0){
            const { resolved, rejected } = InterceptorRes.shift()!
            promise = promise.then(resolved, rejected)
        }
        
        return promise
        // return axiosRequest(config)
    }

    get(url: string, config?: AxiosReqConfig): AxiosPromise {
        let obj = Object.assign(config,{ method: 'get', url})
        return this.request(obj)
    }

    post(url: string, data?: any, config?:AxiosReqConfig ): AxiosPromise {
        let obj = Object.assign(config,{ method: 'post', url, data})
        return this.request(obj)
    }

    put(url: string, data?: any, config?: AxiosReqConfig): AxiosPromise {
        let obj = Object.assign(config,{ method: 'put', url, data})
        return this.request(obj)
    }
}