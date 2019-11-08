export function isDate(val:any): val is Date{
    return Object.prototype.toString.call(val) === '[Object Date]'
}

export function isPlainObject(val: any): val is Object{
    return Object.prototype.toString.call(val) === '[Object Object]'
}

export function extend<T, U>(to: T, from: U): T & U{
    for(let key in from) {
        (to as T & U)[key] = from[key] as any
    }
    return to as T & U
}