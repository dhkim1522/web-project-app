<template lang="">
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>
<script>
import { getCancelDivert } from '@/api/axios'

export default {

    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: '운항 취소 및 우회 운항 건 수',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                xAxis: {
                    categories: [' '],
                },
                yAxis: {
                    // min: 0,
                    // max: 500,
                    title: {
                    text: ''
                    },
                    labels: {
                        format: '{value}건'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:f}건</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    },
                },
                series: [],
                credits: {
                    enabled: false,
                },
            }
        }
    },
    methods: {
        async loadCancelDivert() {
            const { data } = await getCancelDivert();

            const dataArr = new Array;
            let i = 0;

            for(let key in data[0]) {

                let newName;
                
                if(key == 'cancelCount') {
                    newName = '운항 취소'
                }
                if(key == 'divertCount') {
                    newName = '우회 운항'
                }

                dataArr[i] = {  name: newName,
                                data: [],      };

                dataArr[i].data[0] = data[0][key];

                i++;
            }

            // 각 bar 색상 지정
            const barColor1 = {color: "#FF848F"};
            const barColor2 = {color: "#5F9EA0"};

            Object.assign(dataArr[0], barColor1);
            Object.assign(dataArr[1], barColor2);

            this.chartOptions.series = dataArr
        },
    },

    created() {
        this.loadCancelDivert();
    },
}
</script>
<style lang="">
    
</style>