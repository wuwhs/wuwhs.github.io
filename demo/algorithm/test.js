/*
// 冒泡排序
const bubbleSort = function (arr) {
  const len = arr.length
  let hasChange = true
  for (let i = 0; i < len - 1 && hasChange; i++) {
    hasChange = false
    for (let j = 0; j < len - 1 - i; j++) {
      let [curr, next] = [arr[j], arr[j + 1]]
      if (curr > next) {
        arr[j] = next
        arr[j + 1] = curr
        hasChange = true
      }
    }
  }
}
const arr = [1, 3, 2, 5, 6, 7, 8, 9]
bubbleSort(arr)
console.log(arr)
*/

/*
// 归并排序
const mergeSort = function (arr) {
  if (arr.length <= 1) return arr
  const len = arr.length
  const middle = Math.floor(len / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  const leftSortedArr = mergeSort(leftArr)
  const rightSortedArr = mergeSort(rightArr)
  return merge(leftSortedArr, rightSortedArr)
}

const merge = function (leftSortedArr, rightSortedArr) {
  const result = []
  let i = 0
  let j = 0
  const leftLen = leftSortedArr.length
  const rightLen = rightSortedArr.length
  while (true) {
    if (i >= leftLen) {
      // 左边数组的数取完了
      result.push(...rightSortedArr.slice(j))
      break
    } else if (j >= rightLen) {
      // 右边数组的数取完了
      result.push(...leftSortedArr.slice(i))
      break
    } else if (leftSortedArr[i] > rightSortedArr[j]) {
      // 左边的数大于右边的数
      result.push(leftSortedArr[i++])
    } else {
      result.push(rightSortedArr[j++])
    }
  }
  return result
}

const arr = [0, 3, 2, 5, 16, 7, 8, 9]
console.log(mergeSort(arr))
*/

/*
// 快速排序
const quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr
  }
  const len = arr.length
  const middle = Math.floor(len / 2)
  const middleValue = arr.splice(middle, 1)[0]
  const leftArr = []
  const rightArr = []

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i]
    if (curr > middleValue) {
      rightArr.push(curr)
    } else {
      leftArr.push(curr)
    }
  }
  const leftSortedArr = quickSort(leftArr)
  const rightSortedArr = quickSort(rightArr)
  return [...leftSortedArr, middleValue, ...rightSortedArr]
}
const arr = [0, 3, 2, 5, 16, 7, 8, 9]
console.log(quickSort(arr))
*/

/*
// 插入排序
const insertSort = function (arr) {
  let curr = arr[0]
  const result = [curr]
  for (let i = 1; i < arr.length; i++) {
    curr = arr[i]
    for (let j = result.length - 1; j >= 0; j--) {
      if (result[j] <= curr) {
        result.splice(j + 1, 0, curr)
        break
      }
      if (j === 0) {
        result.unshift(curr)
      }
    }
  }
  return result
}

const arr = [10, 3, 2, 5, 16, 7, 8, 9]
console.log(insertSort(arr))
*/

/*
// 和一定，遍历所有组合
const combinationSum = function (arr, target) {
  if (target <= 0) return []
  const result = []
  combine(arr, target, result, [], 0)
  return result
}

const combine = function (arr, target, result, solution, start) {
  if (target === 0) {
    return result.push([...solution])
  }
  if (target < 0) {
    return
  }
  for (let i = start; i < arr.length; i++) {
    const curr = arr[i]
    solution.push(curr)
    combine(arr, target - curr, result, solution, i)
    solution.pop(curr)
  }
}

const arr = [10, 3, 2, 5, 16, 7, 8, 9]
console.log(combinationSum(arr, 15))
*/

/*
// 和一定，取所有连续正整数
const findSerice = function (target) {
  const result = []
  const upper = Math.ceil(target / 2)
  for (let i = 1; i < upper; i++) {
    for (let j = i + 1; j <= upper; j++) {
      const sum = ((i + j) * (j - i + 1)) / 2

      if (sum > target) break
      if (sum === target) {
        result.push(createArr(i, j))
        break
      }
    }
  }
  return result
}

const createArr = function (lo, hi) {
  const arr = []
  let i = 0
  while (i <= hi - lo) {
    arr.push(lo + i)
    i++
  }
  return arr
}
console.log(findSerice(15))
*/

