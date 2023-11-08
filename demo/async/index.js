/*async function async1() {
  await async2()
  console.log('A')
}

async function async2() {
  return new Promise((resolve, reject) => {
    resolve()
  })
  // return {
  //   then(cb) {
  //     console.log('then')
  //     cb()
  //   }
  // }
}

async1()

new Promise((resolve) => {
  console.log('B')
  resolve()
})
  .then(() => {
    console.log('C')
  })
  .then(() => {
    console.log('D')
  })
  .then(() => {
    console.log('E')
  })

// 最终结果👉: B C D A
*/

// 5 1 3 4 7 11 8 9 aaa 10 6

/*
async function async1() {
  console.log('1')
  await async2()
  console.log('AAA')
}

async function async2() {
  console.log('3')
  return new Promise((resolve, reject) => {
    resolve()
    console.log('4')
  })
}

console.log('5')

setTimeout(() => {
  console.log('6')
}, 0)

async1()

new Promise((resolve) => {
  console.log('7')
  resolve()
})
  .then(() => {
    console.log('8')
  })
  .then(() => {
    console.log('9')
  })
  .then(() => {
    console.log('10')
  })
console.log('11')
*/

// class Sleep {
//   constructor(timeout) {
//     this.timeout = timeout
//   }
//   then(resolve, reject) {
//     const startTime = Date.now()
//     console.log('startTime: ', startTime)
//     setTimeout(() => resolve(Date.now() - startTime), this.timeout)
//   }
// }

// ;(async () => {
//   const actualTime = await new Sleep(1000)
//   console.log(actualTime)
// })()

// async function test() {
//   console.log(1)
//   await new Promise((resolve, reject) => {
//     resolve()
//   })
//   console.log(2)
// }

// test()
// console.log(3)

// Promise.resolve()
//   .then(() => console.log(4))
//   .then(() => console.log(5))
//   .then(() => console.log(6))
//   .then(() => console.log(7))

// // 最终结果👉: 1 3 2 4 5 6 7

/*
function func() {
  console.log(2)

  return Promise.resolve()
    .then(() => console.log(5))
    .then(() => console.log(6))
    .then(() => console.log(7))
}

async function test() {
  console.log(1)
  await func()
  console.log(3)
}

test()
console.log(4)

new Promise((resolve) => {
  console.log('B')
  resolve()
})
  .then(() => {
    console.log('C')
  })
  .then(() => {
    console.log('D')
  })

// 1 2 4 B C D 5 6 7 3
*/

/*
// async 函数返回的是Promise， 函数执行完，并且Promise状态变更完成后，再等待2个then（微任务）时长后继续以下执行
async function testC() {
  // return new Promise((resolve, reject) => {
  //   resolve()
  // })
  return Promise.resolve('then').then(console.log).then(console.log)
}

testC().then(() => console.log(1))
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3))
  .then(() => console.log(4))
  .then(() => console.log(5))

// then 2 undefined 3 4 1 5
*/

/*
async function baz() {
  // console.log('baz')
  // return 'baz'

  // return {
  //   then(resolve) {
  //     console.log('baz')
  //     resolve()
  //   }
  // }

  return new Promise((resolve) => {
    console.log('baz')
    resolve()
  })
}

async function foo() {
  await baz()
  console.log('a')
}
foo().then(() => console.log('b'))
Promise.resolve()
  .then(() => console.log('c'))
  .then(() => console.log('d'))
  .then(() => console.log('e'))
  .then(() => console.log('f'))
// await baz函数return是普通值 输出结果是baz a c b d e
// await baz函数return是thenable 输出结果是 baz c a d b e
// await baz函数return是Promise 输出结果 baz c d a e b
*/

/*
const first = () =>
  new Promise((resolve, reject) => {
    console.log(3)
    let p = new Promise((resolve, reject) => {
      console.log(7)
      setTimeout(() => {
        console.log(5)
        resolve(6)
        console.log(p)
      }, 0)
      resolve(1)
    })
    resolve(2)
    p.then((arg) => {
      console.log(arg)
    })
  })
first().then((arg) => {
  console.log(arg)
})
console.log(4)

// 3 7 4 1 2 5 Promise{1}
*/

