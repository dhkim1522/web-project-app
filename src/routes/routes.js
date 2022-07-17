import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/store'
import DashboardLayout from '@/layout/DashboardLayout.vue';

Vue.use(VueRouter)

// routes 내용 정의
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      // meta auth는 인증이 필요한 route 페이지를 명시
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/pages/Dashboard.vue'),
        meta: { auth: true }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/pages/UserProfile.vue'),
        meta: { auth: true }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/pages/LoginPage.vue')
      },
      {
        path: 'signup',
        name: 'Signup',
        component: () => import('@/pages/SignupPage.vue')
      }
    ]
  },
  // 정의되지 않은 페이지 접근 시 보여줄 페이지
  { path: '*', component: () => import('@/pages/NotFoundPage.vue') }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

// VueRouter 객체 생성
const router = new VueRouter({
  mode: 'history', // URL '#' 제거
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.meta.auth && !store.getters.isLogin) { 
    alert('로그인이 필요한 페이지 입니다.');
    next('/login');
    return;
  }
  next();
})

export default router
