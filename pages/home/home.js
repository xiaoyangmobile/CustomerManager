// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      targetValue: 50,
      currentValue: 20,
      valuePersent: 18,
      records: [
        {
          title: "客户分配",
          content: "客户王先生已分配给你",
          time: "今天 14：00"
        },
        {
          title: "客户分配",
          content: "客户王先生已分配给你",
          time: "今天 14：00"
        },
      ]
  },

  getValuePersent() {
      var value =  currentValue * 100 % 50 -2;
      value = value < 0 ? 0 : value;
      this.setData({
        valuePersent: value,
      })
  },

  toDetail(e) {
    console.log(e);
    wx.navigateTo({
      url: '../detail/detail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 0
    })
  }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})