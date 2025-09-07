/** 广度优先遍历算法 */
/*
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

const bfs = function (maze, x, y) {
  const queue = []
  queue.push([x, y])

  while (queue.length) {
    // 从队列头取出当前点
    const pos = queue.shift()
    x = pos[0]
    y = pos[1]

    // 从四个方向进行 BFS
    for (let d = 0; d < 4; d++) {
      let i = x + dx(d)
      let j = y + dy(d)

      if (isSafe(maze, i, j)) {
        // 记录步数（标记访问过）
        maze[i][j] = maze[x][y] + 1
        // 然后添加到队列中
        queue.push([i, j])
        // 如果发现了目的地就返回
        if (i === target[0] && j === target[1]) return
      }
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
bfs(maze, 0, 3)
console.log('shortest path count is: ', maze[target[0]][target[1]])
*/
