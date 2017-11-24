Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'https://github.com/wushuxuan/LECHENG/blob/master/src/images/01.png?raw=true', 'https://github.com/wushuxuan/LECHENG/blob/master/src/images/02.jpg?raw=true','https://github.com/wushuxuan/LECHENG/blob/master/src/images/03.jpg?raw=true',
    ],
    citylist: [{ image: 'https://github.com/wushuxuan/LECHENG/blob/master/src/images/05.jpg?raw=true' , cityname: '北京',url:'../homes/homes'},
      { image: 'https://github.com/wushuxuan/LECHENG/blob/master/src/images/06.png?raw=true', cityname: '上海' }]
  },
  /**搜索框提交form */
  IndexSearch:function(e){
    console.log(e.detail.value)
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