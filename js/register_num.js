
register_num_option = {
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title:{
      text:'总招新人数: 3568',
      x: 'center',
      textStyle: {
          color: 'white'
      }
    },
    legend: {
        show: false,
        orient: 'vertical',
        x: 'left',
        data:['已报到人数','未报到人数']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['45%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        // fontSize: '30'
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        // fontSize: '50',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
              normal: {
                  label: {
                      show: true,
                      formatter: '{b}\n{c}',
                      color: '#fff',
                      fontWeight: 'bold'
                  }
              }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1500, name:'已报到人数'},
                {value:500, name:'未报到人数', selected: true}
            ]
        }
    ],
    color: ['rgb(129,113,84)','rgb(166,166,166)']
};


var register_num_charts = echarts.init(document.getElementById('register_num_chart'));
register_num_charts.setOption(register_num_option)