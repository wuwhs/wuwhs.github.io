function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

/*
// 实现call
Function.prototype.call1 = function (context, ...args) {
  const key = Symbol('key')
  const fn = this
  const type = typeof context
  if (!/^(object|function)$/.test(type)) {
    context = Object(context)
  }
  context[key] = fn
  const result = context[key](...args)
  delete context[key]
  return result
}

function fun() {
  console.log('this: ', this)
}
fun.call1('1')
 */

/*
// 实现浅拷贝
function shadowClone(data) {
  const type = getType(data)
  if (type === 'array') {
    return [...data]
  }
  if (type === 'object') {
    return { ...data }
  }
  return type
}
*/

/*
// 实现深拷贝
function deepClone(data) {
  const type = typeof data
  if (type !== 'object') return data
  const newData = Array.isArray(data) ? [] : {}
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      newData[key] = deepClone(data[key])
    }
  }
  return newData
}

const obj = {
  a: 'a',
  b: [1, 2, 3],
  c: function () {},
  d: Symbol(),
  e: new Date()
}
const obj1 = deepClone(obj)
obj.a = 'aaa'
obj.b.push(4)
console.log('obj: ', obj)
console.log('obj: ', obj1)
console.log('equal c: ', obj.c === obj1.c)
console.log('equal e: ', obj.e === obj1.e)
*/

/*
// 发布-订阅模式
class EventEmitter {
  constructor() {
    this.events = {}
  }
  on(key, cb) {
    const { events } = this
    if (!events[key]) {
      events[key] = []
    }
    events[key].push(cb)
  }
  emmit(key, ...args) {
    const { events } = this
    if (events[key]) {
      events[key].forEach((cb) => {
        cb.apply(this, args)
      })
    }
  }
  off(key, cb) {
    const { events } = this
    if (events[key]) {
      const index = events[key].findIndex((item) => item === cb)
      events[key].splice(index, 1)
    }
  }
}

const bus = new EventEmitter()
const fn = () => {
  console.log('add')
}
bus.on('add', fn)
bus.emmit('add')
bus.off('add', fn)
bus.emmit('add')
*/

/*
// 截流：频繁触发，只在特定的时间间隔执行一次代码
function throttle(fn, time) {
  let canRun = true
  return function (...args) {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(args)
      canRun = true
    }, time)
  }
}

setInterval(
  throttle(function () {
    console.log('now: ', Date.now())
  }, 1000),
  300
)
*/

/*
// 防抖：频繁触发，在特定时间段里没有触发，执行一次代码
function debounce(fn, time) {
  let last = Date.now()
  return function (...args) {
    let curr = Date.now()
    if (curr - last >= time) {
      fn.apply(args)
    }
    last = curr
  }
}

setInterval(
  debounce(function () {
    console.log('now: ', Date.now())
  }, 500),
  1000 * Math.random()
)
*/

/*
// bind 的实现
Function.prototype.bind = function (context, ...outArgs) {
  const fn = this
  return function proxy(...innerArgs) {
    fn.apply(context, [...outArgs, ...innerArgs])
  }
}
*/

/*
class Subject {
  constructor() {
    this.subs = []
  }
  add(observer) {
    this.subs.push(observer)
  }
  remove(observer) {
    const index = this.subs.findIndex((item) => item === observer)
    if (index >= 0) {
      this.subs.splice(index, 1)
    }
  }
  notify() {
    this.subs.forEach((item) => {
      item.update()
    })
  }
}

class Observer {
  constructor(value) {
    this.value = value
  }
  update() {
    console.log('newVal: ', this.value)
  }
}

const sub = new Subject()
const ob1 = new Observer(1)
const ob2 = new Observer(2)
sub.add(ob1)
sub.add(ob2)
setTimeout(() => {
  sub.notify()
})
*/
/*
function call(context, ...args) {
  const type = typeof context
  if (!/^(object|function)$/.test(type)) {
    context = Object(context)
  }
  const fn = this
  const key = Symbol('key')
  context[key] = fn
  const result = context[key](...args)
  delete context[key]
  return result
}
*/

/*
// 实现 Promise.all()
function promiseAll(arr) {
  const len = arr.length
  let count = 0
  const result = []
  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      arr[i]
        .then((res) => {
          result[i] = res
          count++
          if (count >= len) {
            resolve(result)
          }
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}

function asyncFn() {
  return new Promise((resolve) => {
    const delay = Math.random() * 1000
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}

promiseAll([asyncFn(), asyncFn(), asyncFn()]).then((res) => {
  console.log('res: ', res)
})
*/
/*
Function.prototype.call1 = function (context, ...args) {
  const type = typeof context
  if (/^(object|function)$/.test(type)) {
    context = Object(context)
  }
  const key = Symbol('key')
  const fn = this
  context[key] = fn
  const result = context[key](args)
  delete context[key]
  return result
}

const obj = {
  fn() {
    console.log('this: ', this)
  }
}
obj.fn.call1({ a: 1 })
*/
/*
function deepClone(data) {
  const type = typeof data
  if (type !== 'object' || data === null) return data
  const newData = Array.isArray(data) ? [] : {}
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      newData[key] = deepClone(data[key])
    }
  }
  return newData
}

const data = {
  a: 1,
  b: 's',
  c: function () {},
  d: { e: 'e' }
}
console.log('copyData: ', deepClone(data))
*/

class EventEmitter {
  constructor() {
    this.events = {}
  }
  on(key, cb) {
    const { events } = this
    if (!events[key]) {
      events[key] = []
    }
    events[key].push(cb)
  }
  emit(key, ...args) {
    const { events } = this
    if (events[key]) {
      events[key].forEach((cb) => {
        cb.call(this, ...args)
      })
    }
  }
  off(key, cb) {
    const { events } = this
    if (events[key]) {
      events[key] = events[key].filter((item) => item !== cb)
    }
  }
}
