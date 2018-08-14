// 我希望后台发送类似这样的数据，我会在前台做转化
var register_num_data_from_end = {
    completed: 335, // 已报到完成数
    processing: 20, // 正在报到数
    undo: 234 // 尚未报到数
}


var register_num_data = [
                {value:335, name:'报到完成人数'},
                {value:20, name:'正在报到人数'},
                {value:234, name:'未报到人数'}
            ];

register_num_option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        data:['报到完成人数','正在报到人数','未报到人数'],
        textStyle: {
            color: "white"
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:register_num_data
        }
    ]
};

var register_num_charts = echarts.init(document.getElementById('register_num_chart'));
register_num_charts.setOption(register_num_option)