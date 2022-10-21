// async-pool 实现
// 控制最大并发请求，并将所有请求结果按照顺序输出
// 实现思想：首先并发maxNum个请求，
// 这些请求中有结果取 next 指针指向的下一个待请求，执行请求，next 指针移到下一位
// 直到 next 指针到头，并且所有请求都有返回则结束

const fetch = function (url) {
  return new Promise((resolve) => {
    const time = Math.random() * 3
    setTimeout(() => {
      resolve({ status: 0, data: time + 's', url })
    }, time * 2000)
  })
}

const multiRequest = (urls, maxNum) => {
  return new Promise((resolve, reject) => {
    const len = urls.length
    const result = []

    // 下一位移动指针
    let next = maxNum
    // 请求成功计数
    let count = 0

    // 执行请求
    const done = (index) => {
      const url = urls[index]
      return fetch(url).then((res) => {
        console.log('res: ', res)
        result[index] = res
        count++

        if (next < len) {
          done(next++)
        }

        if (count === len) {
          resolve(result)
        }
      })
    }

    for (let i = 0; i < maxNum; i++) {
      done(i)
    }
  })
}

const arr = [...new Array(10)].map((val, index) => {
  return `https://ex.com/${index}`
})
console.log('arr: ', arr)

multiRequest(arr, 2).then((res) => {
  console.log('res: ')
  console.log(res)
})
