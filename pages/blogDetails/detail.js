// pages/blogDetails/index.js
// const comi = require('../../comi/comi.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    id: null,
    createdAt: '',
    updatedAt: '',
    tag: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var id = options.id
    var id = getApp().requestBlogDetailId
    var title = getApp().requestBlogDetailTitle
    console.log(id)
    // var title = options.title
    this.setData({
      id: id,
      title: title
    })
    wx.request({
      url: 'https://api.github.com/gists/'+id ,
      success: res => {
        let data = res.data
        console.log(data)
        // console.log(title)
        this.setData({
          title: Object.keys(data.files),
          content: data.files[title].content,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
          tag: data.description
        })
      }
    })
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