<template>
  <div class="content">
    <div class="container-fluid">
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
  import AvgAetMonthChart from '../components/HighCharts/AvgAetMonthChart.vue'
  import AvgAetDayChart from '../components/HighCharts/AvgAetDayChart.vue'

  export default {
    data() {
      return {
        currentPage: this.$store.state.currentPage
      }
    },

    components: {
      AvgAetMonthChart,
      AvgAetDayChart,
    },

    created() {
      console.log('currentPage > ' + this.currentPage);
    },

    methods: {
    },
  }
</script>
<style>

</style>
