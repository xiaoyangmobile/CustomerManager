// pages/createtarget/createtarget.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    method: [
      { label: '电话', value: '电话' },
      { label: '拜访', value: '拜访' },
      { label: '其他', value: '其他' },
    ],
    years: [
      { label: '2021年', value: '2021' },
      { label: '2022年', value: '2022' },
      { label: '2023年', value: '2023' },
      { label: '2024年', value: '2024' },
    ],
    months: Array.from(new Array(12), (_, index) => ({
        label: `${index + 1}月`,
        value: index + 1,
    })),
    days: Array.from(new Array(31), (_, index) => ({ label: `${index + 1}日`, value: index + 1 })),
    selectedCityValue: '电话',
    picker1Visible: false,
    picker3Visible: false,
    selectedYearsWithDate: '',
    selectedMonth: '',
    selectedDay: '',
    content:''
  },

  bindContent(e) {
    this.setData({
      content: e.detail.value
    });
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

  onClickTimerPicker(e) {
    this.setData({
      picker3Visible: true,
    });
  },

  onPicker3Confirm(e) {
    var _a, _b, _c;
    console.log('picker3 confirm:', e.detail);
    this.setData({
        picker3Visible: false,
        selectedYearsWithDate: (_a = e.detail.value[0]) === null || _a === void 0 ? void 0 : _a.value,
        selectedMonth: (_b = e.detail.value[1]) === null || _b === void 0 ? void 0 : _b.value,
        selectedDay: (_c = e.detail.value[2]) === null || _c === void 0 ? void 0 : _c.value,
    });
  },
  onPicker3Cancel() {
      console.log('picker3 cancel:');
      this.setData({
          picker3Visible: false,
      });
  },

  onBack() {
    wx.navigateBack({
      delta: 1,
    })
  }
})