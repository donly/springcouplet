export default class CoupletImage {
  palette(h,s,x, isSave) {
    return ({
      width: '640rpx',
      height: isSave ? '1000rpx' : '867rpx',
      background: '#fff',
      views: isSave ? [
        templateImage(),
        hp(h),
        sl(s),
        xl(x),
        sharedQR(),
        tips(),
        tips2(),
      ] : [
          templateImage(),
          hp(h),
          sl(s),
          xl(x),
        ],
    });
  }
}

const common = {
  fontSize: '44rpx',
  color: '#f2d7a8',
  fontWeight: 'bold',
};

function templateImage() {
  return ({
    type: 'image',
    url: '/palette/template.png',
    model: 'scaleToFill',
    css: {
      width: '640rpx',
      height: '853rpx',
    }
  })
}

function hp(text) {
  return ({
    type: 'text',
    text: text,
    css: [{
      fontFamily: 'FZLiShu',
      top: `158rpx`,
      maxLines: 1,
    }, common, { left: '228rpx' }],
  })
}
function sl(text) {
  return ({
    type: 'text',
    text: text,
    css: [{
      fontFamily: 'FZLiShu',
      width: '48rpx',
      top: `336rpx`,
    }, common, { fontSize: '48rpx', left: '72rpx', lineHeight: '58rpx' }],
  });
}
function xl(text) {
  return ({
    type: 'text',
    text: text,
    css: [{
      fontFamily: 'FZLiShu',
      width: '48rpx',
      top: `336rpx`,
    }, common, { fontSize: '48rpx', right: '72rpx', lineHeight: '58rpx' }],
  });
}

function tips() {
  return ({
    type: 'text',
    text: '长按识别小程序码',
    css: [{
      width: '230rpx',
      bottom: `54rpx`,
    }, common, { fontSize: '28rpx', left: '22rpx', color: '#9e4547' }],
  });
}

function tips2() {
  return ({
    type: 'text',
    text: '分享您的春联祝福',
    css: [{
      width: '230rpx',
      bottom: `54rpx`,
    }, common, { fontSize: '28rpx', right: '2rpx', color: '#9e4547' }],
  });
}

function sharedQR() {
  return ({
    type: 'image',
    url: '/palette/qrcode.png',
    model: 'scaleToFill',
    css: {
      width: '128rpx',
      height: '128rpx',
      bottom: '4rpx',
      left: '258rpx',
    }
  })
}
