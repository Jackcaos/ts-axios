import axios from '../../src/index'

axios({
    method: 'get',
    url: '/easy/get',
    params: {
        jd:1
    }
})