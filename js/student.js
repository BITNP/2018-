


function getDataFromServerStudent() {
  return {"errcode":0,"学生列表":[{"姓名":"翁伊盈","学号":"1120180434","省份":"福建省","报到时间":"2018-08-13T10:50:15Z","报名人次":5},{"姓名":"蓝必禹","学号":"1120180023","省份":"广西壮族自治区","报到时间":"2018-08-13T10:50:02Z","报名人次":4},{"姓名":"黎书吟","学号":"1120180021","省份":"江西省","报到时间":"2018-08-13T10:49:55Z","报名人次":3},{"姓名":"马卓然","学号":"1120180008","省份":"河北省","报到时间":"2018-08-13T10:49:30Z","报名人次":2},{"姓名":"韩莹莹","学号":"1120180001","省份":"安徽省","报到时间":"2018-08-13T10:48:27Z","报名人次":1},{"姓名":"韩莹莹","学号":"1120180001","省份":"安徽省","报到时间":"2018-08-05T09:06:21Z","报名人次":0}]};
// $.get('http://yingxin.info.bit.edu.cn/studentData/proviceHadRegister',function(res) {
//   console.log(res)
// })
}

function dataFactoryStudent(ret_data) {
  let output = []
  output = ret_data['学生列表'];

  return output;
}

let student_data = dataFactoryStudent(getDataFromServerStudent());

let student_content = [];

let student_data_len = student_data.length;

// for(let i = 0; i < student_data_len; i++) {
for(let i = 0; i < 5; i++) {
	student_content.push('<tr><td>'+student_data[i]['姓名']+'</td><td>'+student_data[i]['省份']+'</td><td>xxx</td><td>'+student_data[i]['报到时间']+'</td></tr>')
}

$('#table-tbody-student').html(student_content.join(''))