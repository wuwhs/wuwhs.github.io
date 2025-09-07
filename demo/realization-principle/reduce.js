// 实现 reduce
// Array.prototype.ireduce = function reduce(cb, initValue) {
//   const arr = this
//   const len = arr.length
//   let result = initValue || arr[0]
//   for (let i = initValue ? 0 : 1; i < len; i++) {
//     result = cb(result, arr[i], i, arr)
//   }
//   return result
// }

// const r = [1, 2, 3].ireduce(function (prev, curr) {
//   return prev + curr
// }, 100)
// console.log('r: ', r)

Array.prototype.myReduce = function (fn, initial) {
  var type = typeof initial
  var isUndefined = type === 'undefined'
  var prev = isUndefined ? this[0] : initial
  for (var i = isUndefined ? 1 : 0; i < this.length; i++) {
    var curr = this[i]
    prev = fn(prev, curr, i)
  }
  return prev
}

var result = [1, 2, 3].myReduce((prev, curr, index) => {
  prev.push(curr + index)
  return prev
}, [])
console.log('resut: ', result)
