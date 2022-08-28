// pages/record/record.js
import {fetchRecordList, retchRecords} from '../../service/fetchRecords'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageLoading: false,
    records: [],
    index: 1,
    total: -1,
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

  toDetail(e) {
    var id = this.data.records[e.currentTarget.id].id;
    console.log(id);
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  },

  loadRecords() {
    if (this.data.total != -1 && this.data.total == this.data.records.length) {
      return;
    }
    wx.stopPullDownRefresh();

    this.setData({
      pageLoading: true,
    });
    self = this;
    wx.request({
      url: 'http://60.205.57.246:8088/dlwd-tooth/visitrecord/list?current='+this.data.index+'&size=10',
      method: 'GET',
      header: {
        'content-type': 'application/json', // 默认值
        'Authorization': 'Basic ZGx3ZF9jbGllbnQ6ZGx3ZF90b290aF9zZWNyZXQ=',
        'Dlwd-Auth': 'bearer ' + getApp().access_token,
      },
      success(res) {
        if (res.data.code == 200) {
          self.setData({
            index: (self.data.index+1),
            pageLoading: false,
            records: self.data.records.concat(res.data.data.records),
          })
        }
      },
      fail () {
        self.setData({
          pageLoading: false,
        });
        wx.hideLoading({
          success: (res) => {
            wx.showToast({
              title: '网络请求失败',
              icon: "none"
            })
          },
        })
      }
    })
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