/*
// 冒泡排序：一趟排出一个最大值，放在最右边，再从左边未排序中排出次大值，放到右边
function bubbleSort(arr) {
  const len = arr.length
  let change = true
  for (let i = 0; i < len && change; i++) {
    change = false
    for (let j = 0; j < len - i - 1; j++) {
      let curr = arr[j]
      let next = arr[j + 1]
      if (curr > next) {
        arr[j] = next
        arr[j + 1] = curr
        change = true
      }
    }
  }
  return arr
}

const arr = [1, 3, 9, 2, 4]
console.log(bubbleSort(arr))
*/

/*
// 插入排序
function insertionSort(arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let current = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > current) {
        arr[j + 1] = arr[j]
      } else {
        arr[j] = current
        break
      }
    }
  }
  // return arr
}
const arr = [4, 1, 3, 9, 6, 7]
insertionSort(arr)
console.log(arr)
*/

// 数组扁平化
// const arr = [1, ['2', 3, [true, undefined, [Symbol('key')]]]]
// console.log(arr.flat(Infinity))

// let result = arr
// while (result.some((item) => Array.isArray(item))) {
//   result = [].concat(...result)
// }
// console.log(result)

// const result = []
// function getFlat(arr) {
//   arr.forEach((item) => {
//     if (!Array.isArray(item)) {
//       result.push(item)
//       return
//     }
//     getFlat(item)
//   })
//   return result
// }
// console.log(getFlat(arr))

/*
// 快速排序
function quickSort(arr) {
  const len = arr.length
  if (len <= 1) return arr

  const middleIndex = Math.floor(len / 2)
  const middleValue = arr.splice(middleIndex, 1)[0]
  const leftArr = []
  const rightArr = []

  arr.forEach((value) => {
    if (value < middleValue) {
      leftArr.push(value)
    } else {
      rightArr.push(value)
    }
  })
  const leftSortedArr = quickSort(leftArr)
  const rightSortedArr = quickSort(rightArr)
  return [...leftSortedArr, middleValue, ...rightSortedArr]
}
const arr = [4, 1, 3, 9, 6, 7]
console.log(quickSort(arr))
*/

/*
// 归并排序
function mergeSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  const middle = Math.floor(len / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  const lf = mergeSort(leftArr)
  const rt = mergeSort(rightArr)
  return merge(lf, rt)
}

function merge(lf, rt) {
  const leftLen = lf.length
  const rightLen = rt.length
  let i = 0
  let j = 0
  const result = []
  while (i < leftLen || j < rightLen) {
    if (i >= leftLen) {
      result.push(...rt.slice(j))
      break
    } else if (j >= rightLen) {
      result.push(...lf.slice(i))
      break
    } else if (lf[i] < rt[j]) {
      result.push(lf[i++])
    } else {
      result.push(rt[j++])
    }
  }
  return result
}
const arr = [4, 1, 3, 9, 6, 7]
console.log(mergeSort(arr))
*/

/*
// 找出所有满足整数和为某个值的组合
function combinationSum(arr, target) {
  const result = []
  backtracking(result, arr, target, 0, [])
  return result
}

function backtracking(result, arr, target, start, solution) {
  if (target < 0) return
  if (target === 0) {
    return result.push([...solution])
  }

  for (let i = start; i < arr.length; i++) {
    const curr = arr[i]
    solution.push(curr)
    backtracking(result, arr, target - curr, i + 1, solution)
    solution.pop()
  }
}
const arr = [1, 4, 6, 0, 2, 3]
console.log(combinationSum(arr, 10))
*/

