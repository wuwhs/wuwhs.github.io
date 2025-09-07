// 实现setInterval
// 用 setTimeout 循环调用自己，并且返回一个取消调用函数
function iInterval(fn, delay) {
  let isCancel = false
  let timer = null

  function intervalFn() {
    let _this = this
    if (isCancel) {
      clearTimeout(timer)
      isCancel = false
      fn.call(_this)
      return
    }
    fn.call(_this)
    timer = setTimeout(intervalFn, delay)
  }

  timer = setTimeout(() => {
    intervalFn()
  }, delay)

  return function () {
    isCancel = true
  }
}

const cancel = iInterval(() => {
  console.log(Date.now())
}, 1000)

setTimeout(() => {
  cancel()
}, 3000)
