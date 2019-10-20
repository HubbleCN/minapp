import wepy from 'wepy'
import util from './util'
import md5 from './md5'
import api from '@/api/api'

// 因为在App onload中要使用api会导致wepy.getAccountInfoSync()报错，所以这里只能直接把appId配置好

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async (params = {}, url) => {
  const appId = wepy.getAccountInfoSync().miniProgram.appId

  const baseUrl = `${api.serverUrl}/wx/${appId}`

  url = `${baseUrl}${url}`

  // tip.loading()
  let data = params.query || {}
  let success = params.success
  let fail = params.fail
  data.sign = SIGN
  data.time = TIMESTAMP

  let token
  try {
    token = wx.getStorageSync('token') || ''
  } catch (err) {
    token = ''
  }

  let res = await wepy
    .request({
      url: url,
      method: params.method || 'GET',
      data: data,
      header: {
        'Content-Type': 'application/json; charset=UTF-8',
        token: token
      }
    })
    .then(result => {
      // 成功回调
      if (result.data.msg === 'ok' && success && typeof success === 'function') {
        success(result.data)
      }
      // 失败回调
      if (result.data.msg !== 'ok') {
        wepy.showToast({
          title: result.data.msg,
          icon: 'none',
          duration: 3000
        })
        if (fail && typeof fail === 'function') {
          fail(result.data)
        }
      }
      return result
    }, () => {
      wepy.showToast({
        title: '服务异常, 请联系管理员',
        icon: 'none',
        duration: 2000
      })
    })

    console.log(res)
  // tip.loaded()
  return res
}

module.exports = {
  wxRequest
}
