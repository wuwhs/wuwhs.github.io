// function match(str1, str2) {
//   if (str1 === '(' && str2 === ')') return true
//   if (str1 === '{' && str2 === '}') return true
//   if (str1 === '[' && str2 === ']') return true
//   return false
// }

// function isMatch(str) {
//   const stack = []
//   const arr = [...str]
//   const len = arr.length
//   for (let i = 0; i < len; i++) {
//     const item = arr[i]
//     if (stack.length) {
//       const top = stack[stack.length - 1]
//       if (match(top, item)) {
//         stack.pop()
//         continue
//       }
//       stack.push(item)
//     } else {
//       stack.push(item)
//     }
//   }
//   return !stack.length
// }

// console.log(isMatch('(){()[{}]}'))
// console.log(isMatch('(){}'))
// console.log(isMatch('({)}'))

function find_number(arr) {
  const len = arr.length
  let max = 0
  const result = []
  const rightDb = rightLarge(arr)
  // console.log('rightDb: ', rightDb)
  for (let i = 0; i < len; i++) {
    const item = arr[i]
    if (item > max) {
      max = item
      // let isRightLarge = arr.slice(i + 1).some((it) => it < item)
      // if (!isRightLarge) {
      //   result.push(item)
      // }
      if (rightDb[i] >= item) {
        result.push(item)
      }
    }
  }

  return result
}
console.log(find_number([1, 2, 4, 3, 10, 13, 15, 12, 16, 18, 17]))

function rightLarge(arr) {
  const len = arr.length
  const dp = new Array(len).fill(0)
  let min = Number.MAX_VALUE
  for (let i = len - 1; i >= 0; i--) {
    const item = arr[i]
    if (item < min) {
      min = item
      dp[i] = item
      continue
    }
    dp[i] = min
  }

  return dp
}
console.log(rightLarge([1, 2, 4, 3, 10, 13, 15, 12, 16, 18, 17]))
