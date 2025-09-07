import qs from 'qs'
const baseURL = '/'
export default function request(url, options = {}) {
  url = baseURL + url

  // GET 请求处理
  !options.method ? (options.method = 'GET') : null
  if (options.hasOwnProperty('params')) {
    if (/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.method)) {
      const ask = url.includes('?') ? '&' : '?'
      url += `${ask}${qs.stringify(params)}`
    }
    delete options.params
  }

  // 合并配置项
  options = Object.assign(
    {
      // 允许跨域携带资源凭证 same-origin 同源可以 omit 都拒绝
      credentials: 'include',
      // 设置请求头
      headers: {}
    },
    options
  )
  options.headers.Accept = 'application/json'

  // token 的校验
  const token = localStorage.getItem('token')
  token && (options.headers.Authorization = token)

  // POST 请求处理
  if (/^(POST|PUT)$/i.test(options.method)) {
    !options.type ? (options.type = 'urlencoded') : null
    if (options.type === 'urlencoded') {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      options.body = qs.stringify(options.body)
    }
    if ((options.type = 'json')) {
      options.headers['Content-Type'] = 'application/json'
      options.body = JSON.stringify(options.body)
    }
  }

  return fetch(url, options)
    .then((response) => {
      if (/^(2|3)\d{2\d}$/.test(response.status)) {
        switch (response.status) {
          case 401:
            break
          case 403:
            break
          case 404:
            break
        }
        return Promise.reject(response)
      }
      return Promise.json()
    })
    .catch((error) => {
      if (!window.navigator.onLine) {
        // 断网处理
        return
      }
      return Promise.reject(error)
    })
}
