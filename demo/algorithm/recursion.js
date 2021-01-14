/** 递归算法 */

// 数字编码 0 -> 'A' 1 -> 'B' ... 26 -> 'Z'
// const numDecoding = function (str) {
//   if (str.charAt(0) === '0') return 0
//   const chars = [...str]
//   return decode(chars, chars.length - 1)
// }

// // 字符串转化成字符组，利用递归函数 decode，从最后一个字符串向前递归
// const decode = function (chars, index) {
//   if (index <= 0) return 1
//   let count = 0
//   let curr = chars[index]
//   let prev = chars[index - 1]

//   // 当前字符比 `0` 大，则直接利用它之前的字符串所求得结果
//   if (curr > '0') {
//     count = decode(chars, index - 1)
//   }

//   // 由前一个字符和当前字符构成的数字，值必须要在1和26之间，否则无法编码
//   if (prev === '1' || (prev == '2' && curr <= '6')) {
//     count += decode(chars, index - 2)
//   }

//   return count
// }

// console.log('count: ', numDecoding('1213'))

// 找到所有长度为 n 的中心对称数
// const helper = function (n) {
//   debugger
//   // 第一步：判断输入或状态是否非法
//   if (n < 0) {
//     throw new Error('illegal argument')
//   }

//   // 第二步：判读递归是否应当结束
//   if (n === 0) {
//     return ['']
//   }
//   if (n === 1) {
//     return ['0', '1', '8']
//   }

//   // 第三步：缩小问题规模
//   const list = helper(n - 2)

//   // 第四步：整合结果
//   const res = []

//   for (let i = 0; i < list.length; i++) {
//     let s = list[i]
//     res.push('1' + s + '1')
//     res.push('6' + s + '9')
//     res.push('8' + s + '8')
//     res.push('9' + s + '6')
//   }
//   return res
// }
// console.log(helper(2))

// 汉诺塔问题
// const hano = function (A, B, C, n) {
//   if (n > 0) {
//     hano(A, C, B, n - 1)
//     move(A, C)
//     hano(B, A, C, n - 1)
//   }
// }

// const move = function (p, c) {
//   const temp = p.pop()
//   console.log('move p: ', String(p))
//   console.log('move c: ', String(c))
//   console.log('move item: ', temp)
//   console.log('--------')
//   c.push(temp)
// }
// const a = [1, 2, 3, 4, 5]
// const b = []
// const c = []
// hano(a, b, c, a.length)

// console.log('----after----')
// console.log('a: ', String(a))
// console.log('b: ', String(b))
// console.log('c: ', String(c))
