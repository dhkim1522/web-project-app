<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-badge text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">총 회원 수</p>
              <h4 class="card-title">{{ userCount }} 명</h4>
            </div>
            <!-- <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div> -->
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-app text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">총 데이터 수</p>
              <h4 class="card-title">{{ dataCount }} 건</h4>
            </div>
            <!-- <div slot="footer">
              <i class="fa fa-calendar-o"></i>Last day
            </div> -->
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-primary">
              <i class="nc-icon nc-sun-fog-29 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">현재 날짜</p>
              <h4 class="card-title">{{ nowDate }}</h4>
            </div>
            <!-- <div slot="footer">
              <i class="fa fa-clock-o"></i>Last day
            </div> -->
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-watch-time text-info"></i>
            </div>
            <div slot="content">
              <p class="card-category">현재 시간</p>
              <h4 class="card-title">{{ nowTime }}</h4>
            </div>
            <!-- <div slot="footer">
              <i class="fa fa-clock-o"></i>Last day
            </div> -->
          </stats-card>
        </div>
        
      </div>
      <div class="row">
        <div class="col-md-8">
          <card>
            <avg-aet-month-chart></avg-aet-month-chart>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <card>
            <avg-aet-day-chart></avg-aet-day-chart>
          </card>
        </div>
      </div>
      <!-- <div class="overflow-auto">
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
      </div>
      <div>
        <p class="mt-3" style="color:black">Current Page: {{ currentPage }}</p>
      </div> -->
    </div>
  </div>
</template>
<script>
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import AvgAetMonthChart from '../components/HighCharts/AvgAetMonthChart.vue'
  import AvgAetDayChart from '../components/HighCharts/AvgAetDayChart.vue'

  import { getUserCountAll, getDataCountAll } from '@/api/axios'

  export default {
    data() {
      return {
        userCount: 0,
        dataCount: 0,

        nowTime: "00:00:00",
        nowDate: "",

        currentPage: this.$store.state.currentPage
      }
    },

    components: {
      StatsCard,
      AvgAetMonthChart,
      AvgAetDayChart,
    },
    

    methods: {
        async loadUserCountAll() {
            const res = await getUserCountAll();
            this.userCount = res.data;
        },
        async loadDataCountAll() {
            const res = await getDataCountAll();
            this.dataCount = res.data;
        },

        getNowDate() {
            let date = new Date();

            // let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);

            let nowDate = month + '월 ' + day + '일';

            this.nowDate = nowDate;
        },

        getNowTime() {
            let date = new Date();

            this.nowTime = date.getHours() + ":" 
                       + date.getMinutes() + ":"
                       + date.getSeconds();
        },
    },

    created() {
      this.loadUserCountAll();
      this.loadDataCountAll();
      this.getNowDate();

      setInterval(() => {
        this.getNowTime();
      }, 1000);

    },
  }
</script>
<style>

</style>
