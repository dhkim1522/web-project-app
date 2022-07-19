<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card>
            <avg-dep-delay-month-chart></avg-dep-delay-month-chart>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <card>
            <avg-dep-delay-day-chart></avg-dep-delay-day-chart>
          </card>
        </div>
      </div>
      <!-- <div class="overflow-auto">
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
      </div> -->
    </div>
  </div>
</template>
<script>
  import AvgDepDelayMonthChart from '../components/HighCharts/AvgDepDelayMonthChart.vue'
  import AvgDepDelayDayChart from '../components/HighCharts/AvgDepDelayDayChart.vue'

  export default {
    components: {
      AvgDepDelayMonthChart,
      AvgDepDelayDayChart,
    },

    created() {
    },

    methods: {
    },

    data() {
        return {
        }
    },
  }
</script>
<style>

</style>
