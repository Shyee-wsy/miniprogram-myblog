const app = getApp()

Page({
  data: {
    blogList: []
  },
  toDetail(event) {
    let id = event.currentTarget.dataset.id //获取绑定的数据
    let title = event.currentTarget.dataset.title
    wx.navigateTo({
      url: '/pages/blogDetails/detail/?id='+id,
    })
  },
  onLoad:function(){
    // var that = this
    var blogs = []
    wx.request({
      url: 'https://api.github.com/users/Shyee-wsy/gists',
      success: res => {
        // console.log(res)
        let response = res.data
        for (let i = 0; i < response.length; i++) {
          blogs.push({
            id: response[i].id,
            updatedAt: response[i].updated_at,
            createdAt: response[i].created_at,
            title: Object.keys(response[i].files),
            tag: response[i].description
          })
          this.setData({
            blogList: blogs
          })
        }
      }
    })
  },
})  
