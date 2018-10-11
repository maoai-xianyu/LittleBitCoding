// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "测试页面",
    flag: true,
    num1: 5,
    num2: 8,
    user: {
      name: "囧架架",
      age: 15
    },
    test: [{
        username: "日",
        age: 12,
        sex: "男"
      },
      {
        username: "月",
        age: 16,
        sex: "女"
      },
      {
        username: "卿",
        age: 14,
        sex: "男"
      }
    ],
    name: "yes pa pa",
    focus_flag: false
  },

  click_click: function(e) {
    console.log("点击的事件")
    this.setData({
      name: "no papa"
    })
    console.log(e)
    console.log(e.currentTarget.id)
  },

  click_focus: function(e) {
    this.setData({
      focus_flag: true
    })
  },

  click_input: function(e){
    console.log(e)
    console.log(e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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