/*
const async1 = async () => {
  console.log('async1')
  setTimeout(() => {
    console.log('timer1')
  }, 2000)
  await new Promise((resolve) => {
    console.log('promise1')
  })
  console.log('async1 end')
  return 'async1 success'
}
console.log('script start')
async1().then((res) => console.log(res))
console.log('script end')
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .catch(4)
  .then((res) => console.log(res))
setTimeout(() => {
  console.log('timer2')
}, 1000)
// script start async1 promise1 script end 1 timer2 timer1
*/

/*
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('resolve3')
    console.log('timer1')
  }, 0)
  resolve('resovle1')
  resolve('resolve2')
})
  .then((res) => {
    console.log(res)
    setTimeout(() => {
      console.log(p1)
    }, 1000)
    return 1
  })
  .finally((res) => {
    console.log('finally', res)
  })
// resovle1 finally undefined timer1 Promise{undefined}
*/

/*
const arr = [1, 2, 3]
arr.reduce((prev, curr) => {
  return prev.then(
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(curr)
        resolve()
      }, 1000)
    })
  )
}, Promise.resolve())
*/

/*
// 实现红绿灯交替进行
function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}

const handleExcute = (fn) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn()
      resolve()
    }, 1000)
  })
}

const interval = () => {
  handleExcute(red)
    .then(() => handleExcute(green))
    .then(() => handleExcute(yellow))
    .then(() => interval())
}
interval()
*/

/*
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})
const promise2 = promise1.then((res) => {
  console.log(res)
})
console.log('1', promise1)
console.log('2', promise2)
// promise1 1 Promise{'resolve1'} 2 Promise{<padding>}
*/

/*
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1)
    resolve('success')
  })
fn().then((res) => {
  console.log(res)
})
console.log('start')
// 1 start success
*/

/*
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1)
    resolve('success')
  })
console.log('start')
fn().then((res) => {
  console.log(res)
})
// start 1 success
*/

/*
console.log('start')
setTimeout(() => {
  console.log('time')
})
Promise.resolve().then(() => {
  console.log('resolve')
})
console.log('end')
// start end resolve time
*/

/*
const promise = new Promise((resolve, reject) => {
  console.log(1)
  setTimeout(() => {
    console.log('timerStart')
    resolve('success')
    console.log('timerEnd')
  }, 0)
  console.log(2)
})
promise.then((res) => {
  console.log(res)
})
console.log(4)
// 1 2 4 timerStart timerEnd success
*/

/*
setTimeout(() => {
  console.log('timer1')
  setTimeout(() => {
    console.log('timer3')
  }, 0)
}, 0)
setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')
// start timer1 timer2 timer3
*/

/*
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')
// start timer1 promise timer2
*/

/*
Promise.resolve().then(() => {
  console.log('promise1')
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
})
const timer1 = setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('start')
// start promise1 timer1 promise2 timer2
*/

/*
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)
// promise1 Promise{<padding>} promise2 Promise{<padding>} Error 
*/

/*
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
    console.log('timer1')
  }, 1000)
  console.log('promise1里的内容')
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('timer2')
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)
// promise1里的内容 promise1 Promise{<padding>} promise2 Promise{<padding>} Error timer1 timer2 promise1 Promise{success} promise2{<rejet>error}
*/

/*
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
    console.log('timer1')
  }, 1000)
  console.log('promise1里的内容')
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('timer2')
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)
*/

/*
const promise = new Promise((resolve, reject) => {
  resolve('success1')
  reject('error')
  resolve('success2')
})
promise
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
// then: success1
*/

