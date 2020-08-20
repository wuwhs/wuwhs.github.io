
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
// const insertionSort = function (arr) {
//   const len = arr.length
//   for (let i = 1; i < len; i++) {
//     let current = arr[i]
//     for (let j = i - 1; j >= 0; j--) {
//       // current 小于 j 指向的左侧值，将 j 指向左侧值右移一位
//       if (current < arr[j]) {
//         arr[j + 1] = arr[j]
//       } else {
//         // 否则将 current 插入到 j 位置，跳出内循环
//         arr[j] = current
//         break
//       }
//     }
//   }
// }

// const arr = [2, 1, 7, 9, 5, 8]
// insertionSort(arr)
// console.log('arr: ', arr)

// 归并排序
const mergeSort = function (arr, lo = 0, hi = arr.length - 1) {
  // 判断是否剩下最后一个元素
  if (lo >= hi) return

  // 从中间将数组分成两部分
  let mid = lo + Math.floor((hi - lo) / 2)

  // 分别递归将左右两边排好序
  mergeSort(arr, lo, mid)
  mergeSort(arr, mid + 1, hi)

  // 将排好序的左右两半合并
  merge(arr, lo, mid, hi)
}

const merge = function (arr, lo, mid, hi) {
  // 复制一份原来的数组
  const copy = [...arr]

  // 定义一个 k 指针表示从什么位置开始修改原来的数组，
  // i 指针表示左边半的起始位置
  // j 指针便是右半边的其实位置
  let k = lo
  let i = lo
  let j = mid + 1

  while (k <= hi) {
    if (i > mid) {
      arr[k++] = copy[j++]
    } else if (j > hi) {
      arr[k++] = copy[i++]
    } else if (copy[j] < copy[i]) {
      arr[k++] = copy[j++]
    } else {
      arr[k++] = copy[i++]
    }
  }
}
const arr = [2, 1, 7, 9, 5, 8]
mergeSort(arr)
console.log('arr: ', arr)