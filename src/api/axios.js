import axios from 'axios';
import store from '../store/store';
import { setInterceptors } from './common/interceptors';

function initInstance() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers: {
            Authorization: store.state.token
        },
    });
    return setInterceptors(instance);
}

const instance = initInstance();

function signup(userData) {
    return instance.post('/user', userData);
}
 
function login(userData) {
    return instance.post('/login', userData);
}

export { signup, login };