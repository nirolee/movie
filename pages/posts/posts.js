var postData = require('../../data/posts-data.js');
Page({
  data:{
  },
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;  
    wx.navigateTo({
      url: 'post-detail-template/post-detail-template?id'+postId,
    
    })  
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
  
    this.setData({
        posts_key:postData.postList
    });
    },
 
})