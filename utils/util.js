const app= getApp();

/**
 * 今日电影
 */
const getTodayMovie=function(resolve){
  wx.request({
     url: `${app.globalData.api_url}/movie/movies.today`,
    //url:`http://192.168.38.29/movieData/order.json`,
    data: {
      cityid: 6,
      key: 'b941ac1101b6283a185adec396eb25be'
    },
    header: {'content-type': 'application/json'},
    success:resolve
  });
}

/**
 * 电影详情
 * movieid
 */
const getMovieDetail=function(movieid,resolve){
  wx.request({
    url: `${app.globalData.api_url}/movie/query`,
    //url:`http://192.168.38.29/movieData/detils.json`,
    data: {
      movieid: movieid,
      key: 'b941ac1101b6283a185adec396eb25be'
    },
    header: {'content-type': 'application/json'},
    success:resolve
  });
}
/**
 * 城市列表
 */
const getCityList = function (resolve) {
  wx.request({
    url: `${app.globalData.api_url}/movie/cinemas.local`,
    data: {
      lat: 30.671363,
      lon: 104.052915,
      radius: 3000,
      key: 'b941ac1101b6283a185adec396eb25be'
    },

    success: resolve,
    fail: (err) => {
      console.log(err)
    }
  });
}
module.exports={
  getTodayMovie(resolve){
    return getTodayMovie(resolve);
  },
  getMovieDetail(movieid,resolve){
    return getMovieDetail(movieid,resolve);
  },
  getCityList(movieid, resolve){
    return getCityList(movieid, resolve)
  }

}