<template>

  <!-- main menu tab -->
  <component :is="tag"
             @click.native="hideSidebar"
             v-bind="$attrs"
             tag="li">
    <a class="nav-link" v-bind="$attrs">
      <slot>
        <i v-if="link.icon" :class="link.icon"></i>
        <p>{{link.name}}</p>
      </slot>
    </a>

    <!-- sub menu tab -->
    <div class="container" v-show="isSubMenu">
      <div class="mx-3 auto">
        <ul class="nav" style="list-style: none; margin-top: 10px;">
          <li class="nav-item mx-4">
            <router-link to="/dashboard">
              <p>- 평균 운항 시간</p>
            </router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link to="/dep-delay-dashboard">
              <p>- 출발 지연 시간</p>
            </router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link to="/delay-rate-dashboard">
              <p>- 지연 사유 분포</p>
            </router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link to="/cancel-countdashboard">
              <p>- 운항 취소 건수</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- sub menu tab end -->

  </component>
  <!-- main menu tab end -->
</template>
<script>
  export default {

    data() {
      return {
      }
    },

    inheritAttrs: false,
    inject: {
      autoClose: {
        default: true
      }
    },
    props: {
      link: {
        type: [String, Object],
        default: () => {
          return {
            name: '',
            path: '',
            icon: ''
          }
        }
      },
      tag: {
        type: String,
        default: 'router-link'
      },
      isSubMenu: {
        type: Boolean,
        default: false,
      }
    },

    methods: {
      hideSidebar () {
        if (this.autoClose && this.$sidebar && this.$sidebar.showSidebar === true) {
          this.$sidebar.displaySidebar(false)
        }
      },
    },
  }
</script>
<style>
  p {
    color:aliceblue;
  }

  p:hover {
    font-weight: bold;
  }
</style>
