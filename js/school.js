// 我希望后台发送类似这样的数据，我会在前台做转化
var school_data_from_end = {
    completed: {
        "学院01": 324,
        "学院02": 322,
        //......
    },
    processing: {
        "学院01": 33,
        "学院02": 22,
        //......
    },
    undo: {
        "学院01": 432,
        "学院02": 342,
        //......
    }
}

var completed_data = [320, 302, 301, 320, 302, 301, 320];
var processing_data = [120, 132, 101,320, 302, 301, 320];
var undo_data = [220, 182, 191,320, 302, 301, 320];


school_option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
    },
    legend: {
        data: ['报到完成人数','正在报到人数','未报到人数'],
        textStyle: {
            color: "white"
        }
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
        }
    },
    yAxis: {
        type: 'category',
        data: ['学院01','学院02','学院03','学院04','学院05','学院06','学院07'],
        nameTextStyle: {
            color: "white"
        }
    },
    series: [
        {
            name: '报到完成人数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: completed_data
        },
        {
            name: '正在报到人数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: processing_data
        },
        {
            name: '未报到人数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: undo_data
        }
    ]
};

var school_charts = echarts.init(document.getElementById('school_chart'));

school_charts.setOption(school_option);