<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- <div class="col-md-8">
          <card>
            <avg-aet-month-chart></avg-aet-month-chart>
          </card>
        </div>
        <div class="col-md-12">
          <card>
            <avg-aet-day-chart></avg-aet-day-chart>
          </card>
        </div>
        <div class="col-md-12">
          <card>
            <avg-dep-delay-month-chart></avg-dep-delay-month-chart>
          </card>
        </div>
        <div class="col-md-12">
          <card>
            <avg-dep-delay-day-chart></avg-dep-delay-day-chart>
          </card>
        </div>
        <div class="col-md-10">
          <card>
            <delay-rate-chart></delay-rate-chart>
          </card>
        </div> -->
        <div class="col-md-10">
          <card>
            <delay-count-chart-vue></delay-count-chart-vue>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AvgAetMonthChart from '../components/HighCharts/AvgAetMonthChart.vue'
  import AvgAetDayChart from '../components/HighCharts/AvgAetDayChart.vue'
  import AvgDepDelayMonthChart from '../components/HighCharts/AvgDepDelayMonthChart.vue'
  import AvgDepDelayDayChart from '../components/HighCharts/AvgDepDelayDayChart.vue'
  import DelayCountChartVue from '../components/HighCharts/DelayCountChart.vue'
  import DelayRateChart from '../components/HighCharts/DelayRateChart.vue'

  export default {
    components: {
      AvgAetMonthChart,
      AvgAetDayChart,
      AvgDepDelayMonthChart,
      AvgDepDelayDayChart,
      DelayCountChartVue,
      DelayRateChart,
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
