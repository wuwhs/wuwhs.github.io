const list = [
  { id: 1, title: '解忧杂货铺1', pid: 0 },
  { id: 2, title: '解忧杂货铺2', pid: 0 },
  { id: 3, title: '解忧杂货铺2-1', pid: 2 },
  { id: 4, title: '解忧杂货铺3-1', pid: 3 },
  { id: 5, title: '解忧杂货铺4-1', pid: 4 },
  { id: 6, title: '解忧杂货铺2-2', pid: 2 }
]

// 扁平数组转换成树结构
function arr2Tree(list) {
  const result = []
  // 收集所有项：id为key，对应值为value
  const dp = list.reduce((prev, curr) => {
    prev[curr.id] = curr
    return prev
  }, {})

  for (item of list) {
    // 收集所有根节点
    if (item.pid === 0) {
      result.push(item)
      continue
    }

    // 找到当前节点的父节点，并放入到它的子节点中
    if (dp[item.pid]) {
      if (!dp[item.pid].children) {
        dp[item.pid].children = []
      }
      dp[item.pid].children.push(item)
    }
  }
  return result
}

const tree = arr2Tree(list)

console.log('arr2Tree: ', JSON.stringify(tree))

function resolve(data, result) {
  const { id, pid, title } = data
  result.push({ id, title, pid })

  if (data.children && data.children.length) {
    for (let child of data.children) {
      resolve(child, result)
    }
  }
}

// 树转换成扁平数组结构
function tree2Arr(tree) {
  const result = []
  for (let item of tree) {
    resolve(item, result)
  }
  return result
}
console.log('tree2Arr: ', tree2Arr(tree))
