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
    hours: Array.from(new Array(24), (_, index) => ({
      label: `${index}时`,
      value: index,
    })),
    minutes: Array.from(new Array(60), (_, index) => ({
      label: `${index}分`,
      value: index
    })),
    selectedCityValue: '电话',
    picker1Visible: false,
    picker3Visible: false,
    picker4Visible: false,
    selectedYearsWithDate: '',
    selectedMonth: '',
    selectedDay: '',
    selectedHours: '',
    selectedMinuts:'',
    content:'',
    contactId: '',
    companyId: '',
  },

  onLoad(options) {
    this.setData({
      contactId: options.contactId,
      companyId: options.companyId,
    });
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
        picker4Visible: true,
    });
  },
  onPicker3Cancel() {
      console.log('picker3 cancel:');
      this.setData({
          picker3Visible: false,
      });
  },



  onPicker4Confirm(e) {
    console.log('picker4 confirm:', e.detail);
    this.setData({
        selectedHours: e.detail.value[0].value,
        selectedMinuts: e.detail.value[1].value,
        picker4Visible: false,
    });
  },
  onPicker4Cancel() {
      console.log('picker4 cancel:');
      this.setData({
          picker4Visible: false,
      });
  },

  dateFormat(date, fmt="yyyy-MM-dd HH:mm") { 
        var o = {
          'M+': date.getMonth() + 1, // 月份
          'd+': date.getDate(), // 日
          'H+': date.getHours(), // 小时
          'm+': date.getMinutes(), // 分
          's+': date.getSeconds(), // 秒
          'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
          S: date.getMilliseconds() // 毫秒
        }
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
        return fmt
      },

  getDate() {
    var month = this.data.selectedMonth >= 10 ? this.data.selectedMonth : '0' + this.data.selectedMonth;
    var day = this.data.selectedDay >= 10 ? this.data.selectedDay : '0' + this.data.selectedDay;
    var hour = this.data.selectedHours >= 10 ? this.data.selectedHours : '0' + this.data.selectedHours;
    var minuts = this.data.selectedMonth >= 10 ? this.data.selectedMinuts : '0' + this.data.selectedMinuts;
    return this.data.selectedYearsWithDate+ '-' + month + '-' + day + ' ' + hour + ":" + minuts;
  },

  onBack() {
    wx.request({
      url: 'http://60.205.57.246:8088/dlwd-tooth/visitrecord/save',
      method: 'POST',
      header: {
        'content-type': 'application/json', // 默认值
        'Authorization': 'Basic ZGx3ZF9jbGllbnQ6ZGx3ZF90b290aF9zZWNyZXQ=',
        'Dlwd-Auth': 'bearer ' + getApp().access_token,
      },
      data: {
        "visitType": this.data.selectedCityValue == '电话'? 1:2,
        "nextStep": this.data.content,
        "companyId": this.data.companyId,
        "contactId": this.data.contactId,
        "visitTime": this.dateFormat(new Date()),
        "nextTime": this.getDate(),
        "remark": "commodo",
        "visitRecord": this.data.content
      },
      success(res) {
        console.log(res);
        if (res.data.code == 200) {
          wx.showToast({
            title: '添加成功',
          })
          wx.navigateBack({
            delta: 1,
          })
        } else {
          wx.showToast({
            title: this.data.msg,
          })
        }
      }
    })
  }
})