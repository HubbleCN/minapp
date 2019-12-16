import {
  wxRequest
} from '@/utils/wxRequest'
import {
  uploadRequest
} from '@/utils/uploadRequest'

const serverUrl = `http://192.168.1.4:8082/mpweb`

const uploadUrl = `${serverUrl}/file/upload`

const env = '-test' // -dev 或者 -test
// const apiMall = 'http://localhost:8080/'

// 上传
const uploadFile = (params) => uploadRequest(params)

// 微信用户登录
const wxLogin = (params) => wxRequest(params, `/user/login`)
// 用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, `/user/getUserInfo`)
// 发布线路信息
const releaseRoute = (params) => wxRequest(params, `/route/release`)
// 首页获取推荐路线
const getRouteRecommendation = (params) => wxRequest(params, `/route/home/recommendation`)

// 根据ID获取路线详情
const getRouteById = (params) => wxRequest(params, null)

// 根据ID获取路线详情
const getAccountOverview = (params) => wxRequest(params, `/account/overview`)

// 保存用户信息
const saveUserInfo = (params) => wxRequest(params, `/account/userInfo/edit`)

// 保存车辆信息
const saveCarInfo = (params) => wxRequest(params, `/account/carInfo/edit`)

export default {
  serverUrl,
  uploadUrl,
  wxLogin,
  releaseRoute,
  getRouteRecommendation,
  getRouteById,
  getAccountOverview,
  getUserInfo,
  saveUserInfo,
  saveCarInfo,
  uploadFile
}
