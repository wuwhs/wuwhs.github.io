/**fibonacci 数列**/
/*
// dp做法
const fibonacci = function (n) {
  if (n <= 1) return 1
  const arr = new Array(n)
  arr[0] = 1
  arr[1] = 1
  for (let i = 2; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n - 1]
}
console.log(fibonacci(100))
*/

/*
// 省去空间复杂度
const fibonacci = function (n) {
  if (n <= 1) return 1
  let prev = 1
  let curr = 1
  let next = 0
  for (let i = 2; i < n; i++) {
    next = prev + curr
    curr = next
    prev = curr
  }
  return next
}
console.log(fibonacci(100))
*/

/*
// 尾递归方式
const fibonacci = function (n, curr = 1, next = 1) {
  if (n === 0) {
    return curr
  } else {
    return fibonacci(n - 1, next, curr + next)
  }
}
console.log(fibonacci(100))
*/

/**已知和一定，找出所有连续正整数序列**/
/*
const createArr = function (start, end) {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
const findSerice = function (sum) {
  const max = Math.ceil(sum / 2)
  const result = []
  for (let i = 1; i < max; i++) {
    for (let j = i + 1; j <= max; j++) {
      const curr = ((i + j) * (j - i + 1)) / 2
      if (curr > sum) break
      if (curr === sum) result.push(createArr(i, j))
    }
  }
  return result
}
console.log(findSerice(22))
 */

/**数组去重**/
/*
const arr = [1, 2, 3, 4, 3, 2, 5, 6, 5]
// ES6中 Set，再解构
console.log([...new Set(arr)])

// indexOf 查找出的索引是否和当前遍历相同，相同则无重复
const result1 = arr.filter((item, index) => {
  return arr.indexOf(item) === index
})
console.log('result1: ', result1)

// 对象记录
const mp2 = {}
const result2 = []
arr.forEach((item) => {
  if (!mp2[item]) {
    mp2[item] = 1
    result2.push(item)
  } else {
    mp2[item]++
  }
})
console.log('result2: ', result2)

// Map
const mp3 = new Map()
const result3 = []
arr.forEach((item) => {
  if (!mp3.has(item)) {
    mp3.set(item, 1)
    result3.push(item)
  } else {
    mp3.set(item, mp3.get(item) + 1)
  }
})
console.log('result3: ', result3)
*/

/*
// 数组的扁平化
const arr = [1, [2], [3, [4, 5]]]

// ES6 Array.flat
console.log(arr.flat(Infinity))
*/

/*
// toString
const flattedArr = arr
  .toString()
  .split(',')
  .map((value) => {
    return parseFloat(value)
  })
console.log(flattedArr)
*/

/*
// JSON.stringify
const flattedArr = JSON.stringify(arr)
  .replace(/(\[|\])/g, '')
  .split(',')
  .map((value) => {
    return parseFloat(value)
  })
console.log(flattedArr)
*/

/*
// 逐层解构
let flattedArr = arr
while (flattedArr.some((value) => Array.isArray(value))) {
  flattedArr = [].concat(...flattedArr)
}
console.log(flattedArr)
*/

/*
// 深度递归
const flattedArr = []
const recursion = function (arr) {
  arr.forEach((value) => {
    if (!Array.isArray(value)) {
      flattedArr.push(value)
    } else {
      recursion(value)
    }
  })
}
recursion(arr)
console.log(flattedArr)
*/

/*
// 冒泡排序
// 思想：第一趟从第一个数开始，相邻两个数比较，前一个数大于后一个数，则交换位置，
// 直到倒数第一个数和倒数第二个数比较完成，则最大的放在来末尾
// 第二趟同理就能把第二大的数放在倒数第二位
// 经过n-1趟，数组的顺序就排好来
const bubbleSort = function (arr) {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      let curr = arr[j]
      let next = arr[j + 1]
      if (curr > next) {
        ;[curr, next] = [next, curr]
        arr[j] = curr
        arr[j + 1] = next
      }
    }
  }
}
const arr = [1, 2, 5, 6, 0, 2, 4]
bubbleSort(arr)
console.log(arr)
*/