/*
// 最长上升子序列
function logestSeries(arr) {
  const len = arr.length
  const dp = new Array(len).fill(1)
  let max = 1

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1
        max = Math.max(dp[i], max)
      }
    }
  }
  return max
}
const arr = [1, 0, 6, 1, 2, 3]
console.log(logestSeries(arr))
*/
/*
function mergeSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  const middle = Math.floor(len / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  const leftSortedArr = mergeSort(leftArr)
  const rightSortedArr = mergeSort(rightArr)
  return merge(leftSortedArr, rightSortedArr)
}

function merge(lf, rt) {
  const leftLen = lf.length
  const rightLen = rt.length
  const result = []
  let i = 0
  let j = 0
  while (i < leftLen || j < rightLen) {
    if (i >= leftLen) {
      result.push(...rt.slice(j))
      break
    } else if (j >= rightLen) {
      result.push(...lf.slice(i))
      break
    } else if (lf[i] > rt[j]) {
      result.push(rt[j++])
    } else {
      result.push(lf[i++])
    }
  }
  return result
}
const arr = [1, 0, 6, 1, 2, 3]
console.log(mergeSort(arr))
*/

/*
//  不相隔和最大 dp[n] = max(dp[n-2] +  num[n], dp[n-1])
function rob(arr) {
  const len = arr.length
  const dp = []
  if (len === 1) return arr[0]
  if (len === 2) return Math.max(arr[0], arr[1])

  dp[0] = arr[0]
  dp[1] = Math.max(arr[0], arr[1])

  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1])
  }
  return dp
}
const arr = [1, 0, 6, 1, 2, 3]
console.log(rob(arr))
*/

/*
// 盛最多水的容器
// 输入 [1, 8, 6, 2, 5, 4, 8, 3, 7] 输出49
function mostWater(arr) {
  const len = arr.length
  let start = 0
  let end = len - 1
  let result = 0

  while (start < end) {
    const curr = Math.min(arr[start], arr[end]) * (end - start)
    result = Math.max(curr, result)
    if (arr[start] < arr[end]) {
      start += 1
    } else {
      end -= 1
    }
  }
  return result
}
const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(mostWater(arr))
*/

/*
// 冒泡排序
function bubbleSort(arr) {
  const len = arr.length
  let isChange = true

  for (let i = 0; i < len && isChange; i++) {
    isChange = false
    for (let j = 0; j < len - i - 1; j++) {
      let curr = arr[j]
      let next = arr[j + 1]
      if (curr > next) {
        arr[j] = next
        arr[j + 1] = curr
        isChange = true
      }
    }
  }
  return arr
}
const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(bubbleSort(arr))
*/

/*
// 快速排序
function quickSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  const middleIndex = Math.floor(len / 2)
  const middleValue = arr[middleIndex]
  const leftArr = []
  const rightArr = []
  arr.splice(middleIndex, 1)
  arr.forEach((value) => {
    if (value < middleValue) {
      leftArr.push(value)
    } else {
      rightArr.push(value)
    }
  })
  const leftSortedArr = quickSort(leftArr)
  const rightSortedArr = quickSort(rightArr)
  return [...leftSortedArr, middleValue, ...rightSortedArr]
}
const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(quickSort(arr))
*/

/*
// 归并排序
function mergeSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  const middle = Math.floor(len / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  const leftSortedArr = mergeSort(leftArr)
  const rightSortedArr = mergeSort(rightArr)
  return merge(leftSortedArr, rightSortedArr)
}

function merge(lf, rt) {
  const leftLen = lf.length
  const rightLen = rt.length
  let i = 0
  let j = 0
  const result = []
  console.log('lf: ', lf)
  console.log('rt: ', rt)
  while (i < leftLen || j < rightLen) {
    if (i >= leftLen) {
      result.push(...rt.slice(j))
      break
    } else if (j >= rightLen) {
      result.push(...lf.slice(i))
      break
    } else if (lf[i] > rt[j]) {
      result.push(rt[j++])
    } else {
      result.push(lf[i++])
    }
  }
  return result
}

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(mergeSort(arr))
*/

/*
// 插入排序
const insertSort = function (arr) {
  let curr = arr[0]
  const result = [curr]
  for (let i = 1; i < arr.length; i++) {
    curr = arr[i]
    for (let j = result.length - 1; j >= 0; j--) {
      if (result[j] <= curr) {
        result.splice(j + 1, 0, curr)
        break
      }
      if (j === 0) {
        result.unshift(curr)
      }
    }
  }
  return result
}
const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(insertSort(arr))
*/

