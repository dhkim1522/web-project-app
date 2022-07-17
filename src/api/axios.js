import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기화 함수
function initInstance() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_API_URL
    });
    return setInterceptors(instance);
}
const instance = initInstance();

// 회원가입 API
function signup(userData) {
    return instance.post('/user', userData);
}
 
// 로그인 API
function login(userData) {
    return instance.post('/login', userData);
}

function getAvgAetMonth() {
    return instance.get('/data/month/avgaet');
}

function getAvgAetDay() {
    return instance.get('/data/day/avgaet');
}



export {
     signup,
     login,
     getAvgAetMonth,
     getAvgAetDay
     };