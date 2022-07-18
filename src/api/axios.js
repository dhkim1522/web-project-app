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

// 월별 평균 항공 운항 시간 조회 API
function getAvgAetMonth() {
    return instance.get('/data/month/avgaet');
}

// 일별 평균 항공 운항 시간 조회 API
function getAvgAetDay() {
    return instance.get('/data/day/avgaet');
}

// 월별 평균 항공 지연 시간 조회 API
function getAvgArrDelayMonth() {
    return instance.get('/data/month/avg-arr-delay');
}

// 일별 평균 항공 지연 시간 조회 API
function getAvgArrDelayDay() {
    return instance.get('/data/day/avg-arr-delay');
}

// 전체 지연 사유 별 개수 조회 API
function getDelayCount() {
    return instance.get('/data/delay-count');
}

// 전체 지연 사유 별 분포량 조회 API
function getDelayRate() {
    return instance.get('/data/delay-rate');
}


export {
     signup,
     login,
     getAvgAetMonth,
     getAvgAetDay,
     getAvgArrDelayMonth,
     getAvgArrDelayDay,
     getDelayCount,
     getDelayRate
     };