/*
// 插入排序
// 思想：从数组A中取出第一个数，取出来的数放入另一空数组B中
// 再按顺序取A第二个数，与另一个数组B中的数字逐个比较，直到发现比它小的数，插入到这个数的后面，
// 同理，依次往A后取数，直到A中数取完，B就是排好顺序的
const insertSort = function (arr) {
  const result = []
  if (arr.length <= 1) return arr
  result.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    for (let j = result.length - 1; j >= 0; j--) {
      if (result[j] <= arr[i]) {
        result.splice(j + 1, 0, arr[i])
        break
      }
    }
  }
  return result
}
const arr = [1, 2, 5, 6, 0, 2, 4]
console.log(insertSort(arr))
*/

/*
// 快速排序
// 思想：取中间数，逐个与剩余数比较，比该数大的放在右边数组，否则放在左边数组
// 左右数组同理再分成左右数组，直到不能再分了，然后依次拼接起来得到最终排好顺序
const quickSort = function (arr) {
  if (arr.length <= 1) return arr
  const midIndex = Math.floor(arr.length / 2)
  const midValue = arr.splice(midIndex, 1)
  const leftArr = []
  const rightArr = []
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i]
    if (curr > midValue) {
      rightArr.push(curr)
    } else {
      leftArr.push(curr)
    }
  }
  const leftSortedArr = quickSort(leftArr)
  const rightSortedArr = quickSort(rightArr)
  return [...leftSortedArr, midValue, ...rightSortedArr]
}
const arr = [1, 2, 5, 6, 0, 2, 4]
console.log(quickSort(arr))
*/

/*
// 归并排序
// 思想：将数组按中间位置拆分成两个数组，数组继续从中间位置拆分，直到不能拆分为止，
// 然后回溯拼接两个数组并进行排序，形成一个有序数组，再与之前拆分的已形成有序数组拼接排序
// 最终形成一个完整的有序数组
const mergeSort = function (arr) {
  const len = arr.length
  if (len <= 1) return arr
  const middle = Math.floor(len / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  const lf = mergeSort(leftArr)
  const rt = mergeSort(rightArr)
  return merge(lf, rt)
}

const merge = function (lf, rt) {
  const result = []
  let i = 0
  let j = 0
  const lfLen = lf.length
  const rtLen = rt.length

  while (i < lfLen || j < rtLen) {
    if (i >= lfLen) {
      // 左边数组遍历完了，直接将右边剩下的放进合成队列
      result.push(...rt.slice(j))
      break
    } else if (j >= rtLen) {
      // 右边边数组遍历完了，直接将左边剩下的放进合成队列
      result.push(...lf.slice(i))
      break
    } else if (lf[i] > rt[j]) {
      // 左边大于右边，选取右边较小者，左边索引后移一位
      result.push(rt[j++])
    } else {
      // 右边大于左边，选取左边较小者
      result.push(lf[i++])
    }
  }
  return result
}
const arr = [1, 2, 5, 6, 0, 2, 4]
console.log(mergeSort(arr))
*/

/*
// 寻找中心对称数
// n = 0 中心对称数是：''
// n = 1 中心对称数是：'0', '1, '8'
// n = 2 中心对称数是： '11', '69', '88', '96'
// n >= 3 中心对称数是：n - 2中心对称数两边加 '1-1', '6-9', '8-8', '9-6', '0-0'
// 如果是最外层不能加 `0-0`
const findNum = function (n, m) {
  m = m || n
  if (n <= 0) return ['']
  if (n === 1) return ['0', '1', '8']
  const prev = findNum(n - 2, m)
  const result = []
  for (let i = 0; i < prev.length; i++) {
    const item = prev[i]
    if (n !== m) {
      result.push('0' + item + '0')
    }
    result.push('1' + item + '1')
    result.push('6' + item + '9')
    result.push('8' + item + '8')
    result.push('9' + item + '6')
  }
  return result
}

console.log(findNum(2))
*/

/*
// 给定一个无重复元素的数组 candidates 和一个目标数 target ，
// 找出 candidates 中所有可以使数字和为 target 的组合。
const combinationSum = function (candidates, target) {
  const result = []
  backtracking(candidates, target, result, [], 0)
  return result
}

const backtracking = function (candidates, target, result, solution, start) {
  if (target < 0) return
  if (target === 0) {
    return result.push([...solution])
  }
  for (let i = start; i < candidates.length; i++) {
    const value = candidates[i]
    solution.push(value)
    backtracking(candidates, target - value, result, solution, i)
    solution.pop()
  }
}

const arr = [2, 3, 6, 7]
console.log(combinationSum(arr, 9))
*/

