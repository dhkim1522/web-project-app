<template lang="">
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>
<script>
import { getAvgAetMonth } from '@/api/axios'

export default {

    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: '월별 평균 운항 시간',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                series: [{
                    name: '평균 운항 시간',
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
                        format: '{value}(h)'
                    }
                },
                credits: {
                    enabled: false,
                },
            }
        }
    },

    methods: {
        async loadAvgAetMonth() {
            const { data } = await getAvgAetMonth();

            // X축 데이터 바인딩
            this.chartOptions.xAxis.categories 
                        = data.map(obj => obj.month + '월');

            // Y축 데이터 바인딩
            this.chartOptions.series = {'data': data.map(obj => obj.avgAet)};
        },
    },

    created() {
        this.loadAvgAetMonth();
    },
}
</script>
<style lang="">
    
</style>