// 实现instanceof
// 思想：验证对象的原型往上找，直到和构造函数的原型相等
// target.__proto__ === origin.prototype
function iinstanceof(target, origin) {
  const type = typeof target
  if (type !== 'object' || type === null) {
    console.error('target should be object')
    return
  }
  if (typeof origin !== 'function') {
    console.error('origin should be funciton')
    return
  }
  let t = target
  const proto = origin.prototype
  while (t) {
    t = Object.getPrototypeOf(t)
    if (t === proto) {
      return true
    }
  }
  return false
}

console.log(iinstanceof([1], String))
