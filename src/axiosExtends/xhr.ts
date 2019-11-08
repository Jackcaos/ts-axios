import { AxiosReqConfig } from '../reqType'
import { parseHeaders } from '../handle/header'
import { AxiosPromise, AxiosResConfig } from '../resType'

function xhr(config: AxiosReqConfig): AxiosPromise{

    return new Promise((resolve,reject) => {
        const {data = null, url, method = 'get', responseType,timeout } = config

        const req = new XMLHttpRequest()
        
        if(responseType){
            req.responseType = responseType
        }

        req.open(method,url!,true)

        req.onreadystatechange = function requestState(){
            if(req.readyState !== 4){
                return
            }
            if(req.status === 0){
                return   
            }
            const resHeaders = parseHeaders(req.getAllResponseHeaders())
            const resData = req.response !== 'text' ? req.response : req.responseText
            const res: AxiosResConfig = {
                data: resData,
                status: req.status,
                headers: resHeaders,
                statusText: req.statusText,
                config:config,
            }
            handleRes(res)
        }

        req.onerror = function handleError() {
            reject(new Error('请求错误'))
        }

        req.ontimeout = function handleTimeOut(){
            reject(new Error('请求超时'))
        }
    
        req.send(data)

        function handleRes(response: AxiosResConfig):void {
            if(response.status! >= 200 && response.status! < 300){
                resolve(response)
            }else{
                reject(new Error("请求失败"))
            }
        }
    })
}

export default xhr