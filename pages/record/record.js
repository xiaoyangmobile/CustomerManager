// pages/record/record.js
import {fetchRecordList, retchRecords} from '../../service/fetchRecords'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageLoading: false,
    records: [],
    tabList: [
      {
        text: '月度目标',
        key: 0,
      },
      {
        text: '重点目标',
        key: 1,
      },
    ]
  },

  init() {
    this.loadRecords();
  },

  loadRecords() {
    wx.stopPullDownRefresh();

    this.setData({
      pageLoading: true,
    });
    fetchRecordList().then((data) => {
      this.setData({
        records: data,
        pageLoading: false,
      });
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.init();
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
      selected: 1
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