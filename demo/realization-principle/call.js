// call() 的实现
Function.prototype.call = function (context, ...args) {
  let _this = this

  if (context == null) {
    context = window
  }

  const type = typeof context
  if (!/^(function|object)$/.test(type)) {
    context = Object(context)
  }
  const key = Symbol('key')
  context[key] = _this
  const reuslt = context[key](...args)
  delete context[key]
  return reuslt
}

const obj = {
  name: 'win',
  getName: function () {
    return this.name
  }
}
const foo = {
  name: 'far'
}
console.log(obj.getName.call(foo))
