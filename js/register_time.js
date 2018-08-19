

function getDataFromServerRegisterTime() {
  return {"1":34,"2":98,"3":23,"4":19,"5":36,"6":23,"7":28,"8":56,"9":89,"10":59,"11":75,"12":54,"13":2,"14":44,"15":5,"16":56,"17":60,"18":49};
// $.get('http://yingxin.info.bit.edu.cn/studentData/halfHourHadRegister',function(res) {
//   console.log(res)
// })
}

function dataFactoryRegisterTime(ret_data) {

    let output = {
        xdata: [],
        data: []
    };
    let index = 1;

    while(ret_data[index] != undefined) {
        output.data.push(ret_data[index])
        index++;
    }

    for(var i = 0; i < index - 1; i++) {
        output.xdata.push((6 + parseInt(i/2)) + ':' + ((i%2) ? "30" : "00"))
    }

    return output;

}

let datas = dataFactoryRegisterTime(getDataFromServerRegisterTime());

let register_time_option = {
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
        text: '报名时间分布',
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
            data: datas.xdata,
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
                rotate: 60,
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
            max: 100,
            interval: 20,
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
            name:'当前报名人数柱状图',
            type:'bar',
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
            data: datas.data
        },
        {
            name:'当前报名人数折线图',
            type:'line',
            itemStyle: {
                color: '#fff'
            },
            lineStyle:{
                color: 'white',
                width: 1
            },
            data: datas.data
        }
    ]
};


var register_time_charts = echarts.init(document.getElementById('register_time_chart'));
register_time_charts.setOption(register_time_option)

