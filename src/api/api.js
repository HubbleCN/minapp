import {
  wxRequest
} from '@/utils/wxRequest'
import {
  uploadRequest
} from '@/utils/uploadRequest'

const serverUrl = `http://192.168.1.4:8082/mpweb/`

const uploadUrl = `${serverUrl}file/upload`

const env = '-test' // -dev 或者 -test
// const apiMall = 'http://localhost:8080/'

// 上传
const uploadFile = (params) => uploadRequest(params)

const resolveShareCode = (params) => wxRequest(params, `/route/resolveShareCode`)

// 微信用户登录
const wxLogin = (params) => wxRequest(params, `/user/login`)
// 用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, `/user/getUserInfo`)
// 发布线路信息
const releaseRoute = (params) => wxRequest(params, `/route/release`)
// 发布数据准备
const releasePrepare = (params) => wxRequest(params, `/route/release/prepare`)
// 检查用户信息和车辆信息是否齐全
const checkReleasePermission = (params) => wxRequest(params, `/route/checkReleasePermission`)
// 跟车需要联系人和联系方式
const checkFollowPermission = (params) => wxRequest(params, `/route/checkFollowPermission`)
// 拼车数据准备
const followPrepare = (params) => wxRequest(params, `/route/follow/prepare`)
// 乘客拼车
const followRoute = (params) => wxRequest(params, `/route/follow`)
// 首页获取推荐路线
const getRouteRecommendation = (params) => wxRequest(params, `/route/home/recommendation`)
// 我发布的行程
const getMyRelease = (params) => wxRequest(params, `/route/my/release`)
// 我参与的行程
const getMyFollow = (params) => wxRequest(params, `/route/my/follow`)

// 根据ID获取路线详情
const getRouteById = (params) => wxRequest(params, null)

// 根据ID获取路线详情
const getAccountOverview = (params) => wxRequest(params, `/account/overview`)

// 保存用户信息
const saveUserInfo = (params) => wxRequest(params, `/account/userInfo/edit`)
// 获取当前的用户详细信息
const getCurrentUserInfo = (params) => wxRequest(params, `/account/userInfo/getCurrent`)

// 保存车辆信息
const saveCarInfo = (params) => wxRequest(params, `/account/carInfo/edit`)
// 获取当前用户的车辆信息
const getCurrentCarInfo = (params) => wxRequest(params, `/account/carInfo/getCurrent`)

export default {
  serverUrl,
  uploadUrl,
  resolveShareCode,
  wxLogin,
  releaseRoute,
  releasePrepare,
  getRouteRecommendation,
  getRouteById,
  getAccountOverview,
  getUserInfo,
  saveUserInfo,
  saveCarInfo,
  uploadFile,
  getCurrentUserInfo,
  getCurrentCarInfo,
  checkReleasePermission,
  checkFollowPermission,
  followPrepare,
  followRoute,
  getMyRelease,
  getMyFollow
}
