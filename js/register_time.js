// 我希望后台发送类似这样的数据，我会在前台做转化
var register_time_data_from_end = {
    time: "1534243104", // 时间戳
    completed: 152, // 已报到完成数
    processing: 22, // 正在报到数
    undo: 3452 // 尚未报到数
}

var completed_data = [320, 302, 301, 320, 302, 301, 320];
var processing_data = [120, 132, 101,320, 302, 301, 320];
var undo_data = [220, 182, 191,320, 302, 301, 320];



let register_time_option = {
    backgroundColor:'',
    title: {
        text: ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#ffffff'
            }
        }
    },
    legend: {
        data:['报到完成人数','正在报到人数','未报到人数'],
        textStyle: {
            color: "white"
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['7:00','8:00','9:00','10:00','11:00','12:00','13:00']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'报到完成人数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: completed_data
        },
        {
            name:'正在报到人数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: processing_data
        },
        {
            name:'未报到人数',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data: undo_data
        }
    ]
};

var register_time_charts = echarts.init(document.getElementById('register_time_chart'));

register_time_charts.setOption(register_time_option);