/*
// 打家劫舍
function rob(arr) {
  const len = arr.length

  if (len === 1) return arr[0]
  if (len === 2) return Math.max(arr[0], arr[1])

  const dp = new Array(len).fill(1)

  dp[0] = arr[0]
  dp[1] = Math.max(dp[0], arr[1])

  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1])
  }
  return dp
}
const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(rob(arr))
*/

/*
// 最长上升子序列
function LPS(arr) {
  const len = arr.length
  if (len === 1) return 1
  const dp = new Array(len).fill(1)
  let max = 0
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] + 1 > dp[i] && arr[j] < arr[i]) {
        dp[i] = dp[j] + 1
        max = Math.max(dp[i], max)
      }
    }
  }
  return max
}
const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(LPS(arr))
*/

/*
// [1, 2, 3] => {value: 1, next: {value: 2, next: {value: next: null}}}
function CreateNode(value, next = null) {
  this.value = value
  this.next = next
}

function createNodeList(arr) {
  let head = new CreateNode()
  const result = head
  arr.forEach((value, index) => {
    head.value = value
    head.next = index > arr.length - 1 ? null : new CreateNode()
    head = head.next
  })
  return result
}

const arr = [1, 2, 3, 4]
const nodeList = createNodeList(arr)
// console.log('result: ', JSON.stringify(createNodeList(arr)))
*/

/*
// 翻转链表
function reverseListNode(head) {
  let prev = null
  let curr = head
  while (curr) {
    let next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }
  return prev
}
console.log('reverseList: ', JSON.stringify(reverseListNode(nodeList)))
*/

/*
// 归并排序
function mergeSort(arr) {
  const len = arr.length
  if (len <= 1) return arr

  const middle = Math.floor(len / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  const leftSortedArr = mergeSort(leftArr)
  const rightSortedArr = mergeSort(rightArr)
  return merge(leftSortedArr, rightSortedArr)
}

function merge(lf, rt) {
  const leftLen = lf.length
  const rightLen = rt.length
  let left = 0
  let right = 0
  const result = []
  while (left < leftLen || right < rightLen) {
    if (left >= leftLen) {
      result.push(...rt.slice(right))
      break
    } else if (right >= rightLen) {
      result.push(...lf.slice(left))
      break
    } else if (lf[left] > rt[right]) {
      result.push(rt[right])
      right++
    } else {
      result.push(lf[left])
      left++
    }
  }
  return result
}
const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(mergeSort(arr))
*/
/*
function insertionSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  const result = [arr[0]]
  for (let i = 1; i < len; i++) {
    for (let j = result.length - 1; j >= 0; j--) {
      if (result[j] < arr[i]) {
        result.splice(j + 1, 0, arr[i])
        break
      }
      if (j === 0) {
        result.unshift(arr[i])
      }
    }
  }
  return result
}
const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(insertionSort(arr))
*/
/*
function quickSort(arr) {
  const len = arr.length
  if (len <= 1) return arr

  const middleIndex = Math.floor(len / 2)
  const middleValue = arr.splice(middleIndex, 1)[0]
  const leftArr = []
  const rightArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > middleValue) {
      rightArr.push(arr[i])
    } else {
      leftArr.push(arr[i])
    }
  }
  const leftSortedArr = quickSort(leftArr)
  const rightSortedArr = quickSort(rightArr)
  return [...leftSortedArr, middleValue, ...rightSortedArr]
}
const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(quickSort(arr))
*/

/*
// f(n) = f(n-1)+f(n-2)
// 尾递归
function fibonacci(n, curr = 1, next = 1) {
  if (n <= 1) return curr
  return fibonacci(n - 1, next, curr + next)
}
console.log(fibonacci(10))
*/

/*
// console.log(fibonacci(10))
function fibonacci(n) {
  if (n === 1 || n === 2) return 1
  // const arr = new Array(n)
  // arr[0] = 1
  // arr[1] = 1
  let prev = 1
  let curr = 1
  let next = 0
  for (let i = 2; i < n; i++) {
    // arr[i] = arr[i - 1] + arr[i - 2]
    next = prev + curr
    prev = curr
    curr = next
  }
  return next
}
console.log(fibonacci(100))
*/

