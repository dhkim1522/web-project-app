<template lang="">
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>
<script>
import { getAvgArrDelayMonth } from '@/api/axios'

export default {

    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: '월별 평균 항공 지연 시간'
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
        async loadAvgArrDelayMonth() {
            const { data } = await getAvgArrDelayMonth();

            console.log('data : {}', data);

            // X축 데이터 바인딩
            this.chartOptions.xAxis.categories 
                        = data.map(obj => obj.month + '월');

            // Y축 데이터 바인딩
            this.chartOptions.series = {'data': data.map(obj => obj.avgArrDelay)};
        },
    },

    created() {
        this.loadAvgArrDelayMonth();
    },
}
</script>
<style lang="">
    
</style>