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
        data:['少数民族1','少数民族2','少数民族3','少数民族4',
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
            name:'面积模式',
            type:'pie',
            radius : '60',
            // center : ['70%', '50%'],
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