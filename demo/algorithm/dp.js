// // 寻找最长子序列
// // 递归，自顶而下的方式
// class LongestSubsequence {
//   constructor(nums) {
//     this.max = 1
//     this.smap = new Map()
//     this.recursion(nums, nums.length)
//   }
//   recursion(nums, n) {
//     if (this.smap.has(n)) {
//       return this.smap.get(n)
//     }
//     if (n <= 1) {
//       return n
//     }

//     let result = 0
//     let maxEndingHere = 1

//     // 从头遍历数组，递归求出以每个点为结尾的子数组中最长上升序列的长度
//     for (let i = 1; i < n; i++) {
//       result = this.recursion(nums, i)

//       if (nums[i - 1] < nums[n - 1] && result + 1 > maxEndingHere) {
//         maxEndingHere = result + 1
//       }
//     }

//     // 判断一下，如果那个数比目前最后一个数小，那么就能构成一个新的上升子序列
//     if (this.max < maxEndingHere) {
//       this.max = maxEndingHere
//     }

//     this.smap.set(n, maxEndingHere)
//     // 返回以当前数结尾的上升子序列的最长长度
//     return maxEndingHere
//   }
// }

// const arr = [10, 9, 2, 5, 3, 7, 101, 18]
// const ls = new LongestSubsequence(arr)
// console.log('ls: ', ls.max)

// class LongestSubsequence {
//   constructor(nums) {
//     this.max = 1
//     // 初始化 dp 数组里的每个元素的值为 1，即以每个元素作为结尾的最长子序列的长度初始化为 1
//     this.dp = new Array(nums.length).fill(1)
//     this.init(nums)
//   }

//   init(nums) {
//     let n = nums.length
//     const { dp } = this
//     // 自底而上求解每个子问题的最优解
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < i; j++) {
//         if (nums[j] < nums[i] && dp[i] < dp[j] + 1) {
//           dp[i] = dp[j] + 1
//         }
//       }
//       // 当前计算好的长度与全局的最大值进行比较
//       this.max = Math.max(this.max, dp[i])
//     }
//   }
// }

// const arr = [10, 9, 2, 5, 3, 7, 101, 18]
// const ls = new LongestSubsequence(arr)
// console.log('ls: ', ls.max)

// // 求不相邻数最大和
// const rob = function (nums) {
//   let n = nums.length

//   // 处理当数组为空或者数组只有一个元素的情况
//   if (n === 0) return 0
//   if (n === 1) return nums[0]

//   // 定义一个 dp 数组，dp[i] 表示到第 i 个元素为止我们能收获到的最大总数
//   const dp = []

//   // 初始化 dp[0], dp[1]
//   dp[0] = nums[0]
//   dp[1] = Math.max(nums[0], nums[1])

//   // 对于每个 nums[i]，考虑两种情况，选还是不选，然后取最大值
//   for (let i = 2; i < n; i++) {
//     dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
//   }

//   return dp[n - 1]
// }

// const arr = [10, 9, 2, 5, 3, 7, 101, 18]
// console.log('rb: ', rob(arr))

// 最大回文
const LPS = function (s) {
  let n = s.length
  // 定义 dp 矩阵， dp[i][j] 表示从字符串第 i 个字符
  // 到第 j 个字符之间的最大回文
  const dp = new Array(n)

  // 初始化 dp 矩阵，将对角线元素设为 1，即单个字符的回文长度为 1
  for (let i = 0; i < n; i++) {
    dp[i] = [...new Array(n)]
    dp[i][i] = 1
  }
  console.log('dp: ', dp)
  // 从长度为 2 开始，尝试将区间扩大，一直扩大到 n
  for (let len = 2; len <= n; len++) {
    // 扩大的过程中，每次都得出区间的真实位置 i 和结束位置j
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1

      // 比较一下区间首尾的字符是否相等，如果相等，就加2
      // 如果不等，从规模更小的字符串中得出最长的回文长度
      if (s.charAt(i) === s.charAt(j)) {
        dp[i][j] = 2 + (len === 2 ? 0 : dp[i + 1][j - 1])
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[0][n - 1]
}

console.log(LPS('abcbc'))

// 在一个整形数组中，寻找满足当前数字均大于它前面的数，但是均小于它后面的数。
// [1, 2, 4, 3, 10, 13, 15, 12, 16, 18, 17]，返回 [1, 2, 10.16]
function findNumber(arr) {
  // 从左到右遍历，找出当前数字的左边最大的数leftMax，如果当前的数大于leftMax这是条件一
  // 从右往左遍历，找到当前数字比右边最小的数minRight，如果当前数字小于minRight这是条件二
  // 条件一、二都满足则是要找的数字
  const len = arr.length
  const dp = findRightMin(arr)
  let leftMax = -1
  const result = []

  for (let i = 0; i < len; i++) {
    let curr = arr[i]
    if (curr > leftMax) {
      leftMax = curr
      // 比右边最小的都小，则比右边所有的都小
      if (curr <= dp[i]) {
        result.push(curr)
      }
    }
  }
  return result
}

function findRightMin(arr) {
  const len = arr.length
  const dp = new Array(len)
  let rightMin = Number.MAX_VALUE

  for (let i = len - 1; i >= 0; i--) {
    let curr = arr[i]
    if (curr < rightMin) {
      rightMin = curr
    }
    dp[i] = rightMin
  }
  return dp
}
console.log(findNumber([1, 2, 4, 3, 10, 13, 15, 12, 16, 18, 17]))
