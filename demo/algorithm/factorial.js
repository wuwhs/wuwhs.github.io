// 斐波拉契数列
// fib[n] = fib[n - 1] + fib[n - 2]
// fib[1] = 1, fib[2] = 1

// 暴力递归
// function fib (n) {
//   if (n === 1 || n === 2) return 1;
//   return fib(n - 1) + fib(n - 2)
// }
// console.log('fib(10): ', fib(10)) // fib(10):  55
// console.log('fib(20): ', fib(20)) // fib(20):  6765
// console.log('fib(50): ', fib(50)) // stack overflow

// 带备忘录递归
// function fib (n) {
//   if (n < 1) return 0
//   const memo = []
//   return helper(memo, n)
// }
// function helper (memo, n) {
//   if (n === 1 || n === 2) return 1
//   // 已经计算过了直接返回
//   if (memo[n] !== undefined) return memo[n]
//   memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
//   return memo[n]
// }
// console.log('fib(10): ', fib(10)) // fib(10):  55
// console.log('fib(20): ', fib(20)) // fib(20):  6765
// console.log('fib(50): ', fib(50)) // fib(50):  12586269025

// 尾递归
// function tailFib(n, prev, next) {
//   console.log('this: ', typeof this)
//   if (n === 0) return 0
//   if (n === 1 || n === 2) return next
//   return tailFib.call(this, n - 1, next, prev + next)
// }
// // 函数科理化
// function curry(fn) {
//   let outArgs = Array.prototype.slice.call(arguments, 1)
//   return function () {
//     let innerArgs = Array.prototype.slice.call(arguments)
//     return fn.apply('', innerArgs.concat(outArgs))
//   }
// }
// const fib = curry(tailFib, 1, 1)
// console.log('fib(10): ', fib(10)) // fib(10):  55
// console.log('fib(20): ', fib(20)) // fib(20):  6765
// console.log('fib(50): ', fib(50)) // fib(50):  12586269025

// DP table 将空间复杂度降为 `O(1)`
// function fib (n) {
//   if (n === 2 || n === 1) {
//     return 1
//   }
//   let prev = 1
//   let cur = 1
//   for (let i = 3; i <= n; i++) {
//     let sum = prev + cur
//     prev = cur
//     cur = sum
//   }
//   return cur
// }
// console.log('fib(10): ', fib(10)) // fib(10):  55
// console.log('fib(20): ', fib(20)) // fib(20):  6765
// console.log('fib(50): ', fib(50)) // fib(50):  12586269025

// coins 钱币面值 [1, 2, 5]
// 凑齐目标金额 11
// last 剩余目标金额
// const MAX_NUMBER = Number.MAX_VALUE

// const coins = [1, 2, 5]
// function coinChange(amount) {
//   let last = amount

//   // 剩余目标金额为0，所需钱币0枚
//   if (last === 0) return 0
//   // 剩余目标金额小于0 无解
//   if (last < 0) return -1

//   let min = MAX_NUMBER

//   for (let i = 0; i < coins.length; i++) {
//     let coin = coins[i]
//     last = amount - coin
//     let res = coinChange(last)
//     // 无解，跳过
//     if (res === -1) continue
//     console.log('面值分别为： ', coin)
//     min = Math.min(min, (res + 1))
//   }
//   if (min === MAX_NUMBER) return -1
//   return min
// }
// console.log('coinChange: ', coinChange(11))

var a = 20
function Fn() {
  this.a = 2
  this.b = () => {
    console.log('a: ', this.a)
  }
}

Fn.prototype.b = function () {
  this.c = 0
  console.log('c: ', c)
}

const fn = new Fn()
fn.b.call(null)
fn.prototype.b.call(null)
