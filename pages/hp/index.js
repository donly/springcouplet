// pages/hp/index.js
'use strict'
const util = require('../../utils/util.js')

let context

Page({
  selectedhp: '',
  /**
   * 页面的初始数据
   */
  data: {
    sl: '',
    xl: '',
    selectedhp: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    context = this
    if (options.model == null) {
      wx.showToast({
        title: '数据为空',
      })
      return;
    }
    const bean = JSON.parse(options.model);
    // this.setData({
    //   hpArray: bean.d,
    //   sl: options.sl,
    //   xl: options.xl,
    //   selectedhp: bean.d[0]
    // })
    // console.log(bean)
    // this.sl = options.sl
    // this.xl = options.xl
    // this.selectedhp = bean.d[0]

    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        let height = res.windowHeight;
        wx.createSelectorQuery().selectAll('#candidate').boundingClientRect(function (rects) {
          rects.forEach(function (rect) {
            context.setData({
              scrollHeight: res.windowHeight - rect.bottom - 60,
              hpArray: bean.d,
              sl: options.sl,
              xl: options.xl,
              selectedhp: bean.d[0]
            });
          })
        }).exec();
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 选择横批点击
   */
  selectHangpiTap: function(e) {
    const text = e.currentTarget.dataset.text

    this.setData({
      selectedhp: text
    })
  },
  showMyCouplet(e) {
    const url = '../couplet/index?sl=' + context.data.sl + '&xl=' + context.data.xl + '&hp=' + this.selectedhp
    console.log('url=', url)
    wx.navigateTo({
      url: url,
    })
  },
  showMSCouplet: function (e) {
    const url = '../show/index?sl=' + context.data.sl + '&xl=' + context.data.xl + '&hp=' + this.selectedhp
    console.log('url=' + url)
    wx.navigateTo({
      url: url,
    })
  },
  /**
   * 秀对联表单提交
   */
  formSubmit: function (e) {
    this.selectedhp = e.detail.value.hp
  },
  bindinput: function (e) {
    const hp = e.detail.value
    // console.log('input sl = ', sl)
    this.setData({
      selectedhp: hp
    })
  }
})