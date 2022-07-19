import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie,
         getUserNicknameFromCookie,
         saveAuthToCookie,
         saveUserNicknameToCookie } from '../utils/cookie';
import { login } from '@/api/axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userId: '',
        userNickname: getUserNicknameFromCookie() || '',
        userEmail: '',
        token: getAuthFromCookie() || '',

        currentPage: 1,
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
        async LOGIN({ commit }, userData) {
            const res = await login(userData);

                // vuex store 등록
                commit('setUserId', res.data.userId);
                commit('setUserNickname', res.data.userNickname);
                commit('setUserEmail', res.data.userEmail);
                commit('setToken', res.data.token);

                // cookie에 user 정보와 jwt 인증 키를 저장
                saveAuthToCookie(res.data.token);
                saveUserNicknameToCookie(res.data.userNickname); 

                alert('로그인 완료');

                return res.data;
        }
    }
});