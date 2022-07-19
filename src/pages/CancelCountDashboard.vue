<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9">
          <card>
            <cancel-divert-chart></cancel-divert-chart>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <card>
            <cancel-code-chart></cancel-code-chart>
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
  import CancelDivertChart from '../components/HighCharts/CancelDivertChart.vue'
  import CancelCodeChart from '../components/HighCharts/CancelCodeChart.vue'

  export default {
    components: {
      CancelDivertChart,
      CancelCodeChart,
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
