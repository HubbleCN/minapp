import wepy from 'wepy'
import util from './util'
import md5 from './md5'
import tip from './tip'

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async (params = {}, url) => {
  // tip.loading()
  let data = params.query || {}
  data.sign = SIGN
  data.time = TIMESTAMP

  let token
  try { token = wx.getStorageSync('token') || '' } catch (err) { token = '' }

  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': token
    }
  })
  // tip.loaded()

  if (res.data && res.data.msg !== 'ok') {
    wx.showToast({
      title: res.data.msg,
      icon: 'none',
      duration: 2000
    })
  }
  return res
}

module.exports = {
  wxRequest
}
