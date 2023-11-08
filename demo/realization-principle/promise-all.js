// Promise.all 的实现
// 实现原理：每个Promise resolve 状态记一次数，计数为数组长度，返回的状态为 resolve

const promiseAll = (arr) => {
  return new Promise((resolve, reject) => {
    let count = 0
    const len = arr.length
    const result = []

    for (let i = 0; i < len; i++) {
      arr[i]
        .then((res) => {
          count++
          result[i] = res
          if (count === len) {
            resolve(result)
          }
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}
