const app = getApp()
var call = require('../.././utils/request.js')

Page({
  data: {
    blogList: []
  },
  toDetail(event) {
    let id = event.currentTarget.dataset.id //获取绑定的数据
    let title = event.currentTarget.dataset.title
    app.requestBlogDetailId = id
    app.requestBlogDetailTitle = title.join('')
    wx.navigateTo({
      url: '/pages/blogDetails/detail',
    })
  },
  newBlog(event){
    wx.navigateTo({
      url: '/pages/edit/edit'
    })
  },
  fetchData(data) {
    var blogs = [];
    for (let i = 0; i < data.length; i++) {
      blogs.push({
        id: data[i].id,
        id: data[i].id,
        updatedAt: data[i].updated_at,
        createdAt: data[i].created_at,
        title: Object.keys(data[i].files),
        tag: data[i].description
      })
      this.setData({
        blogList: blogs
      })
    }
  },
  onLoad:function(){
    // var that = this
    call.getData('/users/Shyee-wsy/gists', this.fetchData)
    // wx.request({
    //   url: 'https://api.github.com/users/Shyee-wsy/gists',
    //   success: res => {
    //     // console.log(res)
    //     let response = res.data
    //     for (let i = 0; i < response.length; i++) {
    //       blogs.push({
    //         id: response[i].id,
    //         updatedAt: response[i].updated_at,
    //         createdAt: response[i].created_at,
    //         title: Object.keys(response[i].files),
    //         tag: response[i].description
    //       })
    //       this.setData({
    //         blogList: blogs
    //       })
    //     }
    //   }
    // })
  },
})  
