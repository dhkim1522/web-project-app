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
      </div>
    </div>
  </div>
</template>
<script>
  import AvgAetMonthChart from '../components/HighCharts/AvgAetMonthChart.vue'
  import AvgAetDayChart from '../components/HighCharts/AvgAetDayChart.vue'

  export default {
    components: {
      AvgAetMonthChart,
      AvgAetDayChart,
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
