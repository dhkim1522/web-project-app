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
                    name: '분포율',
                    colorByPoint: true,
                    data: [],
                }],
                credits: {
                    enabled: false,
                },
            }
        }
    },

    methods: {
        async loadDelayRate() {
            const { data } = await getDelayRate();

            const dataArr = new Array;
            let i = 0;

            // 차트에 표시될 명칭으로 새로운 배열 생성
            for(let key in data[0]) {

                let newName;
                
                if(key == 'carrierDelayRate') {
                    newName = '수하물 지연율'
                }
                if(key == 'weatherDelayRate') {
                    newName = '날씨 지연율'
                }
                if(key == 'nasDelayRate') {
                    newName = '관제 지연율'
                }
                if(key == 'securityDelayRate') {
                    newName = '보안 지연율'
                }
                if(key == 'lateAircraftDelayRate') {
                    newName = '항공기 지연율'
                }

                dataArr[i] = {
                                name: newName,
                                y: data[0][key]
                              };
                i++;
            }

            // y축 수치값만 따로 모을 배열 생성
            const yArr = [];

            for(let i=0; i<dataArr.length; i++) {
                yArr[i] = dataArr[i].y;
            }

            // y축 수치값 중 가장 큰 값
            const maxY = Math.max(...yArr);

            // 가장 큰 수치를 가진 지표에 추가 할 옵션
            const addOptions = {sliced: true,
                                selected: true}

            // 배열 순회 후 가장 큰 수치 값을 가진 객체에
            // addOptions 객체 값 추가
            dataArr.map((obj, idx) => {
                if(dataArr[idx].y == maxY) {
                    Object.assign(dataArr[idx], addOptions);
                }
            });

            this.chartOptions.series[0].data = dataArr;
        },
    },

    created() {
        this.loadDelayRate();
    },
}
</script>
<style lang="">
    
</style>