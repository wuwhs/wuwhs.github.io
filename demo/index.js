// const list = [1, 2, 3]
// const square = num => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * num)
//     }, 1000)
//   })
// }
// function test() {
//   list.forEach(async x => {
//     const res = await square(x)
//     console.log(res)
//   })
// }
// async function test() {
//   for (let i = 0; i < list.length; i++) {
//     const res = await square(list[i])
//     console.log(res)
//   }
// }
// let i = 0
// function test() {
//   return new Promise((resolve) => {
//     return resolve(square(list[i]))
//   }).then((opt1, opt2) => {
//     console.log('opt1: ', opt1)
//     console.log('opt2: ', opt2)
//     i++;
//     if (i < list.length) {
//       test()
//     }
//   })
// }

// test()

// const tree = {
//   a: {
//     value: 'aaa',
//     children: {
//       b: {
//         value: 'bbb',
//         children: {}
//       },
//       d: {
//         value: 'ddd',
//         children: {
//           g: {
//             value: 'ggg',
//             children: {
//               f: {
//                 value: 'fff',
//                 children: {}
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// const data = [
//   {
//     parent_id: null,
//     id: 'a',
//     value: 'xxx'
//   },
//   {
//     parent_id: 'a',
//     id: 'b',
//     value: 'xxx'
//   },
//   {
//     parent_id: 'a',
//     id: 'd',
//     value: 'xxx'
//   },
//   {
//     parent_id: 'd',
//     id: 'g',
//     value: 'xxx'
//   },
//   {
//     parent_id: 'g',
//     id: 'f',
//     value: 'xxx'
//   }
// ]

function ListNode(val = 0, next = null) {
  this.val = val
  this.next = next
}

// array -> ListNode
/*
// 递归方式创建单向链表
function createListNode(arr) {
  const n = arr.length
  function fn(i) {
    if (i >= n - 1) return new ListNode(arr[i])
    return new ListNode(arr[i], fn(i + 1))
  }
  return fn(0)
}
*/

// 移动指针的方式创建单向链表
/* function createListNode(arr) {
  let result = new ListNode()
  let head = result
  arr.forEach((value) => {
    result.val = value
    result.next = new ListNode()
    result = result.next
  })
  return head
}

const arr = [2, 3, 4, 5, 8, 2]
console.log(createListNode(arr)) */

// ListNode -> array
/* function spreadListNodeValue(list) {
  const result = []
  let l = list
  while (l.next) {
    result.push(l.val)
    l = l.next
  }
  result.push(l.val)
  return result
} */

/* const fs = require('fs')
const buf = new Buffer.alloc(1024)

fs.open('main.js', 'r+', function (err, fd) {
  if (err) {
    return console.error(err)
  }

  // 截取文件
  fs.ftruncate(fd, 10, function (err) {
    if (err) {
      console.error(err)
    }

    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
      if (err) {
        console.error(err)
      }
      if (bytes > 0) {
        console.log(buf.slice(0, bytes).toString())
      }

      fs.close(fd, function (err) {
        if (err) {
          console.error(err)
        }
      })
    })
  })
}) */

// function* gen() {
//   const num1 = yield 1
//   console.log('num1: ', num1)
//   const num2 = yield 2
//   console.log('num1: ', num2)
//   return 3
// }
// const g = gen()
// console.log(g.next()) // { value: 1, done: false }
// console.log(g.next(11111))
// 11111
//  { value: 2, done: false }
// console.log(g.next(22222))
// 22222
// { value: 3, done: true }

const str = 'my name is ${name}, age ${age}, address ${address.province} ${address.city}'
const reg = /\$\{(.+?)\}/g
var match = null
const employee = {
  name: 'wu',
  age: 20,
  address: {
    province: 'guandong',
    city: 'shenzhen'
  }
}

// 通过正则匹配替换方式
function getObjValue(exp, obj) {
  const expArr = exp.split('.')
  return expArr.reduce(function (prev, curr) {
    return (prev = prev[curr])
  }, obj)
}

String.prototype.render = function () {
  let temp = this
  while ((match = reg.exec(str)) !== null) {
    temp = temp.replace(match[0], getObjValue(match[1], employee))
  }
  return temp
}
console.log(str.render(employee))

// ES6 new Function 方式: new Function ([arg1, arg2, ...argN], functionBody);
// const keys = Object.keys(employee)
// const values = Object.values(employee)

// const result = new Function(...keys, `return \`${str}\`;`)(...values)
// console.log(result)
