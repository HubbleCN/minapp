import wepy from 'wepy'
import api from '@/api/api'
// 因为在App onload中要使用api会导致wepy.getAccountInfoSync()报错，所以这里只能直接把appId配置好

// const API_SECRET_KEY = 'www.mall.cycle.com'
// const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const uploadRequest = async (params = {}) => {
  let success = params.success
  let fail = params.fail
  let final = params.final
  // data.sign = SIGN
  // data.time = TIMESTAMP
  let upload = function() {
    return new Promise((resolve, reject) => {
        wepy.uploadFile({
            url: api.uploadUrl, // 仅为示例，非真实的接口地址
            filePath: params.filePath,
            name: 'file',
            header: {
              token: wx.getStorageSync('token') || ''
            }
          })
          .then(res => {
            console.log('====================================')
            console.log(res)
            console.log('====================================')
            if (res.statusCode !== 200) {
              wepy.showToast({
                title: `服务异常, ${res.statusCode}`,
                icon: 'none',
                duration: 2000
              })
              reject(res)
              return
            }

            const data = JSON.parse(res.data)
            // 成功回调
            if (data.code === '1' && success && typeof success === 'function') {
              success(data)
            }

            // 失败回调
            if (data.code !== '1') {
              // 300005 token无效
              wepy.showToast({
                title: data.msg,
                icon: 'none',
                duration: 3000
              })
              if (fail && typeof fail === 'function') {
                fail(data)
              }
            }
            if (final && typeof final === 'function') {
              final(data)
            }
            resolve(res)
          }, error => {
            wepy.showToast({
              title: '服务异常, 请联系管理员',
              icon: 'none',
              duration: 2000
            })
            if (final && typeof final === 'function') {
              final(error)
            }
            reject(error)
          })
    })
  }
  return upload()
}

module.exports = {
  uploadRequest
}
