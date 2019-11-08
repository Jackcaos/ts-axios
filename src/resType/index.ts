import { AxiosReqConfig } from '../reqType/index'

export interface AxiosResConfig {
    data?: any
    status?: number
    statusText?: string
    headers?: any
    config?: AxiosReqConfig
}

export interface AxiosPromise extends Promise<AxiosResConfig> {

}