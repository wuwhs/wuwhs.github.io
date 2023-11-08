// 截流的实现
// el.onscroll=throttle(func, 1000)
/**
function throttle(func, wait) {
  let context
  let args
  let result
  let timer = null
  let prev = 0

  const later = function () {
    prev = Date.now()
    timer = null
    func.apply(context, args)
  }

  const throttled = function () {
    let now = Date.now()
    // 下次触发 func 剩余的时间
    let remaining = wait - (now - prev)
    context = this
    args = arguments

    // 如果没有剩余时间
    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      prev = now
      func.apply(context, args)
    } else if (!timer) {
      timer = setTimeout(later, remaining)
    }
  }
  return throttled
}
*/

// 简洁理解版
// 函数节流: 频繁触发，但只在特定的时间内才执行一次代码
function throttle(func, wait) {
  let canRun = true
  return function (...args) {
    if (!canRun) {
      return
    }
    canRun = false
    setTimeout(() => {
      func.apply(this, args)
      canRun = true
    }, wait)
  }
}
