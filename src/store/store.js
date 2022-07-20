import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie,
         getUserSeqIdFromCookie,
        //  getUserIdFromCookie,
         getUserNicknameFromCookie,
         saveUserSeqIdToCookie,
        //  saveUserIdToCookie,
         saveAuthToCookie,
         saveUserNicknameToCookie 
        } from '../utils/cookie';
import { login } from '@/api/axios';

Vue.use(Vuex);

// 컴포넌트 전역에서 사용 가능한 상태 관리 라이브러리
export default new Vuex.Store({

    state: {
        userSeqId: getUserSeqIdFromCookie() || '',
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
        setUserSeqId(state, userSeqId) {
            state.userSeqId = userSeqId;
        },
        clearUserSeqId(state) {
            state.userSeqId = '';
        },
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

                // Vuex store 회원 정보 등록
                commit('setUserSeqId', res.data.userSeqId);
                commit('setUserId', res.data.userId);
                commit('setUserNickname', res.data.userNickname);
                commit('setUserEmail', res.data.userEmail);
                commit('setToken', res.data.token);

                // Cookie에 회원 정보와 JWT Token 저장
                saveAuthToCookie(res.data.token);
                saveUserSeqIdToCookie(res.data.userSeqId);
                // saveUserIdToCookie(res.data.userId);
                saveUserNicknameToCookie(res.data.userNickname);

                alert('로그인 완료');

                return res.data;
        }
    }
});