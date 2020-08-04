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

const tree = {
  a: {
    value: 'aaa',
    children: {
      b: {
        value: 'bbb',
        children: {}
      },
      d: {
        value: 'ddd',
        children: {
          g: {
            value: 'ggg',
            children: {
              f: {
                value: 'fff',
                children: {}
              }
            }
          }
        }
      }
    }
  }
}

const data = [
  {
    parent_id: null,
    id: 'a',
    value: 'xxx'
  },
  {
    parent_id: 'a',
    id: 'b',
    value: 'xxx'
  },
  {
    parent_id: 'a',
    id: 'd',
    value: 'xxx'
  },
  {
    parent_id: 'd',
    id: 'g',
    value: 'xxx'
  },
  {
    parent_id: 'g',
    id: 'f',
    value: 'xxx'
  }
]