/*
// 寻找最长上升子序列长度
// 思想：动态规划：1、最优子结构，2、重叠子问题。f(n) = max(f(i)) 0<=i<=n-1
// 假设最长子序列数为dp[i]，遍历0-i中有一个数 arr[j]<arr[i]，并且 dp[j]+1>dp[i]，
// 那么i位置的最长子序列数更新 d[i]=d[j]+1，记录max=Math.max(d[i], max)
const getSeriseLen = function (arr) {
  const len = arr.length
  let max = 1
  if (arr.length === 1) return 1
  const dp = new Array(len).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1
        max = Math.max(dp[i], max)
      }
    }
  }
  console.log('dp: ', dp)
  return max
}

const arr = [2, 8, 6, 7, 1, 2, 3]
console.log(getSeriseLen(arr))
*/

/*
// 输入是 1,2,3,5,7,8,10 输出要求是 1~3 5 7~8 10
const parseRange = function (arr) {
  const result = []
  let start = 0
  let end = 0
  let offset = 0
  const len = arr.length
  while (start < len) {
    end++
    offset++
    // 连续区间中断情况
    if (arr[start] + offset !== arr[end] || end === len - 1) {
      result.push(start === end - 1 ? arr[start] : `${arr[start]}~${arr[end - 1]}`)
      start = end
      offset = 0
    }
  }
  return result
}
console.log(parseRange([1, 2, 3, 5, 7, 8, 10]))
*/

/*
// 盛最多水的容器
// 输入 [1, 8, 6, 2, 5, 4, 8, 3, 7] 输出49
// 首尾指针法：两端向中间夹逼，高度较小一端向中间移动，计算当前面积，
// 如果大于最大面积，则替换
const maxContainer = function (arr) {
  let left = 0
  const len = arr.length
  let right = len - 1
  const result = {
    left: 0,
    right: 0,
    max: 0
  }
  while (left < right) {
    let temp = (right - left) * Math.min(arr[left], arr[right])
    if (temp > result.max) {
      result.max = temp
      result.left = left
      result.right = right
    }
    // 高度小的一方往前走一步
    if (arr[left] > arr[right]) {
      right = right - 1
    } else {
      left = left + 1
    }
  }
  return result
}
console.log(maxContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]))
*/

/*
// 对于栈的运用
// 大鱼吃小鱼
// 在水中有许多鱼，可以认为这些鱼停放在 x 轴上。
// 再给定两个数组 Size，Dir，Size[i] 表示第 i 条鱼的大小，Dir[i] 表示鱼的方向 （0 表示向左游，1 表示向右游）。
// 这两个数组分别表示鱼的大小和游动的方向，并且两个数组的长度相等。
// 鱼的行为符合以下几个条件:
// 所有的鱼都同时开始游动，每次按照鱼的方向，都游动一个单位距离；
// 当方向相对时，大鱼会吃掉小鱼；
// 鱼的大小都不一样。
// 输入：Size = [4, 2, 5, 3, 1], Dir = [1, 1, 0, 0, 0]
// 输出：3
const restFish = function (sizes, dirs) {
  const len = sizes.length
  if (len <= 1) return len

  // 存活下来的鱼索引栈
  const stack = []
  for (let i = 0; i < len; i++) {
    const currSize = sizes[i]
    const currDir = dirs[i]

    // 栈非空，栈内鱼方向向右，当前鱼方向向左
    let isEate = false
    while (stack.length && dirs[stack[stack.length - 1]] === 1 && currDir === 0) {
      // 栈内鱼比当前鱼大，当前鱼要被吃掉
      if (sizes[stack[stack.length - 1]] > currSize) {
        isEate = true
        break
      }
      // 否则栈内鱼要被吃掉
      stack.pop()
    }

    // 当前鱼没被吃掉了，入栈
    if (!isEate) {
      stack.push(i)
    }
  }
  return stack
}
console.log(restFish([4, 2, 5, 3, 1], [1, 1, 0, 0, 0]))
*/

// 对于单调栈的应用
// 找出数组中右边比我小的元素
// 输入 [5, 2] 输出 [1, -1]
// 解题思路：我的左边比我大的数，我都要把它从栈里消除掉
// 被消除的索引对应的值是我的下标
/* const findRightSmall = (arr) => {
  const len = arr.length
  const result = new Array(len).fill(-1)
  const stack = []

  for (let i = 0; i < len; i++) {
    const item = arr[i]

    while (stack.length && arr[stack[stack.length - 1]] > item) {
      result[stack[stack.length - 1]] = i
      stack.pop()
    }
    stack.push(i)
  }
  return result
}

const arr = [4, 5, 6, 1, 8, 2]
console.log(findRightSmall(arr))
 */

