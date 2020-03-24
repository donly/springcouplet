// pages/xl/index.js
'use strict'

const util = require('../../utils/util.js')
let context

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
    const bean = JSON.parse(options.model)
    console.log(bean)
    if (bean.d == null) {
      wx.showModal({
        title: '系统对不到下联',
        content: '请您手动输入下联或更新上联',
        showCancel: false
      })
      context.setData({
        sl: options.sl
      });
      return;
    }

    const find = '/'
    var re = new RegExp(find, 'g');
    const sl = bean.d.XialianSystemGeneratedSets[0].SegmentPattern.replace(re, '')

    // 获取所有下联
    let xlArr = []
    let wellknownSets = bean.d.XialianWellKnownSets
    if (wellknownSets !== null) {
      for (let i=0; i<wellknownSets.length; i++) {
        const xls = wellknownSets[i]
        xlArr = xlArr.concat(xls.XialianCandidates)
      }
    }
    
    let systemGeneratedSets = bean.d.XialianSystemGeneratedSets
    if (systemGeneratedSets !== null) {
      for (let i = 0; i < systemGeneratedSets.length; i++) {
        const xls = systemGeneratedSets[i]
        xlArr = xlArr.concat(xls.XialianCandidates)
      }
    }

    util.scrollViewHeight('#candidate', (height) => {
      context.setData({
        scrollHeight: height - 60,
        model: bean,
        sl: sl,
        xlArr: xlArr,
        selectedxl: xlArr[0]
      });
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
   * 选择下联点击
   */
  selectXialianTap: function(e) {
    const text = e.currentTarget.dataset.text
    this.setData({
      selectedxl: text
    })
  },
  /**
   * 获取横批表单提交
   */
  getHangpiSubmit: function(e) {
    const sl = e.detail.value.shanglian
    const xl = e.detail.value.xialian
    if (sl.length > 0 && xl.length > 0) {
      util.isValidChineseString(xl, (ret) => {
        console.log(ret)
        if (ret.d === true) {
          context.getHangpiRequest(sl, xl, (hangpiRet) => {
            const model = JSON.stringify(hangpiRet)
            wx.navigateTo({
              url: '../hp/index?model=' + model + '&sl=' + sl + '&xl=' + xl
            })
          })
        }
      })
    }
    else {
      wx.showModal({
        content: '请点击选择一个下联',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
  },
  /**
   * 获取横批请求
   */
  getHangpiRequest: function (shanglian, xialian, retHandler) {
    wx.request({
      url: 'https://duilian.msra.cn/app/CoupletsWS_V2.asmx/GetHengPi',
      data: {
        shanglian: shanglian,
        xialian: xialian
      },
      method: 'POST',
      success: (res) => {
        // console.log(res)
        retHandler(res.data)
        // this.setData({
        //   swipers: res.data.result,
        // });
      }
    })
  }
})