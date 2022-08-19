// pages/detail/detail.js
import {fetchRecordList, retchRecords} from '../../service/fetchRecords';
import Dialog from '../../miniprogram_npm/tdesign-miniprogram/dialog/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name: '花生',
      title: '执行院长',
      phone: '15812210990',
      target: '季度目标',
      city: '广州',
      county: '荔湾',
      company: '雅诺口腔',
      unitId: '雅诺口腔主院',
      system: 'DIO',
      useCount: '100'
    },
    target: {
      name: '基台',
      number: 10
    },
    records: [],
    lastTime: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    fetchRecordList().then((data) => {
      this.setData({
        records: data,
        lastTime: data[0].time,
      });
    });
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

  },

  onTarget() {
     Dialog.confirm({
       title: '标记意向',
       content: '季度目标',
       cancelBtn: '取消标记',
       confirmBtn: '确认标记'
     }).then(()=>{
       this.data.userInfo.target = '季度目标';
        this.setData({
          userInfo: this.data.userInfo
        })
     }).catch(()=>{
      this.data.userInfo.target = '';
       this.setData({
         userInfo: this.data.userInfo
       })
    })
  },

  toIntentList() {
    wx.navigateTo({
      url: '../intentlist/intentlist',
    });
  },

  toCreateTarget() {
    wx.navigateTo({
      url: '../createtarget/createtarget',
    })
  },

  toEventList() {
    wx.navigateTo({
      url: '../eventlist/eventlist',
    })
  }
})