import axios from '../../src/axios'
  
  axios.interceptors.response.use(res => {
    res.data += '1'
    return res
  })
  let interceptor = axios.interceptors.response.use(res => {
    res.data += '2'
    return res
  })
  axios.interceptors.response.use(res => {
    res.data += '3'
    return res
  })
  
  axios.interceptors.response.eject(interceptor)
  
  axios({
    url: '/interceptor/get',
    method: 'get',
  }).then((res) => {
    console.log(res)
  })
  