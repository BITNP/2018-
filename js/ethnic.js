ethnic_option = {
    title : {
        text: '少数民族分布情况',
        x:'center',
        textStyle: {
        	color: 'white'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'right',
        y : 'center',
        orient: 'vertical',
        data:['汉族','少数民族1','少数民族2','少数民族3','少数民族4',
        '少数民族5','少数民族6','少数民族7']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name: '半径模式',
            type: 'pie',
            radius : '60',
            center: ['30%', '50%'],
            // roseType: 'radius',
            data:[
                {value:3000, name:'汉族'},
                {value:100, name:'少数民族1', selected: true},
                {value:80, name:'少数民族2', selected: true},
                {value:70, name:'少数民族3', selected: true},
                {value:50, name:'少数民族4', selected: true},
                {value:40, name:'少数民族5', selected: true},
                {value:30, name:'少数民族6', selected: true},
                {value:10, name:'少数民族7', selected: true}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name:'面积模式',
            type:'pie',
            radius : '60',
            center : ['70%', '50%'],
            // roseType : 'area',
            data:[
                {value:100, name:'少数民族1'},
                {value:80, name:'少数民族2'},
                {value:70, name:'少数民族3'},
                {value:50, name:'少数民族4'},
                {value:40, name:'少数民族5'}
            ]
        }
    ]
};


var ethnic_charts = echarts.init(document.getElementById('ethnic_chart'));
ethnic_charts.setOption(ethnic_option)