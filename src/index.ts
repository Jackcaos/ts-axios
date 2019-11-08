import { AxiosReqConfig } from './reqType'
import { AxiosPromise } from './resType'
import { buildUrl } from './handle/url'
import { transformRequest } from './handle/data'
import { setHeader } from './handle/header'
import xhr from './xhr'

function axios(config:AxiosReqConfig): AxiosPromise{
    // 处理URL,请求参数
    processConfig(config)
    // 形成一个链式调用的方法
    return xhr(config)

}

function processConfig(config: AxiosReqConfig): void {
    config.url = transformURL(config)
    config.data = transformReqData(config)
    config.headers = transformHeader(config)
}

function transformURL(config: AxiosReqConfig): string {
    const { url, params } = config
    return buildUrl(url, params)
}

function transformReqData(config: AxiosReqConfig): any {
    return transformRequest(config.data)
}

function transformHeader(config: AxiosReqConfig): any {
    const { headers = {}, data } = config
    return setHeader(headers, data)
}

export default axios