/*
// 洗牌算法
// 思想：从最末尾开始往前，前面随机选出一个数与最后的数互换
function sufflex(arr) {
  const len = arr.length
  const cards = [...arr]
  let r = len - 1

  while (r >= 0) {
    const i = Math.floor(Math.random() * (r + 1))
    ;[cards[r], cards[i]] = [cards[i], cards[r]]
    r--
  }
  return cards
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sufflex(arr))
*/

/*
// 实现一个 lazyman
// 思想：维护一个任务队列，任务存放完成后，异步执行队列第一项，第一项执行后，执行下一项。
class Scheduler {
  constructor(name) {
    this.tasks = []
    this.init(name)
    setTimeout(() => {
      this.next()
    }, 0)
  }
  next() {
    const task = this.tasks.shift()
    if (task) {
      task()
    }
  }
  init(name) {
    const task = () => {
      console.log(`Hi, This is ${name}!`)
      this.next()
    }
    this.tasks.push(task)
    return this
  }
  eat(value) {
    const task = () => {
      console.log(`Eat ${value}`)
      this.next()
    }
    this.tasks.push(task)
    return this
  }
  sleep(delay) {
    const task = () => {
      setTimeout(() => {
        console.log('Wake up after ' + delay)
        this.next()
      }, delay)
    }
    this.tasks.push(task)
    return this
  }
  firstSleep(delay) {
    const task = () => {
      setTimeout(() => {
        console.log('Wake up after ' + delay)
        this.next()
      }, delay)
    }
    this.tasks.unshift(task)
    return this
  }
}

function LazyMan(name) {
  const scheduler = new Scheduler(name)
  return scheduler
}
LazyMan('wuwhs').eat('orange').sleep(3000).eat('lunch').firstSleep(1000)
*/

/*
function CreateNode(value, next = null) {
  this.value = value
  this.next = next
}

function createNodeList(arr) {
  const len = arr.length
  let head = new CreateNode()
  const result = head
  arr.forEach((value, index) => {
    head.value = value
    head.next = index === len - 1 ? null : new CreateNode()
    head = head.next
  })
  return result
}
const arr = [1, 2, 3, 4, 5]
const node = createNodeList(arr)
// console.log(JSON.stringify(createNodeList(arr)))

function reverseListNode(head) {
  let prev = null
  let curr = head
  console.log('head: ', JSON.stringify(head))
  while (curr) {
    let next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }
  return prev
}
const reverseNode = reverseListNode(node)
console.log(JSON.stringify(reverseNode))
*/

/*
// 最长回文数 abcb -> 3 abccba -> 6
function LPS(str) {
  const len = str.length
  const dp = new Array(len)

  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(0)
    dp[i][i] = 1
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      // 首尾相等
      if (str.charAt(j) === str.charAt(j + i)) {
        dp[j][j + i] = dp[j + 1][j + i - 1] + 2
      } else {
        dp[j][j + i] = Math.max(dp[j + 1][j + i], dp[j][j + i - 1])
      }
    }
  }
  return dp[0][len - 1]
}
console.log(LPS('aabccbaa'))
*/

// 最长公共子序列
// [2, 4, 1, 6, 7] [1, 5, 4, 1, 6, 0] -> [4, 1, 6]
// function commonSerise(arr1, arr2) {
//   const len1 = arr1.length
//   const len2 = arr2.length
//   let result = []

//   for (let i = 0; i < len1; i++) {
//     for (let j = 0; j < len2; j++) {
//       const currResult = []
//       while (arr1[i] === arr2[j]) {
//         currResult.push(arr1[i])
//         i++
//         j++
//       }
//       if (currResult.length > result.length) {
//         result = currResult
//       }
//     }
//   }
//   return result
// }
// console.log(commonSerise([2, 4, 1, 6, 7], [1, 5, 4, 1, 6, 0]))

// function commonSerise(arr1, arr2) {
//   const len1 = arr1.length + 1
//   const len2 = arr2.length + 1
//   const dp = new Array(len1)
//   for (let i = 0; i < len1; i++) {
//     dp[i] = new Array(len2).fill(0)
//   }
//   console.log('dp: ', dp)

