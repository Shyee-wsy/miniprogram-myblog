var app = getApp();
var defaultUrl = 'https://api.github.com';

function getData(url,doSuccess){
  wx.request({
    url: defaultUrl + url,
    success: res => {
      doSuccess(res.data)
    },
    fail: res => {
      cosole.log('请求数据失败 ' + res)
    }
  })
}

function postData(url, postData, doSuccess,title){
  let access_token = 'a7c31797410a8664684a6717e80157bb4bf86f44'
  wx.request({
    url: defaultUrl + url + '?access_token=' + access_token,
    data: postData,
    method: "POST",
    success: res => {
      doSuccess(res.data, title)
    },
    fail: res => {
      console.log("上传数据失败", res)
    }
  })
}

module.exports.getData = getData;
module.exports.postData = postData;