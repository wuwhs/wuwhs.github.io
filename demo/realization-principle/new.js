// 参考 https://juejin.cn/post/6844903704663949325
function myNew(Fn) {
  // ES6 中 new.target 指向构造函数
  myNew.target = Fn

  // const obj = {}
  // obj.__proto__=Fn.prototype
  // 创建一个对象，对象原型指向构造函数原型
  const obj = Object.create(Fn.prototype)

  // 调用构造函数，并将this绑定到该对象
  const result = Fn.apply(obj, [...arguments])

  // 构造函数执行返回值，如果是非引用类型，返回创建的对象，否则直接返回构造函数的返回值
  const type = typeof result
  return (type === 'object' && result !== null) || type === 'function' ? res : obj
}

function Student(name, age) {
  this.name = name
  this.age = age
}
Student.prototype.getName = function () {
  return this.name
}
const student = myNew(Student, 'wuwhs', 123)
console.log(student.__proto__ === Student.prototype) // true
console.log(Object.getPrototypeOf(student) === Student.prototype) // true
console.log(student)

// 金额转千分位
const formatPrice = (number) => {
  const [integer, decimal = ''] = `${number}`.split('.')

  return integer.replace(/\B(?=(\d{3})+$)/g, ',') + (decimal ? '.' + decimal : '')
}

console.log(formatPrice(123456789.3343)) // 123,456,789.3343
