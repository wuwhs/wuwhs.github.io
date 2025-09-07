// 实现深拷贝
function getType(value) {
  if (value === null) return 'null'
  const type = typeof value
  return type === 'object' ? Object.prototype.toString.call(value).slice(8, -1).toLowerCase() : type
}

console.log(getType('aaa'))
console.log(getType(111))
console.log(getType(true))
console.log(getType(Symbol('bar')))
console.log(getType(new Date()))
console.log(getType(/\a/))
console.log(getType(new Error('err')))
console.log(getType({}))

// function deepClone(obj) {
//   const type = getType(obj)
//   // 基本类型数据
//   if (['string', 'number', 'boolean', 'null', 'symbol'].includes(type)) {
//     return obj
//   }

//   // 数组
//   if (type === 'array') {
//     return obj.map((item) => deepClone(item))
//   }

//   // 其他引用类型
//   if (type === 'object') {
//     let cobj = {}
//     Object.keys(obj).forEach((key) => {
//       cobj[key] = deepClone(obj[key])
//     })
//     return cobj
//   }
//   return obj
// }

// const obj = {
//   a: '1',
//   b: 2,
//   c: true,
//   d: new Date(),
//   e: /e/,
//   f: Symbol('bar')
// }
// const cobj = deepClone(obj)
// console.log('cobj: ', cobj)
// console.log(cobj == obj)

var deepClone = function (obj) {
  if (typeof obj !== 'object') return
  var newObj = obj instanceof Array ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}

const obj = {
  a: '1',
  b: 2,
  c: true,
  d: new Date(),
  e: /e/,
  f: Symbol('bar'),
  fn: function () {}
}
const cobj = deepClone(obj)
obj
console.log('obj: ', obj)
console.log('cobj: ', cobj)
console.log(cobj == obj)
