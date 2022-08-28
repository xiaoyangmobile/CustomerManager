const md5 = require('../../assets/md5');
Page({
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  // 登录 
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length ==
      0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.request({
        // url: 'http://60.205.57.246:8088/dlwd-auth/oauth/token',
        url: 'http://60.205.57.246:8088/dlwd-auth/oauth/token?password='+md5.hexMD5(this.data.password)+'&tenantId=000000&username='+this.data.phone+'&grant_type=password&scope=all&type=account',
        method: 'POST',
        header: {
          'content-type': 'application/json', // 默认值
          'Authorization': 'Basic ZGx3ZF9jbGllbnQ6ZGx3ZF90b290aF9zZWNyZXQ=',
        },
        // data: {
        //   "username": this.data.phone,
        //   "password": md5.hexMD5(this.data.password),
        //   "tenantId":"000000",
        //   "grant_type":"password",
        //   "scope":"all",
        //   "type": "account",
        //   "Authorization": "Basic ZGx3ZF9jbGllbnQ6ZGx3ZF90b290aF9zZWNyZXQ="
        // },
        success(res) {
          console.log(res);
          if (res.statusCode == 200 && res.data.error_code == undefined) {
            getApp().access_token = res.data.access_token;
            // 跳转至index页面
            wx.switchTab({
              url: '/pages/home/home'
            })
            // 这里修改成跳转的页面 
            wx.showToast({
              title: '登录成功',
              icon: "none",
              duration: 2000
            });
          } else {
            wx.showToast({
              title: res.data.error_description,
              icon: "none",
              duration: 2000
            })
          }
        },
        fail () {
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
    }
  }
}) 