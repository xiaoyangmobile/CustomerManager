// pages/intentlist/intentlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      items: [
        {
          product: '种植体',
          amount: 5,
          count: 20,
          step: '进行中'
        },
        {
          product: '亲水仪',
          amount: 5,
          count: 20,
          step: '进行中'
        },
        {
          product: '原厂基台',
          amount: 5,
          count: 20,
          step: '过期'
        }
      ]
  },

  toCreateIntent() {
    wx.navigateTo({
      url: '../createintent/createintent',
    })
  },

  addNewItem(obj) {
    this.data.items.push(obj)
    this.setData({
      items: this.data.items
    })
  }
})