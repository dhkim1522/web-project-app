<template lang="">
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>
<script>
import { getDelayCount } from '@/api/axios'

export default {

    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'column'
                },
                title: {
                    text: '전체 지연 사유 별 건 수',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                xAxis: {
                    categories: [' '],
                    crosshair: false
                },
                yAxis: {
                    // min: 0,
                    // max: 500,
                    title: {
                    text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: []
            }
        }
    },
    methods: {
        async loadDelayCount() {
            const { data } = await getDelayCount();

            const dataArr = new Array;
            let i = 0;

            for(let key in data[0]) {

                let newName;
                
                if(key == 'carrierDelayCount') {
                    newName = '수하물 지연'
                }
                if(key == 'weatherDelayCount') {
                    newName = '날씨 지연'
                }
                if(key == 'nasDelayCount') {
                    newName = '관제 지연'
                }
                if(key == 'securityDelayCount') {
                    newName = '보안 지연'
                }
                if(key == 'lateAircraftDelayCount') {
                    newName = '항공기 지연'
                }

                dataArr[i] = {  name: newName,
                                    data: []  };

                dataArr[i].data[0] = data[0][key];

                i++;
            }

            console.log('dataArr {}', dataArr);

            this.chartOptions.series = dataArr

        },
    },

    created() {
        this.loadDelayCount();
    },
}
</script>
<style lang="">
    
</style>