//   for (let i = 1; i < len1; i++) {
//     for (let j = 1; j < len2; j++) {
//       if (arr1[i] === arr2[j]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1
//       } else {
//         dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
//       }
//     }
//   }
//   return dp[len1 - 1][len2 - 1]
// }
// console.log(commonSerise([2, 4, 1, 6, 7], [7, 5, 4, 1, 6, 0]))

/*
// [1, 2, 3, 4, 5, 6] sum=15
// function getAllSolution(arr, target) {
//   const result = []
//   backtrace(result, arr, target, [], 0)
//   return result
// }

// function backtrace(result, arr, target, solution, start) {
//   console.log('target: ', target)
//   if (target === 0) {
//     return result.push([...solution])
//   }
//   if (target < 0) return

//   for (let i = start; i < arr.length; i++) {
//     const curr = arr[i]
//     solution.push(curr)
//     backtrace(result, arr, target - curr, solution, i + 1)
//     solution.pop()
//   }
// }

// console.log(getAllSolution([1, 2, 3, 4, 5, 6], 15))

function LPS(str) {
  const len = str.length
  const dp = new Array(len)

  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(0)
    dp[i][i] = 1
  }

  console.log('dp: ', JSON.stringify(dp))
  let result = []

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (str[j] === str[j + i]) {
        dp[j][j + i] = dp[j + 1][j + i - 1] + 2
        result = [j, j + i]
      } else {
        dp[j][j + i] = Math.max(dp[j][j + i - 1], dp[j + 1][j + i])
      }
    }
  }
  console.log('result: ', result)
  return dp[0][len - 1]
}
const str = 'taabcacbaaii'
console.log(LPS(str))

console.log(getAllSolution([1, 2, 3, 4, 5, 6], 15))
*/

/*
function arr2tree() {}

const arr = [
  { id: 1, value: '1', pid: null },
  { id: 2, value: '1-1', pid: 1 },
  { id: 3, value: '1-2', pid: 1 },
  { id: 4, value: '1-3', pid: 1 },
  { id: 5, value: '1-1-1', pid: 2 },
  { id: 6, value: '1-2-1', pid: 3 }
]

function arr2tree(arr) {
  const mp = {}
  arr.forEach((item) => {
    mp[item.id] = item
  })
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    const { pid } = item

    if (pid === null) {
      result.push(item)
      continue
    }
    if (mp[pid]) {
      if (!mp[pid].children) {
        mp[pid].children = []
      }
      mp[pid].children.push(item)
    }
  }
  return result
}
console.log(JSON.stringify(arr2tree(arr)))
*/

// function CreateNodeList(value, next = null) {
//   this.value = value
//   this.next = next
// }

// function arr2NodeList(arr) {
//   const len = arr.length
//   let head = new CreateNodeList()
//   const result = head

//   for (let i = 0; i < len; i++) {
//     head.value = arr[i]
//     head.next = i === len - 1 ? null : new CreateNodeList()
//     head = head.next
//   }
//   return result
// }
// const listNode = arr2NodeList([1, 2, 3, 4, 5])
// console.log(JSON.stringify(listNode))

// function reverseListNode(head) {
//   let prev = null
//   let curr = head

//   while (curr) {
//     let next = curr.next
//     curr.next = prev
//     prev = curr
//     curr = next
//   }
//   return prev
// }

// function reverseListNode(head) {
//   if (!head.next) return head

//   const result = reverseListNode(head.next)
//   head.next.next = head
//   head.next = null
//   return result
// }

// console.log(JSON.stringify(reverseListNode(listNode)))

// function findMiddleNode(head) {
//   let slow = head
//   let fast = head
//   while (fast && fast.next) {
//     slow = slow.next
//     fast = fast.next.next
//   }
//   console.log('fast: ', fast)
//   // 奇数
//   if (fast) {
//     return slow.next
//   }
//   return slow
// }

// console.log('result: ', findMiddleNode(listNode))

