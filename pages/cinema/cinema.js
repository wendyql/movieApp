// pages/cinema/cinema.js
const app = getApp();
const movieAPI=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityLists:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    movieAPI.getCityList(res => {
      this.setData({
        cityLists: res.data.result
      })
      //console.log(JSON.stringify(res.data));
      //wx.hideLoading();
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
    wx.showLoading();
    movieAPI.getCityList(res => {
      const newCinemaLists = res.data.result;
      const cityLists = [...this.data.cityLists, ...newCinemaLists];
      // 数据请求成功
      this.setData({
        cityLists
        
      });
      //停止导航加载进度并停止下拉刷新
      wx.hideLoading();
      

    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})