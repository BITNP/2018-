
let total_sex_boy = 2643;
let total_sex_girl = 1272;

function getDataFromServerSex() {
  return {"errcode":0,"性别列表":[{"性别":"男","人数":300},{"性别":"女","人数":666}]}
// $.get('http://yingxin.info.bit.edu.cn/studentData/genderHadRegister',function(res) {
//   console.log(res)
// })
}

function dataFactorySex(ret_data) {
  let output = {}

  let arr = ret_data['性别列表'];

  let arr_len = arr.length;
  for(let i = 0; i < arr_len; i++) {
  	if(arr[i]['性别'] == '男') {
  		output.boy = arr[i]['人数'] / total_sex_boy;
  	} else {
  		output.girl = arr[i]['人数'] / total_sex_girl;
  	}
  }

  return output;
}



function resizeBoy(percent,height) {
	$('.people-container.boy').css('top', (12 - percent*height) + 'vh');
	$('.img.img-people.boy').css('top', '-' + (12 - percent*height) + 'vh');
	$('.left-people .percent.boy').text(parseInt(percent*100) + '%');
}
function resizeGirl(percent,height) {
	$('.people-container.girl').css('top', (2*height - percent*height) + 'vh');
	$('.img.img-people.girl').css('top', (percent*height - height) + 'vh');
	$('.left-people .percent.girl').text(parseInt(percent*100) + '%');
}


let sex_data = dataFactorySex(getDataFromServerSex());

resizeBoy(sex_data.boy, 12);
resizeGirl(sex_data.girl, 12);
