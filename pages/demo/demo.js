// pages/demo/demo.js
var wxprase = require('../../wxParse/wxParse.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var list = "<span style='color: rgb(51, 51, 51); font - family: 微软雅黑; font - size: 16px; letter - spacing: 1px; text-indent: 32px;display:inline-block;margin-left:20px;'>必须要承认，现在这个年头，SUV卖得就是好。终于，就连专注跑车及豪车的捷豹都不再矜持，于是F-Pace就出现在了我们面前。F-Pace有着比</span><a class='logo_keyword' href='' style='margin: 0px; padding: 0px; color: rgb(51, 51, 51); border - bottom: 1px dotted rgb(153, 153, 153); font - size: 16px; font - family: 微软雅黑; letter - spacing: 1px; text - indent: 32px; background - color: rgb(255, 255, 255); '>宝马</a><span style='color: rgb(51, 51, 51); font - family: 微软雅黑; font - size: 16px; letter - spacing: 1px; text - indent: 32px; '>X5还要大的储物空间，全车80%均由铝质材料构成，</span><span style='margin: 0px; padding: 0px; color: rgb(51, 51, 51); font - family: 微软雅黑; font - size: 16px; letter - spacing: 1px; text - indent: 28px; '>从后驱到四驱，扭力分配只需0.18秒。3.0L&nbsp;V6机械增压发动机搭配8速自动变速箱，一脚地板油就能让你找到跑车的感觉。</span><span style='color: rgb(51, 51, 51); font - family: 微软雅黑; font - size: 16px; letter - spacing: 1px; text - indent: 32px; '>毫无疑问，F-Pace的出现，的确让</span><span style='color: rgb(51, 51, 51); font-family: 微软雅黑; font-size: 16px; letter-spacing: 1px; text-indent: 32px;'>Macan、宝马X3/X4、</span><a class='logo_keyword' href='http://che.hexun.com/logo/9/' style='margin: 0px; padding: 0px; color: rgb(51, 51, 51); border-bottom: 1px dotted rgb(153, 153, 153); font-size: 16px; font-family: 微软雅黑; letter-spacing: 1px; text-indent: 32px; background-color: rgb(255, 255, 255);'>奥迪</a><span style='color: rgb(51, 51, 51); font-family: 微软雅黑; font-size: 16px; letter-spacing: 1px; text-indent: 32px;'>Q5以及</span><a class='logo_keyword' href='http://che.hexun.com/logo/2/' style='margin: 0px; padding: 0px; color: rgb(51, 51, 51); border-bottom: 1px dotted rgb(153, 153, 153); font-size: 16px; font-family: 微软雅黑; letter-spacing: 1px; text-indent: 32px;'></a>"
    wxprase.wxParse('article', 'html', list, that, 5)
    

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