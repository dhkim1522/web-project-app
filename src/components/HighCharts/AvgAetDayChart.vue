<template lang="">
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>
<script>
import { getAvgAetDay } from '@/api/axios'

export default {

    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: '일별 평균 운항 시간'
                },
                series: [{
                    data: [],
                    color: '#6fcd98'
                }],
                xAxis: {
                    categories: [],
                    // categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
                }
            }
        }
    },

    methods: {
        async loadAvgAetMonth() {
            const { data } = await getAvgAetDay();

            console.log('data : {}', data);

            // X축 데이터 바인딩
            this.chartOptions.xAxis.categories 
                        = data.map(obj => obj.day + '일');

            // Y축 데이터 바인딩
            this.chartOptions.series = {'data': data.map(obj => obj.actualElapsedTime)};
        },
    },

    created() {
        this.loadAvgAetMonth();
    },
}
</script>
<style lang="">
    
</style>