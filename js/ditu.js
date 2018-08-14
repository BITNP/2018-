// 我希望后台发送类似这样的数据，我会在前台做转化
// selected不需说明，会在前端处理
var ditu_data = [
    { name: '北京', value: 143, selected: true},
    { name: '天津', value: 328 },
    { name: '上海', value: 506 },
    { name: '重庆', value: 482 },
    { name: '河北', value: 887 },
    { name: '山西', value: 908 },
    { name: '台湾', value: 528 },
    { name: '辽宁', value: 856 },
    { name: '吉林', value: 42 },
    { name: '黑龙江', value: 13 },
    { name: '江苏', value: 999 },
    { name: '浙江', value: 641 },
    { name: '安徽', value: 696 },
    { name: '福建', value: 394 },
    { name: '江西', value: 350 },
    { name: '山东', value: 368 },
    { name: '河南', value: 215 },
    { name: '湖北', value: 192 },
    { name: '湖南', value: 880 },
    { name: '广东', value: 63 },
    { name: '甘肃', value: 853 },
    { name: '四川', value: 513 },
    { name: '贵州', value: 927 },
    { name: '海南', value: 164 },
    { name: '云南', value: 455 },
    { name: '青海', value: 374 },
    { name: '陕西', value: 8 },
    { name: '广西', value: 318 },
    { name: '西藏', value: 129 },
    { name: '宁夏', value: 274 },
    { name: '新疆', value: 725 },
    { name: '内蒙古', value: 529 },
    { name: '澳门特别行政区', value: 103 },
    { name: '香港特别行政区', value: 371 } 
];
var ditu_option = {
    title : {
        text: "已报到新生省份分布",
        textStyle: {
            color: "white"
        },
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['报到人数'],
        textStyle: {
            color: "white"
        }
    },
    dataRange: {
        x: 'left',
        y: 'bottom',
        min: 0,
        max: 15000,
        calculable : true,//颜色呈条状
        color: ['#E0022B', '#E09107', '#A3E00B']
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            name: '报到人数',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                           color: "rgb(249, 249, 249)"
                        }
                    }
                },
                emphasis:{label:{show:true}}
            },
            data:ditu_data
        }
    ]
};

var ditu_charts = echarts.init(document.getElementById("ditu_chart"));

ditu_charts.setOption(ditu_option);