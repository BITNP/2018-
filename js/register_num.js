// 招生总人数
let total_people = 3915;

function getDataFromServerRegisterNum() {
  return {"errcode":0,"报到总数":1000};
// $.get('http://yingxin.info.bit.edu.cn/studentData/genderHadRegister',function(res) {
//   console.log(res)
// })
}

function dataFactoryRegisterNum(ret_data) {
  let output = [
                {value:1500, name:'已报到'},
                {value:500, name:'未报到', selected: true}
            ]
  if(ret_data.errcode == 0) {
    output[0].value = ret_data["报到总数"];
    output[1].value = total_people - output[0].value;
  }
  return output;
}

var register_num_option = {
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title:{
      text:'总招新人数: 3915',
      x: 'left',
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
            radius: ['30%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
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
            data: dataFactoryRegisterNum(getDataFromServerRegisterNum())
        }
    ],
    color: ['rgb(255,192,0)','rgb(166,166,166)']
};

var register_num_charts = echarts.init(document.getElementById('register_num_chart'));
register_num_charts.setOption(register_num_option)