// 查找比左边都要大，同时比右边都要小的数
// [1, 2, 4, 3, 10, 13, 15, 12, 16, 18, 17]，返回 [1, 2, 10, 16]
// function findNums(arr) {
//   const len = arr.length
//   const rightMinDp = findRightMin(arr)
//   let max = Number.MIN_SAFE_INTEGER
//   const result = []

//   for (let i = 0; i < len; i++) {
//     const curr = arr[i]
//     if (curr > max) {
//       max = curr
//       if (curr <= rightMinDp[i]) {
//         result.push(curr)
//       }
//     }
//   }
//   return result
// }

// function findRightMin(arr) {
//   const len = arr.length
//   const dp = []
//   let min = Number.MAX_SAFE_INTEGER
//   for (let i = len - 1; i >= 0; i--) {
//     const curr = arr[i]
//     if (curr < min) {
//       min = curr
//     }
//     dp[i] = min
//   }
//   return dp
// }

// 维护一个栈，新来的数，如果小于之前的数字，之前的数字出栈，这样保证了当前的数字小于后面的数字
// 当前的数字大于当前最大的数字，则入栈，否则不入栈，这样保证了当前的数字大于前面的数字
// function findNums(arr) {
//   const len = arr.length
//   const stack = [arr[0]]
//   let max = arr[0]

//   for (let i = 1; i < len; i++) {
//     const curr = arr[i]

//     while (stack[stack.length - 1] >= curr) {
//       stack.pop()
//     }
//     if (curr > max) {
//       stack.push(curr)
//       max = curr
//     }
//   }
//   return stack
// }

// console.log(findNums([1, 2, 4, 3, 10, 13, 15, 12, 16, 18, 17]))

// 滑动窗口
// function findWinMaxNum(arr, k) {
//   const queue = [];
//   function push(val) {
//     while (queue[queue.length - 1] < val) {
//       queue.pop();
//     }
//     queue.push(val);
//   }

//   function pop(val) {
//     if (queue[0] === val) {
//       queue.shift();
//     }
//   }

