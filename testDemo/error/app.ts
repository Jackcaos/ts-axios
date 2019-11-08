import axios from '../../src/index'

axios({
    method: 'get',
    url: '/error/get',
    timeout: 2000,
}).then((res)=>{
    console.log(res)
}).catch((e)=>{
    console.log(e)
})