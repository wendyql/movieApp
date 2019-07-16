//index.js
const movieAPI = require('../../utils/util.js');

//Page Object
Page({
  data: {
    imgUrls: [
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925613238,818910214&fm=11&gp=0.jpg',
       'http://hiphotos.baidu.com/feed/pic/item/c2fdfc039245d688b5cce660a8c27d1ed31b2423.jpg',
       'http://5b0988e595225.cdn.sohucs.com/images/20180516/e8084db8865142af9cd2129cd5bda998.gif'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    cur: "#f40",
    movieLists: null,
    select: false,

  },
  //options(Object)
  onLoad: function(options) {
    movieAPI.getTodayMovie(res => {
      console.log(res.data);
      this.setData({
        movieLists: res.data.result
      });
    });
  },
  /**
   * 选中电影项
   */
  onMovieItemHandler: function(event) {
    const movieid = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: `../detail/detail?movieid=${movieid}`
    });
  },


  onReady: function() {

  },
  onShow: function() {

  },
  onHide: function() {

  },
  onUnload: function() {

  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading();
    movieAPI.getTodayMovie(res=>{
      this.setData({
        movieLists:res.data
      });
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    })
  },
  /**
   * 上拉加载更多
   */
  onReachBottom: function() {
    wx.showLoading();
    movieAPI.getTodayMovie(res => {
      const newMovieLists = res.data.result;
      const movieLists = [...this.data.movieLists, ...newMovieLists];
      // 数据请求成功
      this.setData({
        movieLists
      });
      //停止导航加载进度并停止下拉刷新
      setTimeout(function() {
        wx.hideLoading();
      }, 2000)
    });
  },

  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap: function(item) {

  }
});