<template lang="">
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>
<script>
import { getCancelCode } from '@/api/axios'

export default {

    data() {
        return {
            chartOptions: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                title: {
                    text: '운항 취소 사유<br>분포',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 60,
                    style: {
                        fontWeight: 'bold'
                    }
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                    valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                        fontWeight: 'bold',
                        color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%'
                    }
                },
                series: [{
                    type: 'pie',
                    name: '분포율',
                    innerSize: '50%',
                    data: [
                    ['Chrome', 58.9],
                    ['Firefox', 13.29],
                    ['Internet Explorer', 13],
                    ['Edge', 3.78],
                    ['Safari', 3.42],
                    ]
                }],
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
                credits: {
                    enabled: false,
                },
            }
        }
    },

    methods: {
        async loadCancelCode() {
            const { data } = await getCancelCode();

            const dataArr = data.map(obj => {

                let newName;

                if(obj.cancelCode == 'A') {
                    newName = '수하물'    
                }
                if(obj.cancelCode == 'B') {
                    newName = '날씨'    
                }
                if(obj.cancelCode == 'C') {
                    newName = '관제'    
                }
                if(obj.cancelCode == 'D') {
                    newName = '보안'    
                }

                return [newName, obj.count];
            });

            this.chartOptions.series[0].data = dataArr;
        },
    },

    created() {
        this.loadCancelCode();
    },
}
</script>
<style lang="">
    
</style>