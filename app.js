App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // wx.getSetting({
    //   success(res) {
    //     console.log(res.authSetting);
        
    //   }
    // })
    console.log(this.APPname);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    wx.onMemoryWarning(function () {
      console.log('onMemoryWarningReceive')
    })
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData: {
    name:"wow",
    say() {
      console.log(123);
      
    }
  }
})
