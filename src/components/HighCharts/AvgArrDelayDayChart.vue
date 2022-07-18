<template lang="">
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>
<script>
import { getAvgArrDelayDay } from '@/api/axios'

export default {

    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: '일별 평균 항공 지연 시간'
                },
                series: [{
                    data: [],
                    color: '#6fcd98'
                }],
                xAxis: {
                    categories: [],
                }
            }
        }
    },

    methods: {
        async loadAvgArrDelayDay() {
            const { data } = await getAvgArrDelayDay();

            console.log('data : {}', data);

            // X축 데이터 바인딩
            this.chartOptions.xAxis.categories 
                        = data.map(obj => obj.day + '일');

            // Y축 데이터 바인딩
            this.chartOptions.series = {'data': data.map(obj => obj.avgArrDelay)};
        },
    },

    created() {
        this.loadAvgArrDelayDay();
    },
}
</script>
<style lang="">
    
</style>