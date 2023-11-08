// 用reduce实现map
// [1, 2, 3].map((item, index) => item + index)
Array.prototype.imap = function (fn) {
  return this.reduce((prev, curr, index) => {
    prev.push(fn(curr, index))
    return prev
  }, [])
}
const result = [1, 2, 3].imap((item, index) => item + index)
console.log('result: ', result)
