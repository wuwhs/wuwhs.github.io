/** 排序算法 */

// 冒泡排序算法
// const bubbleSort = function (arr) {
//   const len = arr.length
//   // 标记每一轮是否发生来交换
//   let hasChange = true

//   // 如果没有发生交换则已经是排好序的，直接跳出外层遍历
//   for (let i = 0; i < len && hasChange; i++) {
//     hasChange = false
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//         hasChange = true
//       }
//     }
//   }
// }

// const arr = [2, 1, 7, 9, 5, 8]
// bubbleSort(arr)
// console.log('arr: ', arr)

// 插入排序
const insertionSort = function (arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let current = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      // current 小于 j 指向的左侧值，将 j 指向左侧值右移一位
      if (current < arr[j]) {
        arr[j + 1] = arr[j]
        if (j === 0) arr[j] = current
      } else {
        // 否则将 current 插入到 j 位置，跳出内循环
        arr[j] = current
        break
      }
    }
  }
}

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
insertionSort(arr)
console.log('arr: ', arr)

// 归并排序
// const mergeSort = function (arr, lo, hi) {
//   if (lo === undefined) {
//     lo = 0
//   }
//   if (hi === undefined) {
//     hi = arr.length - 1
//   }

//   // 判断是否剩下最后一个元素
//   if (lo >= hi) return

//   // 从中间将数组分成两部分
//   let mid = lo + Math.floor((hi - lo) / 2)
//   console.log('mid', mid)

//   // 分别递归将左右两边排好序
//   mergeSort(arr, lo, mid)
//   mergeSort(arr, mid + 1, hi)

//   // 将排好序的左右两半合并
//   merge(arr, lo, mid, hi)
// }

// const merge = function (arr, lo, mid, hi) {
//   // 复制一份原来的数组
//   const copy = [...arr]

//   // 定义一个 k 指针表示从什么位置开始修改原来的数组，
//   // i 指针表示左边半的起始位置
//   // j 指针便是右半边的其实位置
//   let k = lo
//   let i = lo
//   let j = mid + 1

//   while (k <= hi) {
//     if (i > mid) {
//       arr[k++] = copy[j++]
//     } else if (j > hi) {
//       arr[k++] = copy[i++]
//     } else if (copy[j] < copy[i]) {
//       arr[k++] = copy[j++]
//     } else {
//       arr[k++] = copy[i++]
//     }
//   }
// }
// const arr = [2, 1, 7, 9, 5, 8]
// mergeSort(arr)
// console.log('arr: ', arr)

/*
// 快速排序
const quickSort = function (arr, lo, hi) {
  if (lo === undefined) {
    lo = 0
  }
  if (hi === undefined) {
    hi = arr.length - 1
  }

  // 判断是否只剩下一个元素，是，则直接返回
  if (lo >= hi) return

  // 利用 partition 函数找到一个随机的基准点
  const p = partition(arr, lo, hi)

  // 递归对基准点左半边和右半边的数进行排序
  quickSort(arr, lo, p - 1)
  quickSort(arr, p + 1, hi)
}

// 交换数组位置
const swap = function (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 随机获取位置索引
const randomPos = function (lo, hi) {
  return lo + Math.floor(Math.random() * (hi - lo))
}

const partition = function (arr, lo, hi) {
  const pos = randomPos(lo, hi)
  console.log('pos: ', pos)
  swap(arr, pos, hi)

  let i = lo
  let j = lo

  // 从左到右用每个数和基准值比较，若比基准值小，则放在指针 i 指向的位置
  // 循环完毕后，i 指针之前的数都比基准值小
  while (j < hi) {
    if (arr[j] <= arr[hi]) {
      swap(arr, i++, j)
    }
    j++
  }
  // 末尾的基准值放置到指针 i 的位置， i 指针之后的数都比基准值大
  swap(arr, i, j)

  // 返回指针 i，作为基准点的位置
  return i
}

const arr = [2, 1, 7, 9, 5, 8]
quickSort(arr)
console.log(arr)
*/
