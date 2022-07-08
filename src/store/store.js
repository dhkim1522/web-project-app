import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie, getUserNicknameFromCookie } from '../utils/cookie';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userId: '',
        userNickname: getUserNicknameFromCookie() || '',
        userEmail: '',
        token: getAuthFromCookie() || ''
    },

    getters: {
        isLogin(state) {
            return state.token !== '';
        }
    },

    mutations: {
        setUserId(state, userId) {
            state.userId = userId;
        },
        clearUserId(state) {
            state.userId = '';
        },
        setUserNickname(state, userNickname) {
            state.userNickname = userNickname;
        },
        clearUserNickname(state) {
            state.userNickname = '';
        },
        setUserEmail(state, userEmail) {
            state.userEmail = userEmail;
        },
        clearUserEmail(state) {
            state.userEmail = '';
        },
        setToken(state, token) {
            state.token = token;
        },
        cleanToken(state){
            state.token = '';
        }
    },

    actions: {
        
    }
});