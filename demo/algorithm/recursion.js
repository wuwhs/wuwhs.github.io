const numDecoding = function (str) {
  if (str.charAt(0) === '0') return 0
  const chars = [...str]
  return decode(chars, chars.length - 1)
}

// 字符串转化成字符组，利用递归函数 decode，从最后一个字符串向前递归
const decode = function (chars, index) {
  if (index <= 0) return 1
  let count = 0
  let curr = chars
}
