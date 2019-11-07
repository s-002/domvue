import axios from 'axios'

//注册
export let register=params=>{
    return axios.post('/api/user/register',params);
}
//登录
export let login=params=>{
    return axios.post('/api/user/login',params);
}