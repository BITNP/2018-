var this_barWidth = 30;

var school_option = {
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
        text: '书院报到情况',
        x: 'center',
        textStyle: {
            color: 'white',
            fontSize: '25'
        }
    },
    toolbox: {
        show: false,
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
            data: ["xx书院","xx书院","xx书院","xx书院","xx书院",
                "xx书院","xx书院","xx书院","xx书院"],
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
            max: 800,
            interval: 100,
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
            stack: 'aa',
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
            data:[108,405,107,496,223,118,144,512,168]
        },
        {
            name:'当前报状图',
            type:'bar',
            stack: 'aa',
            itemStyle: {
                color: '#ccc',
                borderWidth: 1,
                borderColor: '#fff'
            },
            data:[202,122,367,116,553,358,506,284,435]
        }
    ]
};

var school_charts = echarts.init(document.getElementById('school_chart'));
school_charts.setOption(school_option)