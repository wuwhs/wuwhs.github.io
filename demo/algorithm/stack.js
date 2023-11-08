// 括号匹配
// 匹配的：(){()[{}]} ()({})
// 不匹配的：({)} {()]{}
// 思想：利用栈结构，取出栈顶符号与当前配对，能配对，则弹出栈顶符号，否则，入栈
function bracketsMatch(key1, key2) {
  const bracketMap = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  return bracketMap[key1] === key2
}

function isMatch(str) {
  const arr = [...str]
  const len = arr.length
  const stack = []
  arr.forEach((value) => {
    // 栈非空，取出顶层数据和现有配对
    if (stack.length) {
      if (!bracketsMatch(stack[stack.length - 1], value)) {
        stack.push(value)
      } else {
        stack.pop()
      }
    } else {
      stack.push(value)
    }
  })
  return !stack.length
}
console.log(isMatch('(){()[{}]}'))
console.log(isMatch('()({})'))
console.log(isMatch('{()]{}'))

// 在一个整形数组中，寻找满足当前数字均大于它前面的数，但是均小于它后面的数。
// [1, 2, 4, 3, 10, 13, 15, 12, 16, 18, 17]，返回 [1, 2, 10.16]
// 思想：维护一个栈，新来的数，如果小于之前的数字，之前的数字出栈，这样保证了当前的数字小于后面的数字
// 当前的数字大于当前最大的数字，则入栈，否则不入栈，这样保证了当前的数字大于前面的数字
function findNums(arr) {
  const len = arr.length
  const stack = [arr[0]]
  let max = arr[0]

  for (let i = 1; i < len; i++) {
    const curr = arr[i]

    while (stack[stack.length - 1] >= curr) {
      stack.pop()
    }
    if (curr > max) {
      stack.push(curr)
      max = curr
    }
  }
  return stack
}

console.log(findNums([1, 2, 4, 3, 10, 13, 15, 12, 16, 18, 17]))
