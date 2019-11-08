

export type Methods = 'get'|'post'|'delete'|'head'|'patch'|'put'

export interface AxiosReqConfig {
    url: string
    method?: string
    data?: any         // post,put传递的参数一般放在request body里面
    params?: any        // 一般为get请求的参数,通常放在url上
    headers?: any
    timeout?: number
    responseType?: XMLHttpRequestResponseType
}