import axios from "axios";

const apiURL = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

function signup(userData) {
    // const url = 'http://localhost:3000/api/user';
    // axios.post(url, userData);
    return apiURL.post('/user', userData);
}
 
function login(userData) {
    // const url = 'http://localhost:3000/api/user';
    // axios.post(url, userData);
    return apiURL.post('/login', userData);
}

export { signup, login };