<template lang="">
    <div>
        <div>
            <b-form-select @change="loadAvgDepDelayDay(selectedMonth)" v-model="selectedMonth" :options="this.selectMonthArr"
             size="sm" style="width: 20%" class="m-1"></b-form-select>
        </div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>
<script>
import { getAvgDepDelayDay } from '@/api/axios'

export default {

    data() {
        return {
            // Select Box
            selectedMonth: 1,

            // HighChart
            chartOptions: {
                chart: {
                    type: 'area'
                },
                title: {
                    text: '일별 평균 출발 지연 시간',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                series: [{
                    name: '평균 평균 항공 출발 지연 시간',
                    color: '#FFC5D0',
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
                plotOptions: {
                    area: {
                    marker: {
                        // enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                        hover: {
                            enabled: true
                        }
                        }
                    }
                    }
                },
                credits: {
                    enabled: false,
                },
            }
        }
    },

     methods: {
        async loadAvgDepDelayDay(selectedMonth) {

            const { data } = await getAvgDepDelayDay(selectedMonth);

            // X축 데이터 바인딩
            this.chartOptions.xAxis.categories 
                        = data.map(obj => obj.day + '일');

            // Y축 데이터 바인딩
            this.chartOptions.series = {'data': data.map(obj => obj.avgDepDelay)};
        },
    },

    computed: {
        selectMonthArr() {
            const monthArr = [];

            for(let i=1; i<13; i++) {
                monthArr[i] = {
                                value: i,
                                text: i + '월'
                              };
            }

            return monthArr;
        }
    },

    created() {
        this.loadAvgDepDelayDay(this.selectedMonth);
    },
}
</script>
<style lang="">
    
</style>