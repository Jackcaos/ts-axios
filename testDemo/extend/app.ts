import axios from '../../src/axios'

// axios({
//     url: '/extend/get',
//     method: 'get',
//     params:{
//         a:2
//     }
// })

axios.request({
    url: '/extend/post',
    method: 'post',
    data: {
        msg: 'hello'
    }
}).then((res)=>{
    console.log(res)
})

axios.post('/extend/get', {msg:'hello'})
