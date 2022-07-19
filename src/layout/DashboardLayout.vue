<template>
  <div class="wrapper">

    <!-- 사이드 바 메뉴 탭 -->
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard" isSubMenu>
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
    </side-bar>


    <div class="main-panel">
      <!-- TopNavBar.vue -->
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">
      </dashboard-content>

      <!-- ContentFooter.vue -->
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {

        alert("toggleSidebar")

        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
