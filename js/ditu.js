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

var data0 = [
    [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
    [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
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
        // splitList: [
        //     {start: 1500},
        //     {start: 1000, end: 1500},
        //     {start: 310, end: 1000},
        //     {start: 200, end: 300},
        //     {start: 10, end: 200},
        //     // {start: 5, end: 5},
        //     {end: 10}
        // ],
        min: 0,
        max: 15000,
        calculable : true,//颜色呈条状
        color: ['#A0022B', '#E09107', '#A3E00B']
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
            name: '1990',
            data: [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    areaColor:'black',
                    shadowColor: 'rgba(80, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(20, 118, 123)'
                    }, {
                        offset: 1,
                        color: 'rgb(100, 46, 72)'
                    }])
                },
                emphasis: {// 也是选中样式
                    borderWidth:2,
                    borderColor:'#fff',
                    areaColor: 'red',
                    label: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                 }    
            }
        },
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
//初始化echarts实例
var ditu_charts = echarts.init(document.getElementById("ditu_chart"));
//使用制定的配置项和数据显示图表
ditu_charts.setOption(ditu_option);