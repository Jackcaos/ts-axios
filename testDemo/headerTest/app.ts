import axios from '../../src/index'

axios({
    method: 'post',
    url: '/headerTest/post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    data: {
        a:'hello',
        b:'world'
    }
}).then((res)=>{
    console.log(res)
})