//   const result = [];
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (i < k - 1) {
//       push(arr[i]);
//       continue;
//     }
//     push(arr[i]);
//     result.push(queue[0]);
//     pop(arr[i - k + 1]);
//   }
//   return result;
// }
// console.log(findWinMaxNum([1, 2, 4, 3, 10, 13, 15, 12, 16, 18, 17], 3));

// function asyncPool(arr, k) {
//   return new Promise((resolve) => {
//     const len = arr.length;
//     let next = k;
//     let count = 0;
//     const result = [];

//     function fn(index) {
//       createRequest(arr[index]).then((res) => {
//         console.log("res: ", res);
//         result[index] = res;
//         count++;
//         console.log("next: ", next);
//         if (next < len) {
//           fn(next);
//           next++;
//         }

//         if (count === len) {
//           resolve(result);
//         }
//       });
//     }

//     for (let i = 0; i < k; i++) {
//       fn(i);
//     }
//   });
// }

// function createRequest() {
//   return new Promise((resolve) => {
//     const delay = 3000 * Math.random();
//     setTimeout(() => {
//       resolve(delay);
//     }, delay);
//   });
// }
// const requests = [...new Array(10)];
// console.log("requests", requests);
// asyncPool(requests, 2).then((res) => {
//   console.log("result: ", res);
// });

// function LPS(str) {
//   const len = str.length;
//   let dp = [...new Array(len)];
//   dp = dp.map(() => new Array(len).fill(0));
//   console.log("dp: ", dp);

//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < len - i; j++) {
//       if (str[j] === str[j + i]) {
//         dp[j][j + i] = dp[j + 1][j + i - 1] + 2;
//       } else {
//         dp[j][j + i] = Math.max(dp[j + 1][j + i], dp[j][j + i - 1]);
//       }
//     }
//   }
//   return dp[0][len - 1];
// }
// console.log(LPS("abcabcbad"));

// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then((res) => {
//     console.log('res: ', res)
//   })

// const p1 = Promise.resolve(111)
// p1.then((res) => {
//   console.log('p1 res1: ', res)
// }).then((res) => {
//   console.log('p1 res2: ', res)
// })
// p1.then((res) => {
//   console.log('p2 res1: ', res)
// }).then((res) => {
//   console.log('p2 res2: ', res)
// })

// Promise.resolve(1)
//   .then((res1) => {
//     console.log("res1: ", res1);
//   })
//   .then((res2) => {
//     console.log("res2: ", res2);
//     return new Error("error!");
//   })
//   .then((res) => {
//     console.log("then: ", res);
//   })
//   .catch((err) => {
//     console.log("catch: ", err);
//   });

// 回文链表
// function isPadding(head) {
//   let left = head

//   function traverse(right) {
//     if (!right) return true
//     let result = traverse(right.next)
//     result = result && right.value === left.value
//     if (result) {
//       left = left.next
//     }
//     return result
//   }
//   return traverse(head)
// }

// 查找最长回文字符串
// function longestPalindrome(str) {
//   const len = str.length
//   let maxLen = 0
//   let maxStr = ''

//   for (let i = 0; i < len; i++) {
//     let maxStr1 = palindrome(str, i, i)
//     let maxStr1Len = maxStr1.length
//     let maxStr2 = palindrome(str, i, i + 1)
//     let maxStr2Len = maxStr2.length

//     if (maxStr1Len > maxLen) {
//       maxLen = maxStr1Len
//       maxStr = maxStr1
//     }

//     if (maxStr2Len > maxLen) {
//       maxLen = maxStr2Len
//       maxStr = maxStr2
//     }
//   }
//   return maxStr
// }

// function palindrome(str, l, r) {
//   while (str[l] === str[r] && l > 0 && r < str.length - 1) {
//     l--
//     r++
//   }
//   return str.slice(l, r + 1)
// }

// console.log('longestPalindrome: ', longestPalindrome('eabccbaef'))

// 查找公共前缀
// function longestCommonPrefix(strs) {
//   let min = Number.MAX_SAFE_INTEGER
//   const first = strs[0]
//   const len = strs.length

//   for (let i = 1; i < len; i++) {
//     let maxLen = twoStrLongestCommonPrefix(first, strs[i])
//     if (maxLen < min) {
//       min = maxLen
//     }
//   }
//   return first.slice(0, min)
// }

// function twoStrLongestCommonPrefix(s, t) {
//   let i = 0
//   let j = 0
//   while (i < s.length && j < t.length && s[i] === t[j]) {
//     i++
//     j++
//   }
//   return i
// }
// console.log('longestCommonPrefix: ', longestCommonPrefix(['abc dcs', 'abc', 'abcd']))

/*
// 接雨水 [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] => 9
function trap(arr) {
  const len = arr.length
  let maxInd = 0
  let max = -1
  let res = 0

  // 先找出最高点
  for (let i = 0; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i]
      maxInd = i
    }
  }

  // 遍历最高点左边
  // 当前比左边最高点低可以积雨水
  let leftMax = arr[0]
  for (let j = 1; j < maxInd; j++) {
    const curr = arr[j]
    if (leftMax > curr) {
      res += leftMax - curr
    } else {
      leftMax = curr
    }
  }

  // 遍历最高点右边
  // 当前比右边最高点低可以积雨水
  let rightMax = arr[len - 1]
  for (let t = len - 1; t > maxInd; t--) {
    const curr = arr[t]
    if (rightMax > curr) {
      res += rightMax - curr
    } else {
      rightMax = curr
    }
  }
  return res
}
console.log('trap: ', trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
*/

/*
// 最长不重复子字符串
function longestCommonSubsequence(str) {
  let l = 0
  let r = 0
  const len = str.length
  const mp = {}
  let maxLen = 0
  let maxStr = ''

  while (r < len) {
    const curr = str[r]
    if (!mp[curr]) {
      mp[curr] = 1
    } else {
      mp[curr]++
    }

    r++

    while (mp[curr] > 1) {
      const left = str[l]
      mp[left]--
      l++
      console.log('left: ', left)
    }

    if (r - l > maxLen) {
      maxLen = r - l
      maxStr = str.slice(l, r)
    }
  }

  return maxStr
}
console.log('longestCommonSubsequence: ', longestCommonSubsequence('abcdefc'))
*/
