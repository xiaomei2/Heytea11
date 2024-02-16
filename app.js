
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
var uuid;
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  onLaunch: function () {
    this.globalData = {
      "version": "1.0.0",
      "cacheFileDir": wx.env.USER_DATA_PATH + "/cacheFile",
      "isRelease": false,//可以网络控制 用于上架屏蔽某些页面不显示
      bannerUnitId: "adunit-97a87af0b1920902", //banner广告id
      videoUnitId: "adunit-ea6f8e347b015b4e", //视频广告id
      adUnitId: "adunit-001849c9dd37d55e" //激励广告id
    }
  },
  onShow() {
  },
})
