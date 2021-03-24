// pages/wxml/index.js
'use strict'

const util = require('../../utils/util.js')

let context
Page({
  selectedsl: '',
  /**
   * 页面的初始数据
   */
  data: {
    recommendsl: [],
    selectedsl: '',
    scrollHeight: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    context = this
    util.hotCouplets((ret, data) => {
      if (ret) {
        const bean = data.recommendsl
        util.scrollViewHeight('#candidate', (height) => {
          context.setData({
            recommendsl: bean,
            scrollHeight: height-60
          })
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

  },
  /**
   * 选择示例的上联
   */
  selectShanglianTap: function(e) {
    const text = e.currentTarget.dataset.text
    this.setData({
      selectedsl: text
    })
  },
  
  /**
   * 下联表单提交动作
   */
  getXialianSubmit: function(e) {
    const sl = e.detail.value.shanglian
    if (sl.length > 0) {
      wx.showToast({
        title: '下联加载中',
        icon: 'loading',
      });
      util.isValidChineseString(sl, (ret) => {
        console.log(ret)
        if (ret.d === true) {
          context.getXialianRequest(sl, (xialianRet) => {
            const model = JSON.stringify(xialianRet)
            wx.navigateTo({
              url: '../xl/index?model=' + model + '&sl=' + sl
            })
          })
        } else {
          wx.hideToast()
          wx.showModal({
            content: '请求失败，' + ret.errMsg,
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }
      })
    }
  },
  /**
   * 获取下联
   */
  getXialianRequest: function (shanglian, retHandler) {
    wx.request({
      url: 'https://couplet.propgm.cn/app/CoupletsWS_V2.asmx/GetXiaLian',
      data: {
        shanglian: shanglian,
        xialianLocker: '0'.repeat(shanglian.length),
        isUpdate: false
      },
      method: 'POST',
      success: (res) => {
        console.log(res)
        retHandler(res.data)
        // this.setData({
        //   swipers: res.data.result,
        // });
      },
      fail: (res) => {
        wx.showModal({
          content: '请求失败，' + ret.errMsg,
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      },
      complete: (res) => {
        wx.hideToast()
      }
    })
  },

  bindinput: function (e) {
    this.selectedsl = e.detail.value
  }
})