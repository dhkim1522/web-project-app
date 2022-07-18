<template lang="">
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>
<script>
import { getAvgDepDelayMonth } from '@/api/axios'

export default {

    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: '월별 평균 출발 지연 시간(분)',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                series: [{
                    name: '평균 출발 지연 시간(분)',
                    color: '#6fcd98',
                    data: [],
                }],
                xAxis: {
                    categories: [],
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    labels: {
                        format: '{value}(m)'
                    }
                },
                credits: {
                    enabled: false,
                },
            }
        }
    },

    methods: {
        async loadAvgDepDelayMonth() {
            const { data } = await getAvgDepDelayMonth();

            // X축 데이터 바인딩
            this.chartOptions.xAxis.categories 
                        = data.map(obj => obj.month + '월');

            // Y축 데이터 바인딩
            this.chartOptions.series = {'data': data.map(obj => obj.avgDepDelay)};
        },
    },

    created() {
        this.loadAvgDepDelayMonth();
    },
}
</script>
<style lang="">
    
</style>