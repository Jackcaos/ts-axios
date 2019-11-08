import { isDate, isPlainObject } from './util'

function encode(val: string): string {
    return encodeURIComponent(val)
           .replace(/%40/ig,'@')
           .replace(/%3A/ig,':')
           .replace(/%24/ig,'$')
           .replace(/%2C/ig,',')
}

export function buildUrl(url: string, params?: any): string{
    if(!params) {
        return url
    }

    const urlParams: string[] = []

    Object.keys(params).forEach((key) => {
        const val = params[key]

        if(val === null|| val ===undefined){
            return;
        }
        let values = []
        if(Array.isArray(val)){
            values = val;
            key += '[]'
        } else{
            values = [val]
        }

        values.forEach((val) => {
            if(isDate(val)){
                val = val.toISOString()
            }else if(isPlainObject(val)){
                val = JSON.stringify(val)
            }
            urlParams.push(`${encode(key)}=${encode(val)}`)
        })
    })
    let serializeParams = urlParams.join('&') // 序列化字符串

    if(serializeParams){
        url += (url.indexOf('?') === -1 ? '?':'&') + serializeParams
    }

    return url
}