// 寻找最长子序列
class LongestSubsequence {
  constructor(nums) {
    this.max = 1
    this.smap = new Map()
    this.recursion(nums, nums.length)
  }
  recursion(nums, n) {
    if (this.smap.has(n)) {
      return this.smap.get(n)
    }
    if (n <= 1) {
      return n
    }

    let result = 0
    let maxEndingHere = 1

    // 从头遍历数组，递归求出以每个点为结尾的子数组中最长上升序列的长度
    for (let i = 1; i < n; i++) {
      result = this.recursion(nums, i)

      if (nums[i - 1] < nums[n - 1] && result + 1 > maxEndingHere) {
        maxEndingHere = result + 1
      }
    }

    // 判断一下，如果那个数比目前最后一个数小，那么就能构成一个新的上升子序列
    if (this.max < maxEndingHere) {
      this.max = maxEndingHere
    }

    this.smap.set(n, maxEndingHere)
    // 返回以当前数结尾的上升子序列的最长长度
    return maxEndingHere
  }
}

const arr = [10, 9, 2, 5, 3, 7, 101, 18]
const ls = new LongestSubsequence(arr)
console.log('ls: ', ls.max)
