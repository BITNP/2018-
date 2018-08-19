
let total_num = [624,1091,76,262,121,153,738,564,286];

function getDataFromServerSchool() {
  return [ 93, 700, 57, 30, 22, 89, 290, 160, 70 ];
// $.get('http://yingxin.info.bit.edu.cn/studentData/halfHourHadRegister',function(res) {
//   console.log(res)
// })
}

function dataFactorySchool(ret_data) {

    let output = {
        ok: [],
        no: []
    };

    output.ok = ret_data;

    let len = output.ok.length
    for(let i = 0; i < len; i++) {
        output.no[i] = total_num[i] - output.ok[i];
    }

    return output;

}

let school_datas = dataFactorySchool(getDataFromServerSchool());

var this_barWidth = 30;

var school_option = {
    tooltip: {
        show:false,
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    title:{
        text: '书院报到情况',
        x: 'left',
        textStyle: {
            color: 'white'
        }
    },
    toolbox: {
        show: false,
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    xAxis: [
        {
            type: 'category',
            data: ["特立书院","睿信书院","民族书院","经管书院","知艺书院","北京书院","精工书院","求是书院","明德书院"],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: 'white',
                    width: 1
                }
            },
            axisLabel: {
                show: true,
                interval: 0,
                color: 'white',
                rotate: 45,
                fontWeight: 'bold'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            axisLine: {
                show: true,
                lineStyle: {
                    opacity: 0
                }
            },
            axisTick: true,
            min: 0,
            max: 1100,
            interval: 100,
            axisLabel: {
                show: true,
                formatter: '{value}',
                color: 'white',
                fontWeight: 'bold'
            },
            splitLine: {
                // show: false,
                lineStyle: {
                    color: 'white',
                    width: 1
                }
            }
        }
    ],
    series: [
        {
            name:'已报到人数',
            type:'bar',
            stack: 'aa',
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255,192,0,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(255,192,0,0)'
                    }]),
                borderWidth: 1,
                borderColor: '#fff'
            },
            data: school_datas.ok
        },
        {
            name:'未报到人数',
            type:'bar',
            stack: 'aa',
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                color: '#ccc',
                borderWidth: 1,
                borderColor: '#fff'
            },
            data: school_datas.no
        }
    ]
};

var school_charts = echarts.init(document.getElementById('school_chart'));
school_charts.setOption(school_option)