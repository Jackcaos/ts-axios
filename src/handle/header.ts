import { isPlainObject } from './util'

function setHeaderKey(headers:any, name: string): void{
    if(!headers){
        return
    }
    Object.keys(headers).forEach((key) => {
        if(key.toLowerCase() === name.toLowerCase()){
            headers[name] = headers[key]
            delete headers[key]
        }
    })
}

export function setHeader(headers: any, data: any):any {
    setHeaderKey(headers,'Content-Type')

    if(isPlainObject(data)) {
        if(headers && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=utf-8'
        }
    }

    return headers
}

// 将header从字符串转换为一个对象
export function parseHeaders(headers: string): any {
    let objHeader = Object.create(null)
    if(!headers) {
        return objHeader
    }

    headers.split('\r\n').forEach((line)=> {
        let [key, val] = line.split(' ')
        key = key.trim().toLowerCase()
        if(!key){
            return
        }
        if(!val){
            return
        }
        objHeader[key] = val
    })

    return objHeader
}
