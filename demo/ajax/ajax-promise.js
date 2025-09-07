// 基于 XMLHttpRequest 对象 + Promise 的封装实现
function ajax(options) {
  const defaultOptions = {
    url: '',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    data: null
  }
  options = { ...defaultOptions, ...options }

  const { method, headers } = options
  const isGet = /(GET|DELETE|OPIONS|HEAD)/i.test(method)
  let url = options.url
  let data = options.data
  if (isGet) {
    url = `${url.includes('?') ? '&' : '?'}` + qs.stringify(data)
    data = null
  }

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && /^2\d{2}/.test(xhr.status)) {
        const response = xhr.responseText
        resolve(response)
      }
      if (!/^2\d{2}/.test(xhr.status)) {
        const response = xhr.responseText
        reject(response)
      }
    }
    xhr.onerror = function (e) {
      reject(e)
    }
    for (key of Object.keys(headers)) {
      xhr.setRequestHeader(key, headers[key])
    }
    xhr.open(method, url)
    xhr.send(data)
  })
}

;['get', 'delete', 'options', 'head']
  .forEach((method) => {
    ajax[method] = function (url, config) {
      ajax({ url, method, ...config })
    }
  })

  [('post', 'put')].forEach((method) => {
    ajax[method] = function (url, data, config) {
      ajax({ url, method, data, ...config })
    }
  })
