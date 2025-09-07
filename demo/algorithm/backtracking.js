// const combinationSum = function (candidates, target) {
//   const results = []
//   backtracking(candidates, target, 0, [], results)
//   return results
// }

// const backtracking = function (candidates, target, start, solution, results) {
//   if (target < 0) {
//     return false
//   }

//   if (target === 0) {
//     results.push([...solution])
//     return true
//   }

//   for (let i = start; i < candidates.length; i++) {
//     solution.push(candidates[i])
//     backtracking(candidates, target - candidates[i], i, solution, results)
//     solution.pop()
//   }
// }

// console.log(combinationSum([1, 2, 3], 5))

// N 皇后问题
const check = function (row, col, columns) {
  for (let r = 0; r < row; r++) {
    // 其他皇后是否在当前放置皇后的列和对角线上
    if ((columns[r] = col || row - r == Math.abs(columns[r] - col))) {
      return false
    }
  }
  return true
}

const totalNQueens = function (n) {
  const results = []
  backtracking(n, 0, [], [], results)
  console.log('results: ', results)
  console.log('count: ', results.length)
}

const backtracking = function (n, row, columns, solution, results) {
  // 是否在所有 n 行里都摆好了皇后
  if (row === n) {
    results.push([...solution])
    return
  }

  // 尝试将皇后放置到当前行中的每一列
  for (let col = 0; col < n; col++) {
    columns[row] = col
    solution.push([row, col])

    // 检查是否合法，如果合法就继续到下一行
    if (check(row, col, columns)) {
      backtracking(n, row + 1, columns, solution, results)
    }
    solution.pop()
    // 如果不合法，就不要把皇后放在这列中
    columns[row] = -1
  }
}

totalNQueens(3)
