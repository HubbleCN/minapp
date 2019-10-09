function getCurrentTime() {
  let keep = ''
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s
  return keep // 20160614134947
}

function objLength(input) {
  let type = toString(input)
  let length = 0
  if (type !== '[object Object]') {
    // throw '输入必须为对象{}！'
  } else {
    for (let key in input) {
      if (key !== 'number') {
        length++
      }
    }
  }
  return length
}
// 验证是否是手机号码
function vailPhone(number) {
  let flag = true
  let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
  if (number.length !== 11 || !myreg.test(number)) {
    flag = false
  }
  return flag
}
// 验证是否西班牙手机(6开头 9位数)
function ifSpanish(number) {
  let flag = true
  let myreg = /^([6|7|9]{1}(\d+){8})$/
  if (number.length !== 9 || !myreg.test(number)) {
    flag = false
  }
  return flag
}
// 浮点型除法
function div(a, b) {
  let c, d, e, f
  try {
    e = a.toString().split('.')[1].length
  } catch (g) { }
  try {
    f = b.toString().split('.')[1].length
  } catch (g) {}
  // [eslint] Return statement should not contain assignment. (no-return-assign)
  c = Number(a.toString().replace('.', ''))
  d = Number(b.toString().replace('.', ''))
  return mul(c / d, Math.pow(10, f - e))
}
// 浮点型加法函数
function accAdd(arg1, arg2) {
  let r1, r2, m
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return ((arg1 * m + arg2 * m) / m).toFixed(2)
}
// 浮点型乘法
function mul(a, b) {
  let c = 0
  let d = a.toString()
  let e = b.toString()
  try {
    c += a.toString().split('.')[1].length
  } catch (f) { }
  try {
    c += b.toString().split('.')[1].length
  } catch (f) { }
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
}

//  遍历对象属性和值
function displayProp(obj) {
  let names = ''
  for (let name in obj) {
    names += name + obj[name]
  }
  return names
}
//  去除字符串所有空格
function sTrim(text) {
  return text.replace(/\s/g, '')
}
// 去除所有:,英文冒号
function replaceColon(txt) {
  return txt.replace(/:/g, '')
}
// 转换星星分数
function convertStarArray(score) {
  // 1 全星,0 空星,2半星
  let arr = []
  for (let i = 1; i <= 5; i++) {
    if (score >= i) {
      arr.push(1)
    } else if (score > i - 1 && score < i + 1) {
      arr.push(2)
    } else {
      arr.push(0)
    }
  }
  return arr
}

function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  const hour = parseInt(time / 3600, 10)
  time %= 3600
  const minute = parseInt(time / 60, 10)
  time = parseInt(time % 60, 10)
  const second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

function fib(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

function formatLeadingZeroNumber(n, digitNum = 2) {
  n = n.toString()
  const needNum = Math.max(digitNum - n.length, 0)
  return new Array(needNum).fill(0).join('') + n
}

function formatDateTime(date, withMs = false) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const ms = date.getMilliseconds()

  let ret = [year, month, day].map(value => formatLeadingZeroNumber(value, 2)).join('-') +
    ' ' + [hour, minute, second].map(value => formatLeadingZeroNumber(value, 2)).join(':')
  if (withMs) {
    ret += '.' + formatLeadingZeroNumber(ms, 3)
  }
  return ret
}

function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i], 10)
    const num2 = parseInt(v2[i], 10)

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

function debug(v) {
  console.log(JSON.stringify(v))
}

module.exports = {
  getCurrentTime: getCurrentTime,
  objLength: objLength,
  displayProp: displayProp,
  sTrim: sTrim,
  replaceColon: replaceColon,
  vailPhone: vailPhone,
  ifSpanish: ifSpanish,
  div: div,
  mul: mul,
  accAdd: accAdd,
  convertStarArray: convertStarArray,
  formatTime,
  formatLocation,
  fib,
  formatDateTime,
  compareVersion,
  debug
}
