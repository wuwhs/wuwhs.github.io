/** 深度优先遍历算法 */

// 迷宫：从起点到达设定终点，要求绕过中间设置的障碍
// 通过递归的方式实现

// 目标点
// const target = [4, 2]

// // 水平方向偏移量
// const dx = function (d) {
//   switch (d) {
//     case 0:
//       return 1
//     case 1:
//       return 0
//     case 2:
//       return -1
//     case 3:
//       return 0
//   }
// }

// // 竖直方向偏移量
// const dy = function (d) {
//   switch (d) {
//     case 0:
//       return 0
//     case 1:
//       return 1
//     case 2:
//       return 0
//     case 3:
//       return -1
//   }
// }

// // 是否在安全范围：未超界并且不在障碍上
// const isSafe = function (maze, i, j) {
//   return i >= 0 && i < maze.length && j >= 0 && j < maze[0].length && maze[i][j] !== -1
// }

// const results = []
// const dfs = function (maze, x, y) {
//   // 第一步：判断是否找到B
//   if (x === target[0] && y === target[1]) {
//     return true
//   }

//   // 第二步：标记当前的点已经被访问过
//   maze[x][y] = -1

//   // 第三步：在四个方向上尝试
//   for (let d = 0; d < 4; d++) {
//     let i = x + dx(d)
//     let j = y + dy(d)

//     // 第四步：如果有一条路径被找到了，返回true
//     if (isSafe(maze, i, j) && dfs(maze, i, j)) {
//       results.unshift([i, j])
//       return true
//     }
//   }
//   return false
// }

// const maze = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, -1, 0, 0, 0],
//   [0, 0, -1, 0, 0, 0],
//   [0, 0, -1, 0, 0, 0],
//   [0, -1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, -1]
// ]
// console.log('dfs: ', dfs(maze, 0, 3))
// console.log('results: ', results)

// 非递归方式实现
// 目标点
// const target = [4, 2]

// // 水平方向偏移量
// const dx = function (d) {
//   switch (d) {
//     case 0:
//       return 1
//     case 1:
//       return 0
//     case 2:
//       return -1
//     case 3:
//       return 0
//   }
// }

// // 竖直方向偏移量
// const dy = function (d) {
//   switch (d) {
//     case 0:
//       return 0
//     case 1:
//       return 1
//     case 2:
//       return 0
//     case 3:
//       return -1
//   }
// }

// // 是否在安全范围：未超界并且不在障碍上
// const isSafe = function (maze, i, j) {
//   return i >= 0 && i < maze.length && j >= 0 && j < maze[0].length && maze[i][j] !== -1
// }

// const dfs = function (maze, x, y) {
//   // 创建一个 Stack
//   const stack = []

//   // 将起始点压入栈，标记它访问过
//   stack.push([x, y])
//   maze[x][y] = -1

//   while (stack.length) {
//     // 取出当前点
//     const pos = stack.pop()
//     x = pos[0]
//     y = pos[1]

//     // 判断是否找到了目的地
//     if (x === target[0] && y === target[1]) {
//       return true
//     }

//     // 在四个方向上尝试
//     for (let d = 0; d < 4; d++) {
//       let i = x + dx(d)
//       let j = y + dy(d)
//       if (isSafe(maze, i, j)) {
//         stack.push([i, j])
//         maze[i][j] = -1
//       }
//     }
//   }
//   return false
// }

// const maze = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, -1, 0, 0, 0],
//   [0, 0, -1, 0, 0, 0],
//   [0, 0, -1, 0, 0, 0],
//   [0, -1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, -1]
// ]
// console.log('dfs: ', dfs(maze, 0, 3))

// 通过 DFS 算法求最短路径
// 记录每一步和起始点的距离
// 从某方向到达该点所需的步数更少，则更新。从各个方向到达该点所需要的步数都更多，则不再尝试

// 目标点
const target = [4, 2]

// 起点
const begain = [0, 3]

// 水平方向偏移量
const dx = function (d) {
  switch (d) {
    case 0:
      return 1
    case 1:
      return 0
    case 2:
      return -1
    case 3:
      return 0
  }
}

// 竖直方向偏移量
const dy = function (d) {
  switch (d) {
    case 0:
      return 0
    case 1:
      return 1
    case 2:
      return 0
    case 3:
      return -1
  }
}

// 是否在安全范围：未超界并且不在障碍上
const isSafe = function (maze, i, j) {
  return i >= 0 && i < maze.length && j >= 0 && j < maze[0].length && maze[i][j] !== -1
}

const solve = function (maze) {
  // 第一步，除了起始点外，其他点都用 MAX_VALUE 替代
  for (let i = 0; i < maze.length; i++) {
    maze[i].fill(Number.MAX_VALUE)
  }
  maze[begain[0]][begain[1]] = 0

  // 第二步，进行优化的 DFS 操作
  dfs(maze, ...begain)

  // 第三步，是否找到了目的地
  if (maze[target[0]][target[1]] < Number.MAX_VALUE) {
    console.log('shortest path count is: ', maze[target[0]][target[1]])
  } else {
    console.log('can not find target')
  }
}

const dfs = function (maze, x, y) {
  // 第一步，判断是否找到了目标点
  if (x === target[0] && y === target[1]) return

  // 第二步，在四个方向上尝试
  for (let d = 0; d < 4; d++) {
    let i = x + dx(d)
    let j = y + dy(d)

    // 判断下一个点的步数是否比目前的步数+1还要大
    if (isSafe(maze, i, j) && maze[i][j] > maze[x][y] + 1) {
      // 如果是，更新下一个点的步数，并继续 DFS 下去
      maze[i][j] = maze[x][y] + 1
      dfs(maze, i, j)
    }
  }
}

const maze = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, -1, 0, 0, 0],
  [0, 0, -1, 0, 0, 0],
  [0, 0, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, -1]
]
solve(maze)
