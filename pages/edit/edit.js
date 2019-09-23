// pages/edit/edit.js
var call = require('../.././utils/request.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    title: ''
  },
  doSuccess(respData, title){
    let id = respData.id
    // let title = data.title
    app.requestBlogDetailId = id
    app.requestBlogDetailTitle = title
    wx.navigateTo({
      url: '/pages/blogDetails/detail',
    })
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 2000
    })
  },
  bindSave(e){
    // var that = this
    var data = e.detail.value
    let files = {}
    console.log(data.content)
    files[data.title] = { content : data.content }
    console.log(files)
    let postData = {
      'public': true,
      'description': data.tag,
      'files': files
    }
    call.postData('/gists', postData, this.doSuccess, this.data.title)

    // wx.request({
    //   url: 'https://api.github.com/gists?access_token=a7c31797410a8664684a6717e80157bb4bf86f44',
    //   method: 'POST',
    //   data: {
    //     "public": true,
    //     "description": data.tag,
    //     "files": files,
    //   },
    //   success: res => {
    //     let id = res.data.id
    //     let title = data.title
    //     app.requestBlogDetailId = id
    //     app.requestBlogDetailTitle = title
    //     wx.navigateTo({
    //       url: '/pages/blogDetails/detail',
    //     })
    //     wx.showToast({
    //       title: '发布成功',
    //       icon: 'success',
    //       duration: 2000
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})