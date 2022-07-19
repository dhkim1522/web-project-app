<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/dashboard">Dashboard</a>
      <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <!-- 1 -->
            <template v-if="isLogin">
              <span class="userNickname">{{ this.$store.state.userNickname }} 님 환영합니다. </span>
              <a href="javascript:;" @click="logout">로그아웃</a>
            </template>
            <!-- 2 -->
            <template v-else>
              <router-link to="/login" class="nav-link">
                로그인
              </router-link>
              <router-link to="/signup" class="nav-link">
                회원가입
              </router-link>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { getUser } from '@/api/axios'
import { deleteCookie } from '../utils/cookie';

  export default {
    data () {
      return {
        activeNotifications: false,

        userSeqId: this.$store.state.userSeqId,
        userNickname: '',
      }
    },
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      },
      isLogin() {
        return this.$store.getters.isLogin
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      },

      // 회원 조회
      async loadUser() {

        const userSeqId = this.userSeqId;

        const res = await getUser(userSeqId);

        this.userNickname = res.data.userNickname;
      },

      // 로그아웃
      logout() {
        // Vuex Store 상태 값 지우기
        this.$store.commit('clearUserSeqId')
        this.$store.commit('clearUserId')
        this.$store.commit('clearUserNickname')
        this.$store.commit('clearUserEmail')
        this.$store.commit('cleanToken')

        // Browser Cookie에 저장된 값 지우기
        deleteCookie('auth_key');
        deleteCookie('user_seq_id');
        deleteCookie('user_id');
        deleteCookie('user_nickname');

        alert('로그아웃 되었습니다.');

        // 로그인 페이지로 이동
        this.$router.push('/login');
      }
    },

    created() {
      this.loadUser();
    }
  }

</script>
<style scoped>
.userNickname {
  color: gray
}
</style>
