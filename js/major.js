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
        data: ["大类专业1","大类专业2","大类专业3","大类专业4","大类专业5",
        "大类专业6","大类专业7","大类专业8","大类专业9","大类专业10",
        "大类专业11","大类专业12","大类专业13","大类专业14","大类专业15",
        "大类专业16","大类专业17","大类专业18","大类专业19"],
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
            data: [45,77,40,72,74,33,56,61,61,79,39,48,49,41,64,45,35,54,30]
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
            data: [45,63,39,64,77,52,49,41,45,38,42,40,40,37,50,36,61,61,57]
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
            data: [162,179,166,174,156,134,150,161,172,171,165,132,133,168,132,179,170,162,131]
        }
    ],
    color: ['rgb(0,230,104)', 'rgb(255,192,0)', 'rgb(166,166,166)']
};

var major_charts = echarts.init(document.getElementById('major_chart'));
major_charts.setOption(major_option)