// 寻找相同子串
// 寻找字符串B在字符串A中出现的位置，找到了返回A匹配的第一个字符的位置，否则返回-1
// 字符串A：“ABCBA”
// 字符串B：“CB”
// 返回2

// 暴力算法
/*
const findIndex = (str1, str2) => {
  const str1len = str1.length
  const str2len = str2.length
  if (str1len < str2len) return -1
  for (let i = 0; i < str1len - str2len; i++) {
    const subStr1 = str1.substr(i, str2len)
    if (str2 === subStr1) return i
  }
  return -1
}
const str1 = 'ABCBA'
const str2 = 'CB'
console.log(findIndex(str1, str2)) */

// BM算法
// 从右往左比对，坏字符/好后缀

/*
// KMP算法
// 算出部分匹配表 PMT：前缀子串和后缀子串交集
const findIndex = (str, pattern, next) => {
  let i = 0
  let j = 0
  while (i < str.length && j < pattern.length) {
    if (j === -1 || str[i] === pattern[j]) {
      i++
      j++
    } else {
      j = next[j]
    }
  }
  if (j === pattern.length) {
    return i - j
  } else {
    return -1
  }
}

const getNext = (pattern, next) => {
  next[0] = -1
  let i = 0
  let j = -1
  while (i < pattern.length) {
    console.log('i: ', i)
    if (j === -1) {
      i++
      j++
    } else if (pattern[i] === pattern[j]) {
      i++
      j++
      next[i] = j
    } else {
      j = next[j]
    }
  }
}

const str1 = 'ABCABCABCABCD'
const str2 = 'ABCABCD'
const next = new Array(str2.length)
console.log('next: ', next)
console.log(getNext([...str2], next), next)
// console.log(findIndex([...str1], [...str2], next))
*/

// js 构造函数继承的几种方式
// 1、原型继承：父级实例赋值给子级原型链，缺点：不能传参给父级
// 2、组合继承：父级实例赋值给子级原型链，并且执行父级函数，缺点：父级构造函数执行两次
// 3、寄生组合继承：父级原型链赋值给子级原型链，并且执行父级函数
// 4、拷贝继承：执行父级函数，将所有父级原型链上的方法和属性都拷贝到子级的原型链上，缺点：父子级原型链断开

/*
// 寻找最长回文序列 abcbc => cbc，子序列两端相等
// 解题思路：用 dp[i][j] 表示 i 位，和 j 位组成的最长回文子序列
// 长度为n=2,3...len的回文子序列，记录dp
// 如果 arr[i]===arr[j]，dp[i][j]=2+dp[i+1][j-1]
// 如果 arr[i]!==arr[j]，dp[i][j]=max(dp[i+1][j], dp[i][j-1])
const LPS = (str) => {
  const len = str.length
  const dp = new Array(len)

  for (let n = 2; n < len; n++) {
    for (let i = 0; i < len - n + 1; i++) {}
  }
}
*/

// 实现数组扁平化
// const arr = [1, 2, [3, 4, [5]], 6]

// 逐层结构
// function flattedArr(arr) {
//   let result = [...arr]
//   while (result.some((item) => Array.isArray(item))) {
//     result = [].concat(...result)
//   }
//   return result
// }
// console.log('result1: ', flattedArr(arr))

// 递归
// function flattedArr(arr) {
//   const result = []

//   function traverse(data) {
//     if (!Array.isArray(data)) {
//       return result.push(data)
//     }

//     data.forEach((item) => {
//       traverse(item)
//     })
//   }
//   traverse(arr)
//   return result
// }
// console.log('result2: ', flattedArr(arr))

function promiseAll(promiseArr) {
  return new Promise((resolve, reject) => {
    const len = promiseArr.length
    const result = []
    const count = 0
    for (let i = 0; i < len; i++) {
      const promiseItem = promiseArr[i]
      promiseItem
        .then((res) => {
          result[i] = res
          count++
          if (count === len) {
            resolve(result)
          }
        })
        .catch((e) => {
          reject(e)
        })
    }
  })
}
