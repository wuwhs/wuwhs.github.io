const a = require('./a')
const b = require('./b')

console.log('node 入口文件')
setTimeout(() => {
  console.log('b.author: ', b())
}, 1000)
