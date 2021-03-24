// pages/show/index.js
'use strict'
const util = require('../../utils/util.js')

let context
let key
let sl
let xl
let hp

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    context = this
    context.sl = options.sl
    context.xl = options.xl
    context.hp = options.hp

    if (context.sl == undefined || context.xl == undefined) {
      console.log('sl undefined, return')
      return
    }

    util.tokenRequest(context.sl, context.xl, context.hp, ret => {
      if (ret) {
        context.key = ret
        context.templateRequest()
      }
      else {
        wx.showModal({
          title: '请求失败',
          content: '请反馈给作者处理',
          showCancel: 'false'
        })
      }
    })
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    const url = '/pages/show/index?sl=' + this.sl + '&xl=' + this.xl + '&hp=' + this.hp
    console.log('url=' + url)
    return {
      path: url,
      success: (res) => {
        wx.showToast({
          title: '分享成功',
          icon: 'success',
          duration: 3000
        })
      }
    }
  },

  /**
   * 获取年度图片模板
   */
   templateRequest: function() {
     wx.request({
       url: 'https://couplet.propgm.cn/app/CoupletsWS_V2.asmx/GetTemplates',
       method: 'POST',
       data: {
         tag: 'mobile',
       },
       success: (res) => {
         console.log('key=', context.key)
         const templates = res.data.d
         console.log('templates=', templates)
         let imageUrl = 'https://couplet.propgm.cn/app/RenderImage.ashx?S='+context.sl+'&X='+context.xl+'&H='+context.hp+'&K='+context.key+'&st='+templates[0]+'&ft=STLiti&wd=480&ht=640&df=0'
         console.log('imageUrl=', imageUrl)
         context.setData({
           templates: templates,
           key: context.key,
           sl: context.sl,
           xl: context.xl,
           hp: context.hp
         })
       }
     })
   },

  /**
   * 分享功能
   */
  shareTap: function() {
    wx.showModal({
      content: '此功能开发中',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    });
  },
  home() {
    wx.reLaunch({
      url: '/pages/sl/index'
    })
  }
})