// bind 的实现
Function.prototype.bind = function (context, ...args) {
  const _this = this
  return function proxy(...params) {
    return _this.apply(context, args.concat(params))
  }
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

console.log(obj.getName.bind(foo)())
