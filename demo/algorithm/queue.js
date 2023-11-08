// 应用队列思想 广度优先遍历二叉树
// 维护一个队列，首先根节点入队，出队时，记录节点值，判断它的左右节点，非空入队
// 直到队列为空意味着遍历完成
// const binTree = {
//   value: 0,
//   left: { value: 1, left: { value: 3, left: { value: 5 } }, right: { value: 4 } },
//   right: { value: 2 }
// }

// function browserSearch(tree) {
//   const queue = [tree]
//   const result = []

//   while (queue.length) {
//     const len = queue.length
//     for (let i = 0; i < len; i++) {
//       const h = queue.shift()
//       result.push(h.value)
//       if (h.left) {
//         queue.push(h.left)
//       }
//       if (h.right) {
//         queue.push(h.right)
//       }
//     }
//   }
//   return result
// }

// 分层解法：遍历当前层，当前层节点左右节点放在下一层，当前层遍历完成后，将当前层与下一层对调
// function browserSearch(tree) {
//   let currLevel = [tree]
//   const result = []

//   while (currLevel.length) {
//     const nextLevel = []
//     currLevel.forEach((item) => {
//       result.push(item.value)
//       if (item.left) {
//         nextLevel.push(item.left)
//       }
//       if (item.right) {
//         nextLevel.push(item.right)
//       }
//     })
//     currLevel = nextLevel
//   }
//   return result
// }

// console.log(browserSearch(binTree))

// 滑动窗口问题：给定一个数组和滑动窗口的大小，请找出所有滑动窗口里的最大值。
// 输入：nums = [1,3,-1,-3,5,3], k = 3
// 输出：[3,3,5,5]
// 解题思想：维护一个长度为k的队列，使队列是一个单调递减队列，这样每次从对头取出的元素是最大的
// 在新元素入队前，和队尾元素比较，比队尾元素大，队尾元素出队，直到比队尾元素小或者队列清空，新元素入队
// 当前窗口最大的元素即是队头元素
// 如果当前窗口第一个元素和对头元素相等，说明下一步这个元素要被移出窗口，此时需要队头出队
// function solution(nums, k) {
//   const len = nums.length
//   const queue = []

//   function push(val) {
//     while (queue.length && queue[queue.length - 1] < val) {
//       queue.pop()
//     }
//     queue.push(val)
//   }

//   function pop(val) {
//     if (queue.length && queue[0] === val) {
//       queue.shift()
//     }
//   }
//   const result = []

//   for (let i = 0; i < len; i++) {
//     if (i < k - 1) {
//       push(nums[i])
//       continue
//     }
//     push(nums[i])
//     result.push(queue[0])
//     pop(nums[i - k + 1])
//   }
//   return result
// }
// console.log(solution([4, 1, 3, -1, -3, 5, 3], 3))

// 滑动窗口问题：捡金币游戏
// 给定一个数组 A[]，每个位置 i 放置了金币 A[i]，小明从 A[0] 出发。
// 当小明走到 A[i] 的时候，下一步他可以选择 A[i+1, i+k]（当然，不能超出数组边界）。
// 每个位置一旦被选择，将会把那个位置的金币收走（如果为负数，就要交出金币）
// 输入：[1,-1,-100,-1000,100,3], k = 2
// 输出：4
function getMax(nums, k) {
  const len = nums.length
  const queue = []
  const result = []

  function push(val) {
    while (queue.length && queue[queue.length - 1] < val) {
      queue.pop()
    }
    queue.push(val)
  }

  function pop(val) {
    if (queue[0] === val) {
      queue.shift()
    }
  }

  for (let i = 0; i < len; i++) {
    if (i < k) {
      const curr = i ? queue[0] + nums[i] : nums[i]
      push(curr)
      result.push(curr)
      continue
    }

    const curr = queue[0] + nums[i]
    console.log('curr: ', curr)

    result.push(curr)
    push(curr)
    pop(result[i - k])
  }
  return result
}
console.log(getMax([1, -1, -100, -1000, 100, 3], 2))
