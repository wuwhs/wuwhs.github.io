/** 二分搜素 */

// 递归解法，进行二分搜索
// const binarySearch = function (nums, target, low, high) {
// low = low === undefined ? 0 : low
// high = high === undefined ? nums.length : high

//   // 为了避免无线循环，先判断，如果七点位置大于终点位置，表明这是一个非法的区间
//   // 已经尝试了所有的搜索区间还是没找到结果，返回-1
//   if (low > high) {
//     return -1
//   }
//   // 取正中间那个数的下标 middle
//   let middle = low + Math.floor((high - low) / 2)

//   // 判断一下正中间的那个数是不是要找的目标数 target
//   if (nums[middle] === target) {
//     return middle
//   }

//   // 如果发现目标数在左边，就递归地从左边进行二分搜索
//   // 否则从右半边递归地二分搜索
//   if (target < nums[middle]) {
//     return binarySearch(nums, target, low, middle - 1)
//   } else {
//     return binarySearch(nums, target, middle + 1, high)
//   }
// }
// const arr = [1, 3, 4, 6, 7, 8, 10, 13, 14]
// console.log('index: ', binarySearch(arr, 7))

// 非递归解法，进行二分搜索
// const binarySearch = function (nums, target, low, high) {
// low = low === undefined ? 0 : low
// high = high === undefined ? nums.length : high

//   // 在 while 循环里，判断搜索的区间范围是否有效
//   while (low <= high) {
//     let middle = low + Math.floor((high - low) / 2)

//     // 判断一下正中间的那个数是不是要找的目标数 target
//     if (nums[middle] === target) {
//       return middle
//     }

//     // 如果发现目标数在左边，调整搜索区间的终点为 middle - 1
//     // 否则，调整搜索区间的起点为 middle + 1
//     if (target < nums[middle]) {
//       high = middle - 1
//     } else {
//       low = middle + 1
//     }
//   }

//   // 如果超出搜索区间，表明无法找到目标数，返回 -1
//   return -1
// }

// const arr = [1, 3, 4, 6, 7, 8, 10, 13, 14]
// console.log('index: ', binarySearch(arr, 7))

// 对于边界问题，进行二分搜索
// 二分法查找下边界
// const searchLowerBound = function (nums, target, low, high) {
// low = low === undefined ? 0 : low
// high = high === undefined ? nums.length : high

//   if (low > high) {
//     return -1
//   }

//   let middle = low + Math.floor((high - low) / 2)

//   // 判断是否是下边界时， 先看看 middle 的数是否为 target ，并判断该数字、是否已为数组第一个数
//   // 或者，它左边的一个数是不是已经比它小，如果都满足，即为下边界
//   if (nums[middle] === target && (middle === 0 || nums[middle - 1] < target)) {
//     return middle
//   }

//   // 如果发现目标数在左边，就递归地从左边进行二分搜索
//   // 否则从右半边递归地二分搜索
//   if (target <= nums[middle]) {
//     return searchLowerBound(nums, target, low, middle - 1)
//   } else {
//     return searchLowerBound(nums, target, middle + 1, high)
//   }
// }

// // 二分法查找上边界
// const searchUpperBound = function (nums, target, low, high) {
// low = low === undefined ? 0 : low
// high = high === undefined ? nums.length : high

//   if (low > high) {
//     return -1
//   }

//   let middle = low + Math.floor((high - low) / 2)

//   // 判断是否是上边界时，先看看 middle 的数是否为 target，并判断该数是否已为数组的最后一个数，
//   // 或者，它右边的数是不是比它大，如果都满足，即为上边界
//   if (nums[middle] === target && (middle === nums.length - 1 || nums[middle + 1] > target)) {
//     return middle
//   }

//   // 如果发现目标数在左边，就递归地从左边进行二分搜索
//   // 否则从右半边递归地二分搜索
//   if (target < nums[middle]) {
//     return searchUpperBound(nums, target, low, middle - 1)
//   } else {
//     return searchUpperBound(nums, target, middle + 1, high)
//   }
// }

// const arr = [5, 7, 7, 8, 8, 10]
// console.log('lower bound: ', searchLowerBound(arr, 8))
// console.log('upper bound: ', searchUpperBound(arr, 8))

// 对于查找模糊边界，进行二分搜索
// const firstGreaterThan = function (nums, target, low, high) {
//   low = low === undefined ? 0 : low
//   high = high === undefined ? nums.length : high

//   if (low > high) {
//     return null
//   }

//   let middle = low + Math.floor((high - low) / 2)

//   // 判断 middle 指向的数是否为第一个比 target 大的数时，须同时满足两个条件：
//   // middle 这个数必须大于 target
//   // middle 要么是第一个数，要么它之前的数小于或等于 target
//   if (nums[middle] > target && (middle === 0 || nums[middle - 1] <= target)) {
//     return middle
//   }

//   if (target < nums[middle]) {
//     return firstGreaterThan(nums, target, low, middle - 1)
//   } else {
//     return firstGreaterThan(nums, target, middle + 1, high)
//   }
// }

// const arr = [-2, 0, 1, 4, 7, 9, 10]
// console.log(firstGreaterThan(arr, 6))

// 对于旋转过的排序数组，进行二分搜索
// const binarySearch = function (nums, target, low, high) {
//   low = low === undefined ? 0 : low
//   high = high === undefined ? nums.length : high

//   let middle = low + Math.floor((high - low) / 2)

//   // 判断中位数是否要找的数
//   if (nums[middle] === target) {
//     return middle
//   }

//   // 判断左半边是不是排好序
//   if (nums[low] <= nums[middle]) {
//     // 判断目标值是否在左半边
//     // 是，则在左半边搜索
//     // 否，则在右半边搜索
//     if (nums[low] <= target && target < nums[middle]) {
//       return binarySearch(nums, target, low, middle - 1)
//     }
//     return binarySearch(nums, target, middle + 1, high)
//   } else {
//     // 右半边是排好序的那一半，判断目标值是否在右边
//     // 是，则在右半边继续进行二分搜索
//     // 否，则在左半边进行二分搜索
//     if (nums[middle] < target && target <= nums[high]) {
//       return binarySearch(nums, target, middle + 1, high)
//     }
//     return binarySearch(nums, target, low, middle - 1)
//   }
// }

// const arr = [4, 5, 6, 7, 0, 1, 2]
// console.log(binarySearch(arr, 6))

// 对于不定长边界问题，进行二分搜索
// 不断试探在什么位置出现空的日志
const getUpperBound = function (logs, high) {
  high = high === undefined ? 1 : high

  if (logs[high] === null) {
    return high
  }
  if (logs[high] === undefined) {
    return logs.length
  }
  return getUpperBound(logs, high * 2)
}

// 运用二分搜索寻找日志长度
const binarySearch = function (logs, low, high) {
  low = low === undefined ? 0 : low
  high = high === undefined ? logs.length : high

  if (low > high) {
    return -1
  }

  let middle = low + Math.floor((high - low) / 2)

  if (logs[middle] === null && logs[middle - 1] !== null) {
    return middle
  }

  if (logs[middle] === null) {
    return binarySearch(logs, low, middle - 1)
  } else {
    return binarySearch(logs, middle + 1, high)
  }
}

const arr = [1, 2, 3, 4, 5, null, null, null]
console.log(binarySearch(arr, 0, getUpperBound(arr)))
