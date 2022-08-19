// pages/eventlist/eventlist.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      items: [
        {
          product: '种植体',
          eventName: '种植体试种',
          user: '花生',
          step: '未完成'
        },
        {
          product: '亲水仪',
          eventName: '种植体试种',
          user: '花生',
          step: '未完成'
        },
        {
          product: '原厂基台',
          eventName: '基台试用',
          user: '花生',
          step: '完成'
        }
      ]
  },

  addNewItem(obj) {
    this.data.items.push(obj)
    this.setData({
      items: this.data.items
    })
  },

  toEditEvent() {
    wx.navigateTo({
      url: '../editEvent/editEvent',
    })
  },

  toCreateEvent() {
    wx.navigateTo({
      url: '../createEvent/createEvent',
    })
  }
})