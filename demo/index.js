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

const deepSearch = (sdata, parent_id, id, value) => {
  console.log('sdata: ', JSON.stringify(sdata))
  console.log('parent_id: ', parent_id)
  if (!parent_id) {
    sdata[id] = {
      value,
      children: {}
    }
    return
  }

  if (typeof sdata === 'object' && sdata.hasOwnProperty(parent_id)) {
    sdata[parent_id].children[id] = {
      value,
      children: {}
    }
    return
  }

  Object.keys(sdata).forEach(key => {
    if (sdata[key].children) {
      deepSearch(sdata[key].children, parent_id, id, value)
    }
  })
}

const parseTree = (data) => {
  return data.reduce((prev, current) => {
    const { parent_id, id, value } = current
    deepSearch(prev, parent_id, id, value)
    return prev
  }, {})
}

console.log(JSON.stringify(parseTree(data)))