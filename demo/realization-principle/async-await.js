// 实现 async await 原理
// async await 实际是 generator 函数的语法糖，将async-await改写成 *-yield 形式
// 然后遍历调用 gen.next() 方法，将最终返回结果包裹成 promise 返回

function generator2Async(generatorFn) {
  return function () {
    const gen = generatorFn.apply(this, arguments)

    // 返回一个Promise
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let res
        try {
          // 这里有可能会执行返回reject状态的Promise
          res = gen[key](arg)
        } catch (error) {
          return reject(error)
        }

        const { value, done } = res
        if (done) {
          // 如果done为true，说明走完了，进行resolve
          return resolve(value)
        } else {
          // 如果done为false，说明没走完
          // value有可能是：常量，Promise，Promise有可能是成功或者失败
          return Promise.resolve(value).then(
            (val) => step('next', val),
            (err) => step('throw', err)
          )
        }
      }
      step('next')
    })
  }
}

function fn(nums) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(nums * 2)
    }, 1000)
  })
}

function* gen() {
  const num1 = yield fn(1)
  const num2 = yield fn(num1)
  const num3 = yield fn(num2)
  return num3
}

const asyncFn = generator2Async(gen)
const aysncRes = asyncFn()
console.log('aysncRes: ', aysncRes)
aysncRes.then((res) => console.log('res: ', res))
