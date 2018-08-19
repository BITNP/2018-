

function getDataFromServerMajor() {
  return {"errcode":0,"专业列表":[ { '专业': '社会科学试验班（Ⅰ）', '人数': 172 },
                                    { '专业': '电子信息类（实验班）', '人数': 64 },
                                    { '专业': '车辆工程(汽车变速技术工艺)', '人数': 8 },
                                    { '专业': '兵器类', '人数': 203 },
                                    { '专业': '化学化工菁英班', '人数': 197 },
                                    { '专业': '设计学类（Ⅱ）', '人数': 96 },
                                    { '专业': '光电信息科学与工程(液晶电视制造)', '人数': 7 },
                                    { '专业': '机械工程(高精尖项目)', '人数': 10 },
                                    { '专业': '英语', '人数': 95 },
                                    { '专业': '经济管理试验班', '人数': 145 },
                                    { '专业': '车辆工程(汽车发动机制造工艺)', '人数': 8 },
                                    { '专业': '会计学（中外合作办学）', '人数': 160 },
                                    { '专业': '航空航天类', '人数': 214 },
                                    { '专业': '数学菁英班', '人数': 108 },
                                    { '专业': '自动化(高精尖项目)', '人数': 15 },
                                    { '专业': '电子科学与技术(芯片设计)', '人数': 8 },
                                    { '专业': '机械类', '人数': 453 },
                                    { '专业': '机械电子工程(机器人制造)', '人数': 14 },
                                    { '专业': '设计学类（Ⅰ）', '人数': 29 } ]};
// $.get('http://yingxin.info.bit.edu.cn/studentData/',function(res) {
//   console.log(res)
// })
}

function dataFactoryMajor(ret_data) {

    let output = {
        major: [],
        boy: [],
        girl: [],
        no: []
    };
    let index = 1;
    let datas = ret_data['专业列表'];
    let len = datas.length;
    for(var i = 0; i < len; i++) {
        output.major.push(datas[i]['专业']);
        output.boy.push(datas[i]['人数']);
        output.girl.push(datas[i]['人数']);
    }

    return output;

}

var this_barWidth = 30;

var major_option = {
    title:{
        text:'专业报到情况',
        x: 'left',
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
        x: 'right',
        y: 'top',
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
        data: [ '社会科学试验班',
                '电子信息类',
                '车辆工程',
                '兵器类',
                '化学化工菁英班',
                '设计学类',
                '光电信息科学与工程',
                '机械工程',
                '英语',
                '经济管理试验班',
                '车辆工程',
                '会计学',
                '航空航天类',
                '数学菁英班',
                '自动化',
                '电子科学与技术',
                '机械类',
                '机械电子工程',
                '设计学类' ],
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
            data: [ 54, 24, 20, 14, 31, 57, 26, 50, 22, 55, 24, 29, 32, 16, 12, 44, 43, 48, 16 ]
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
            data: [ 19, 56, 29, 48, 46, 13, 20, 10, 53, 46, 12, 23, 50, 36, 24, 14, 17, 32, 28 ]
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
            data: [ 24, 55, 30, 17, 29, 33, 16, 16, 23, 32, 14, 31, 24, 15, 44, 44, 19, 35, 23 ]
        }
    ],
    color: ['rgb(0,230,104)', 'rgb(255,192,0)', 'rgb(166,166,166)'] 
};

var major_charts = echarts.init(document.getElementById('major_chart'));
major_charts.setOption(major_option)