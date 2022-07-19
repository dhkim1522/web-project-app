<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card>
            <delay-rate-chart></delay-rate-chart>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10">
          <card>
            <delay-count-chart></delay-count-chart>
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
  import DelayCountChart from '../components/HighCharts/DelayCountChart.vue'
  import DelayRateChart from '../components/HighCharts/DelayRateChart.vue'

  export default {
    components: {
      DelayCountChart,
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