/*
const promise = new Promise((resolve, reject) => {
  reject('error')
  resolve('success2')
})
promise
  .then((res) => {
    console.log('then1: ', res)
  })
  .then((res) => {
    console.log('then2: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
  .then((res) => {
    console.log('then3: ', res)
  })
// catch: error then3: undefined
*/

/*
Promise.resolve(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    return 3
  })
  .then((res) => {
    console.log(res)
  })
// 1 2
*/

/*
Promise.reject(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    console.log(err)
    return 3
  })
  .then((res) => {
    console.log(res)
  })
// 1 3
*/

/*
// Promise状态一旦变更，后续then或者reject都能直接拿到该值
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('timer')
    resolve('success')
  }, 1000)
})
const start = Date.now()
promise.then((res) => {
  console.log(res, Date.now() - start)
})
promise.then((res) => {
  console.log(res, Date.now() - start)
})
// timer success 1007 success 1008
*/

/*
// throw Error或者return Promise.reject(xxx)会抛出错误，否则就会包装成Promise.resolve(xxx)
Promise.resolve()
  .then(() => {
    return new Error('error!!!')
  })
  .then((res) => {
    console.log('then: ', res)
    return res
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
  .then((res) => {
    console.log('then2: ', res)
  })
// then: Error: error!!!
*/

/*
// 第一个then和第二个then中传入的都不是函数，一个是数字类型，一个是对象类型，因此发生了透传，将resolve(1) 的值直接传到最后一个then里
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)
*/

/*
Promise.reject('err!!!')
  .then(
    (res) => {
      console.log('success', res)
    },
    (err) => {
      console.log('error', err)
    }
  )
  .catch((err) => {
    console.log('catch', err)
  })
// catch err!!!
*/

/*
// success中抛出的错误应该是后面的catch捕获，而fail函数捕获上一级报错
Promise.resolve()
  .then(
    function success(res) {
      throw new Error('error!!!')
    },
    function fail1(err) {
      console.log('fail1', err)
    }
  )
  .catch(function fail2(err) {
    console.log('fail2', err)
  })
// fail2 error!!!
*/

/*
// finally默认返回的是Promise上一次的值，即使最后又返回值
Promise.resolve('1')
  .then((res) => {
    console.log(res)
  })
  .finally(() => {
    console.log('finally')
  })
Promise.resolve('2')
  .finally(() => {
    console.log('finally2')
    // return '我是finally2返回的值'
    throw new Error('我是finally2抛出的错误！')
  })
  .then((res) => {
    console.log('finally2后面的then函数', res)
  })
  .catch((err) => {
    console.log(err)
  })
// 1 finally2 finally Error: 我是finally2抛出的错误！
*/

/*
function promise1() {
  let p = new Promise((resolve) => {
    console.log('promise1')
    resolve('1')
  })
  return p
}
function promise2() {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}
promise1()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('finally1'))

promise2()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('finally2'))

// promise1 1 error finally1 finally2
*/

/*
const first = () =>
  new Promise((resolve, reject) => {
    console.log(3)
    let p = new Promise((resolve, reject) => {
      console.log(7)
      setTimeout(() => {
        console.log(5)
        resolve(6)
        console.log(p)
      }, 0)
      resolve(1)
    })
    resolve(2)
    p.then((arg) => {
      console.log(arg)
    })
  })
first().then((arg) => {
  console.log(arg)
})
console.log(4)
// 3 7 4 1 2 5 Promise{1}
*/

const async1 = async () => {
  console.log('async1')
  setTimeout(() => {
    console.log('timer1')
  }, 2000)
  await new Promise((resolve) => {
    console.log('promise1')
  })
  console.log('async1 end')
  return 'async1 success'
}
console.log('script start')
async1().then((res) => console.log(res))
console.log('script end')
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .catch(4)
  .then((res) => console.log(res))
setTimeout(() => {
  console.log('timer2')
}, 1000)
// script start async1 promise1 script end async1 end async1 success 1 timer2 timer1
// script start async1 promise1 script end async1 end 1 async1 success timer2 timer1
