// pages/couplet/index.js
import Couplet from '../../palette/couplet';
const util = require('../../utils/util.js')
const S = require('../../utils/simplebig.js')

Page({
  imagePath: '',
  sl: '欢辞狗守太平岁',
  xl: '意到花开富贵年',
  hp: '永绥百福',
  isReverse: false,
  isExchange: false,
  isBig5: false,
  // canvasWidth: 0,
  /**
   * 页面的初始数据
   */
  data: {
    loaded: false,
    template: {},
    isReverse: false,
    isExchange: false,
    isBig5: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.sl) {
      this.sl = options.sl
      this.xl = options.xl
      this.hp = options.hp
    }

    /*
    // 等支持自定字体了再开放
    util.loadFontFace('FZLiShu', (ret, res) => {
      if (ret) {
        console.log('下载字体成功：', res)
        this.setData({
          loaded: true,
          template: new Couplet().palette(this.hp, this.sl, this.xl),
        });
      } else {
        console.log('下载字体失败：', res)
        this.setData({
          loaded: true,
          template: new Couplet().palette(this.hp, this.sl, this.xl),
        });
      }
    })
    */

    // wx.getSystemInfo({
    //   success: function (res) {
    //     // console.info();
    //     this.canvasWidth = res.screenWidth / 750 * 640
    //   }
    // });

    // try {
    //   const res = wx.getSystemInfoSync()
    //   this.canvasWidth = res.screenWidth / 750 * 640
    // } catch (e) {
    //   // Do something when catch error
    //   this.canvasWidth = 320
    // }

    // console.info(this.canvasWidth)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // if (this.sl == undefined || this.xl == undefined) {
    //   return
    // }
    wx.showLoading()
    
    this.setData({
      loaded: false,
      isSave: false,
      template: new Couplet().palette(this.hp, this.sl, this.xl, false),
      isReverse: this.isReverse,
      isExchange: this.isExchange,
    });
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
    const url = '/pages/couplet/index?sl=' + this.sl + '&xl=' + this.xl + '&hp=' + this.hp
    console.log('url=' + url)
    return {
      path: url,
      imageUrl: this.imagePath,
      success: (res) => {
        wx.showToast({
          title: '分享成功',
          icon: 'success',
          duration: 3000
        })
      }
    }
  },
  onImgOK(e) {
    wx.hideLoading()
    this.imagePath = e.detail.path
    console.log(e)
    this.setData({
      loaded: true,
      isSave: false,
      imagePath: this.imagePath,
      isReverse: this.isReverse,
      isExchange: this.isExchange,
      // template: new Couplet().palette(this.hp, this.sl, this.xl)
    })
  },
  onImgSave(e) {
    wx.hideLoading()
    const imagePath = e.detail.path
    console.log(e)
    this.setData({
      loaded: true,
      isSave: false,
      imagePath: this.imagePath,
      isReverse: this.isReverse,
      isExchange: this.isExchange,
      // template: new Couplet().palette(this.hp, this.sl, this.xl)
    })
    wx.saveImageToPhotosAlbum({
      filePath: imagePath,
      success(res) {
        wx.showToast({
          title: '保存到相册成功',
          icon: 'success',
          duration: 3000
        })
      },
      fail(ret) {
        console.log(ret)
        wx.showModal({
          content: '保存失败，' + ret.errMsg,
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
    });
  },
  saveImage() {
    if (!this.data.loaded) {
      return
    }
    this.setData({
      loaded: false,
      isSave: true,
      template: new Couplet().palette(this.hp, this.sl, this.xl, true),
      isReverse: this.isReverse,
      isExchange: this.isExchange,
    });
  },
  home() {
    wx.navigateTo({
      url: '../article/index?type=support'
    })
  },
  reversehpTap(e) {
    wx.showLoading()

    this.isReverse = !this.isReverse

    this.hp = this.hp.split("").reverse().join("")
    this.setData({
      loaded: false,
      isSave: false,
      imagePath: this.imagePath,
      isReverse: this.isReverse,
      isExchange: this.isExchange,
      template: new Couplet().palette(this.hp, this.sl, this.xl, false)
    })
  },
  exchangedl(e) {
    wx.showLoading()

    this.isExchange = !this.isExchange
    let temp = this.sl
    this.sl = this.xl
    this.xl = temp

    this.setData({
      loaded: false,
      isSave: false,
      imagePath: this.imagePath,
      isReverse: this.isReverse,
      isExchange: this.isExchange,
      template: new Couplet().palette(this.hp, this.sl, this.xl, false)
    })
  },
  big5Tap(e) {
    this.isBig5 = !this.isBig5
    if (this.isBig5) {
      this.hp = S.s2t(this.hp)
      this.sl = S.s2t(this.sl)
      this.xl = S.s2t(this.xl)
    } else {
      this.hp = S.t2s(this.hp)
      this.sl = S.t2s(this.sl)
      this.xl = S.t2s(this.xl)
    }

    this.setData({
      loaded: false,
      isSave: false,
      imagePath: this.imagePath,
      isBig5: this.isBig5,
      template: new Couplet().palette(this.hp, this.sl, this.xl, false)
    })
  }
})