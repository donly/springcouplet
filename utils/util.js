/**
   * 验证是否有效的中文
   */
const isValidChineseString = (string, retHandler) => {
  wx.request({
    url: 'https://couplet.propgm.cn/app/CoupletsWS_V2.asmx/IsValidChineseString',
    data: {
      inputString: string
    },
    method: 'POST',
    success: (res) => {
      // console.log(res)
      retHandler(res.data)
    },
    fail: (ret) => {
      retHandler(ret)
    }
  })
}

/**
 * 获取 token
 */
const tokenRequest = (sl, xl, hp, retHandler) => {
  const url = 'https://couplet.propgm.cn/app/RedirectPage.aspx'

  wx.request({
    url: url,
    data: {
      S: sl,
      X: xl,
      H: hp,
    },
    method: 'GET',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: (res) => {
      let html = res.data
      const find = "(action)\\s*=\\s*(([\"'])(.*?)\\3|([^>\\s]*)(?=\\s|\\/>))(?=[^<]*>)"
      var re = new RegExp(find, 'g');
      const action = html.match(re)
      const k = action[0].split('K=')
      const key = k[k.length - 1]
      retHandler(key.slice(0, -1))
    },
    fail: (res) => {
      console.log(res.errMsg)
      const k = res.errMsg.split('K=')
      console.log('k=', k)
      const key = k[k.length - 1]
      retHandler(key)
    }
  })
}

const loadFontFace = (fontname, retHandler) => {
  if (!wx.loadFontFace) {
    retHandler(false, null)
    return
  }

  wx.loadFontFace({
    family: fontname,
    source: 'url("https://weechun.github.io/fonts/fzls.ttf")',
    success(res) {
      console.log('success=', res.status)
      retHandler(true, res)
    },
    fail: function (res) {
      console.log('fail=', res.status)
      retHandler(false, res)
    },
    complete: function (res) {
      console.log('complete, ' + res.status)
    }
  });
}

const requestHotCouplets = function(retHandler) {
  const url = 'https://www.propgm.cn/api/couplet/hots.json'

  wx.request({
    url: url,
    method: 'GET',
    success: (res) => {
      let json = res.data
      retHandler(true, json)
    },
    fail: (res) => {
      retHandler(false, res)
    }
  })
}

const scrollViewHeight = (fromSelector, handler) => {
  wx.getSystemInfo({
    success: function (res) {
      console.info(res.windowHeight);
      let height = res.windowHeight;
      wx.createSelectorQuery().selectAll(fromSelector).boundingClientRect(function (rects) {
        rects.forEach(function (rect) {
          handler(res.windowHeight - rect.bottom)
        })
      }).exec();
    }
  });
}
module.exports = {
  isValidChineseString: isValidChineseString,
  tokenRequest: tokenRequest,
  loadFontFace: loadFontFace,
  hotCouplets: requestHotCouplets,
  scrollViewHeight: scrollViewHeight
}
