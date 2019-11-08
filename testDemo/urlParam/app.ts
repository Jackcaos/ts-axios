import axios from '../../src/index'

axios({
    method: 'get',
    responseType: 'json',
    url: '/urlParams/get',
    params: {
        foo:1
    }
}).then((res)=>{
    console.log(res)
})

// axios({
//     method: 'get',
//     url: '/urlParams/get',
//     headers: {
//         'content-Type':'text/plain'
//     },
//     params: {
//        a:1,
//        b:2,
//        c:1
//     }
// })

// axios({
//     method: 'get',
//     url: '/urlParams/get',
//     params:{
//         foo: undefined,
//         bar: null
//     }
// })