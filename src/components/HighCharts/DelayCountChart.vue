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
                    text: '월별 평균 운항 시간'
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
            const { data } = await getAvgAetMonth();

            console.log('data : {}', data);

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