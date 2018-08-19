
ethnic_option = {
    title : {
        text: '少数民族分布情况',
        x:'left',
        textStyle: {
            color: 'white'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show: false,
        x : 'right',
        y : 'center',
        orient: 'vertical',
        data:['满族','土家族','蒙古族','回族','壮族',
              '彝族','白族','哈萨克族','维吾尔族','苗族']
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
                {value:78, name:'满族'},
                {value:75, name:'土家族'},
                {value:65, name:'蒙古族'},
                {value:60, name:'回族'},
                {value:35, name:'壮族'},
                {value:35, name:'彝族'},
                {value:28, name:'白族'},
                {value:26, name:'哈萨克族'},
                {value:25, name:'维吾尔族'},
                {value:21, name:'苗族'}
            ]
        }
    ]
};

// "满族": 78, 
// "土家族": 75, 
// "蒙古族": 65, 
// "回族": 60, 
// "壮族": 35, 
// "彝族": 35, 
// "白族": 28,
// "哈萨克族": 26,
// "维吾尔族": 25,
// "苗族": 21, 

var ethnic_charts = echarts.init(document.getElementById('ethnic_chart'));
ethnic_charts.setOption(ethnic_option)