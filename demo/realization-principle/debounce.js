// 防抖的实现
// 对于频繁事件触发，在特定的时间段里没有触发，执行代码一次
// el.onscroll=debounce(fn, 1000)

/**
 * 防抖函数
 * @param {Function} func 回调函数
 * @param {Number} wait 等待时长
 * @param {Boolean} immediate 是否立即执行
 * @returns 函数执行结果
 */
function debounce(func, wait, immediate) {
  let timer = null
  let result
  const debounced = function () {
    const context = this
    const args = arguments
    if (timer) clearTimeout(timer)

    // 立刻执行
    if (immediate) {
      let callNow = !timer
      timer = setTimeout(function () {
        timer = null
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      timer = setTimeout(function () {
        result = func.apply(context, args)
      }, wait)
    }

    return result
  }

  // 取消防抖
  debounced.cancel = function () {
    clearTimeout(timer)
    timer = null
  }

  return debounced
}
