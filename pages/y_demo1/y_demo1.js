// pages/y_demo1/y_demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    chineseScore: '',
    mathScore: '',
    avg: '',
    flag: true
  },

  y_input_name: function(e) {
    console.log(e);
    var input = e.detail.value;
    this.setData({
      name: input
    })
  },

  y_input_chinese: function(e) {
    console.log(e);
    var input = e.detail.value;
    if (!isNaN(input)) {
      this.setData({
        chineseScore: input
      })
    }
  },

  y_input_math: function(e) {
    console.log(e);
    var input = e.detail.value;
    if (!isNaN(input)) {
      this.setData({
        mathScore: input
      })
    }
  },

  y_confirm: function(e) {
    if (this.data.name == '' || this.data.chineseScore == '' || this.data.mathScore == '') {
      return
    }

    var result = (this.data.chineseScore * 1 + this.data.mathScore * 1) / 2;
    this.setData({
      flag: false,
      avg: result
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('页面加载');
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('页面面初次渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('监听页面显示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('监听页面隐藏');
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
    console.log('监听用户下拉动作');
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