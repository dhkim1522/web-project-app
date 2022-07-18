<template lang="">
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>
<script>
import { getDelayRate } from '@/api/axios'

export default {

    data() {
        return {
            chartOptions: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: '운항 지연 사유 별 분포',
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
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                    }
                },
                series: [{
                    name: '지연율',
                    data: [],
                }],
            }
        }
    },

    methods: {
        async loadDelayRate() {
            const { data } = await getDelayRate();

            console.log('data1 : {}', data);

            console.log('PieChart example Arr {}', this.chartOptions.series[0].data)

            //data.map(obj => obj.month + '월')

            const dataArr = new Array;
            let i = 0;

            for(let key in data[0]) {

                let newName;
                
                if(key == 'carrierDelayRate') {
                    newName = '수하물'
                }
                if(key == 'weatherDelayRate') {
                    newName = '날씨'
                }
                if(key == 'nasDelayRate') {
                    newName = '관제'
                }
                if(key == 'securityDelayRate') {
                    newName = '보안'
                }
                if(key == 'lateAircraftDelayRate') {
                    newName = '항공기'
                }

                dataArr[i] = {
                                name: newName,
                                y: data[0][key]
                              };
                i++;
            }

            console.log('data map > ' + dataArr.map(obj => obj.name));

            this.chartOptions.series[0].data = dataArr;

            console.log('dataArr {}', dataArr);
        },
    },

    created() {
        this.loadDelayRate();
    },
}
</script>
<style lang="">
    
</style>