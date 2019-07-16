// pages/detail/detail.js
const movieAPI = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 3,
    movie: null

  },

  /**
   * 星星
   */
  onChange(event) {
    this.setData({
      value: event.detail
    });
  },


  /**
   * 评分
   */
  onScore:function(){
    wx.navigateTo({
      url: '../score/score',
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    const id = options.movieid;
    movieAPI.getMovieDetail(id, res => {
        this.setData({
          movie: res.data.result
        })
        console.log(res.data);
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})