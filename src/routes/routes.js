import DashboardLayout from '../layout/DashboardLayout.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/LoginPage.vue'),
    redirect: '/login'
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/pages/Dashboard.vue')
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/pages/UserProfile.vue')
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

export default routes
