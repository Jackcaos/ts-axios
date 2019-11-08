import { AxiosReqConfig } from "../reqType";
import { AxiosPromise, AxiosResConfig } from "../resType";
import axios from "../axios";

export interface Axios {
    interceptors: {
        request: AxiosInterceptorManager<AxiosReqConfig>
        response: AxiosInterceptorManager<AxiosResConfig>
    }

    request(config: AxiosReqConfig): AxiosPromise

    get(url:string, config?: AxiosReqConfig): AxiosPromise

    post(url:string, data?: any, config?: AxiosReqConfig): AxiosPromise

    put(url:string, data?: any, config?: AxiosReqConfig): AxiosPromise
}

export interface AxiosInstance extends Axios {
    (config: AxiosReqConfig): AxiosPromise
}

export interface AxiosInterceptorManager<T> {
    use(resolve:ResolveFn<T>,rejected?: RejectedFn): number

    eject(id: number): void
}

export interface ResolveFn<T=any> {
    (val:T): T| Promise<T>
}

export interface RejectedFn {
    (error: any): any
}