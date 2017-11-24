// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    citylist: [{ image: 'https://github.com/wushuxuan/LECHENG/blob/master/src/images/recommend/recommend02.jpg?raw=true', cityname: '海洋系列' },
      { image: 'https://github.com/wushuxuan/LECHENG/blob/master/src/images/recommend/recommend01.png?raw=true', cityname: '清新系列' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          nickName: JSON.parse(res.rawData).nickName,
          avatarUrl: JSON.parse(res.rawData).avatarUrl
        })
        console.log(JSON.parse(res.rawData).nickName)
        console.log(JSON.parse(res.rawData).avatarUrl)
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