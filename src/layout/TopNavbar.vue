<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Dashboard</a>
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
              <span class="userId">{{ $store.state.userNickname }} 님 환영합니다. </span>
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
import { deleteCookie } from '../utils/cookie';

  export default {
    data () {
      return {
        activeNotifications: false
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
      logout() {
        this.$store.commit('clearUserId')
        this.$store.commit('clearUserNickname')
        this.$store.commit('clearUserEmail')
        this.$store.commit('cleanToken')

        deleteCookie('auth_key');
        deleteCookie('user_nickname');

        this.$router.push('/login')
      }
    }
  }

</script>
<style scoped>
.userId {
  color: gray
}
</style>
