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


///////// USER ///////////

// 회원가입 API
function signup(userData) {
    return instance.post('/user', userData);
}
 
// 로그인 API
function login(userData) {
    return instance.post('/login', userData);
}

// 회원 조회 API
function getUser(userSeqId) {
    return instance.get('/user/' + userSeqId);
}

// 회원 수정 API
function updateUser(userSeqId, userData) {
    return instance.patch('/user', userSeqId, userData);
}

// 회원 ID 중복 검사 API
function duplicationUserCheck(userId) {
    return instance.get('/user/duplication/' + userId);
}

// 전체 데이터 개수 조회 API
function getUserCountAll() {
    return instance.get('/user/count');
}


///////// DATA ///////////

// 월별 평균 항공 운항 시간 조회 API
function getAvgAetMonth() {
    return instance.get('/data/month/avgaet');
}

// 일별 평균 항공 운항 시간 조회 API
function getAvgAetDay(month) {
    return instance.get('/data/day/avgaet/' + month);
}

// 월별 평균 항공 지연 시간 조회 API
function getAvgDepDelayMonth() {
    return instance.get('/data/month/avg-dep-delay');
}

// 일별 평균 항공 지연 시간 조회 API
function getAvgDepDelayDay(month) {
    return instance.get('/data/day/avg-dep-delay/' + month);
}

// 전체 지연 사유 별 개수 조회 API
function getDelayCount() {
    return instance.get('/data/delay-count');
}

// 전체 지연 사유 별 분포량 조회 API
function getDelayRate() {
    return instance.get('/data/delay-rate');
}

// 전체 운항 취소 및 우회 건 수 조회 API
function getCancelDivert() {
    return instance.get('/data/cancel-divert');
}

// 전체 운항 취소 사유 조회 API
function getCancelCode() {
    return instance.get('/data/cancel-code');
}

// 전체 데이터 개수 조회 API
function getDataCountAll() {
    return instance.get('/data/count');
}

export {
     signup,
     login,
     getUser,
     updateUser,
     duplicationUserCheck,
     getUserCountAll,
     getAvgAetMonth,
     getAvgAetDay,
     getAvgDepDelayMonth,
     getAvgDepDelayDay,
     getDelayCount,
     getDelayRate,
     getCancelDivert,
     getCancelCode,
     getDataCountAll,
     };