// pages/homes/homes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x:-1,
    y:0,
    showToast:false,
    hidden:false,
    homeslist: [{ name: '新世界芒果青年理旅社', imageurl: '../../src/images/homes/01/01.jpg', describe: '13.3m/合租/11层', address: '距2号线云锦路站1026米', money:'￥2380/月'}]
  },
  /**点击跳转*/
  movable:function(e){
      wx.navigateTo({
        url: '../details/details',
      })
  },
  /**移动 */
  MoveView:function(e){
    var that = this
    console.log(e)
    console.log(e.touches[0].pageX)
    if (e.touches[0].pageX<=23){
      that.setData({
        hidden:true
      })
    } else if (e.touches[0].pageX >= 250){
      that.setData({
        hidden: true,
        showToast: true,
      })
      var currentTime = 2
      var interval = setInterval(function(){
        currentTime--;
        if (currentTime<=0){
          clearInterval(interval)
          that.setData({
            showToast: false,
          })
        }
      },500)
    }else{
      that.setData({
        x: 0,y:0
      })
    }
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