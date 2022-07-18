<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card>
            <avg-aet-month-chart></avg-aet-month-chart>
          </card>
        </div>
        <div class="col-md-12">
          <card>
            <avg-aet-day-chart></avg-aet-day-chart>
          </card>
        </div>
        <!-- <div class="col-md-12">
          <card>
            <avg-arr-delay-month-chart></avg-arr-delay-month-chart>
          </card>
        </div>
        <div class="col-md-12">
          <card>
            <avg-arr-delay-day-chart></avg-arr-delay-day-chart>
          </card>
        </div> -->
        <div class="col-md-12">
          <card>
            <delay-rate-chart></delay-rate-chart>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AvgAetMonthChart from '../components/HighCharts/AvgAetMonthChart.vue'
  import AvgAetDayChart from '../components/HighCharts/AvgAetDayChart.vue'
  import AvgArrDelayMonthChart from '../components/HighCharts/AvgArrDelayMonthChart.vue'
  import AvgArrDelayDayChart from '../components/HighCharts/AvgArrDelayDayChart.vue'
  import DelayRateChart from '../components/HighCharts/DelayRateChart.vue'

  export default {
    components: {
      AvgAetMonthChart,
      AvgAetDayChart,
      AvgArrDelayMonthChart,
      AvgArrDelayDayChart,
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
