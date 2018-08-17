var this_barWidth = 30;

var school_option = {
    title:{
        text:'各学（书）院报名情况',
        x: 'center',
        textStyle: {
            color: 'white'
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['已报到男生','已报到女生','未报到人数'],
        textStyle: {
            color: "white",
            fontWeight: 'bold'
        },
        itemWidth: 20,
        itemHeight: 20
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    axisLine: {
        lineStyle: {
            color: "white"
        }
    },
    xAxis:  {
        type: 'value',
        nameTextStyle: {
            color: "white"
        },
        axisLabel: {
            show: true,
            color: 'white',
            fontWeight: 'bold'
        }
    },
    yAxis: {
        type: 'category',
        data: ['学院01','学院02','学院03','学院04','学院05','学院06','学院07'],
        nameTextStyle: {
            color: "white"
        },
        axisLabel: {
            show: true,
            color: 'white',
            fontWeight: 'bold'
        }
    },
    series: [
        {
            name: '已报到男生',
            type: 'bar',
            stack: '总量',
            // barWidth:this_barWidth,
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 320, 302, 301, 320]
        },
        {
            name: '已报到女生',
            type: 'bar',
            stack: '总量',
            // barWidth:this_barWidth,
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101,320, 302, 301, 320]
        },
        {
            name: '未报到人数',
            type: 'bar',
            stack: '总量',
            // barWidth:this_barWidth,
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191,320, 302, 301, 320]
        }
    ],
    color: ['rgb(0,230,104)', 'rgb(255,192,0)', 'rgb(166,166,166)']
};

var school_charts = echarts.init(document.getElementById('school_chart'));
school_charts.setOption(school_option)