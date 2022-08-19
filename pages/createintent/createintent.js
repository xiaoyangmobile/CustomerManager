// pages/createintent/createintent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: [
      { label: '种植体', value: '种植体' },
      { label: '原厂基台', value: '原厂基台' },
      { label: '第三方原厂基台', value: '第三方原厂基台' },
      { label: '义齿加工', value: '义齿加工' },
      { label: '亲水仪', value: '亲水仪' },
      { label: '其他', value: '其他' },
    ],
    selectedCityValue: '种植体',
    picker1Visible: false,
    amount: 5,
    count: 20,
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

  },

  onColumnChange(e) {
    console.log('column change:', e.detail);
  },
  onClickPicker(e) {
      this.setData({
        picker1Visible: true,
      });
  },
  onPickerChange(e) {
      console.log('picker change:', e.detail);
  },
  onPicker1Confirm(e) {
      console.log('picker1 confirm:', e.detail);
      this.setData({
          picker1Visible: false,
          selectedCityValue: e.detail.value[0].value,
      });
  },
  onPicker1Cancel() {
      console.log('picker1 cancel:');
      this.setData({
          picker1Visible: false,
      });
  },
  onBack() {
    var pages = getCurrentPages();
    var beforPage = pages[pages.length-2];
    // var arrays = new Array();
    // arrays.push(beforPage.data.items);
    // arrays.push({
    //   product: this.data.selectedCityValue,
    //   amount: this.data.amount,
    //   count: this.data.count,
    //   step: '进行中'
    // });
    // beforPage.setData({
    //   items: arrays
    // })
    beforPage.addNewItem({
      product: this.data.selectedCityValue,
      amount: this.data.amount,
      count: this.data.count,
      step: '进行中'
    });
    wx.navigateBack();
  }
})