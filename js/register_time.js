
let register_time_option = {
    tooltip: {
        show:false,
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    title:{
        text: '报名时间分布',
        x: 'center',
        textStyle: {
            color: 'white',
            fontSize: '25'
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    xAxis: [
        {
            type: 'category',
            data: ['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: 'white',
                    width: 1
                }
            },
            axisLabel: {
                show: true,
                interval: 0,
                color: 'white',
                rotate: 45,
                fontSize: '15',
                fontWeight: 'bold'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            axisLine: {
                show: true,
                lineStyle: {
                    opacity: 0
                }
            },
            axisTick: true,
            min: 0,
            max: 2500,
            interval: 500,
            axisLabel: {
                show: true,
                formatter: '{value}',
                color: 'white',
                fontSize: '15',
                fontWeight: 'bold'
            },
            splitLine: {
                // show: false,
                lineStyle: {
                    color: 'white',
                    width: 1
                }
            }
        }
    ],
    series: [
        {
            name:'当前报名人数柱状图',
            type:'bar',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255,192,0,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(255,192,0,0)'
                    }]),
                borderWidth: 1,
                borderColor: '#fff'
            },
            data:[50, 100, 390, 430, 460, 600, 900, 1100, 1600, 2000]
        },
        {
            name:'当前报名人数折线图',
            type:'line',
            itemStyle: {
                color: '#fff'
            },
            lineStyle:{
                color: 'white',
                width: 1
            },
            data:[50, 100, 390, 430, 460, 600, 900, 1100, 1600, 2000]
        }
    ]
};


var register_time_charts = echarts.init(document.getElementById('register_time_chart'));
register_time_charts.setOption(register_time_option)

