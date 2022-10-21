// 链表有关算法

// 创建单链表
function ListNode(value, next = null) {
  this.value = value
  this.next = next
}

// 以移动指针的形式创建单链表
function createListNode(arr) {
  let head = new ListNode()
  const result = head
  arr.forEach((value, index) => {
    head.value = value
    head.next = index < arr.length - 1 ? new ListNode() : null
    head = head.next
  })
  return result
}

// 以递归的形式创建单链表
// function createListNode(arr) {
//   const len = arr.length
//   function fn(index) {
//     if (index >= len - 1) {
//       return new ListNode(arr[index], null)
//     }
//     return new ListNode(arr[index], fn(index + 1))
//   }
//   return fn(0)
// }

const head = createListNode([1, 2, 3, 4, 4, 3, 2, 1])
console.log('head', JSON.stringify(head))

// 翻转链表
/*
  双指针移动形式翻转链表
  1->2->3->4
  null<-1<-pre cur->2->3->4
  null<-1<-2<-pre cur->3->4
  null<-1<-2<-3<-pre cur->4
  null<-1<-2<-3<-4<-pre cur->null
 */
// function reverseListNode(h) {
//   let pre = null
//   let cur = h
//   while (cur) {
//     let next = cur.next
//     cur.next = pre
//     pre = cur
//     cur = next
//   }
//   return pre
// }

// 后序递归的形式翻转链表
// function reverseListNode(h) {
//   if (!h || !h.next) return h
//   const result = reverseListNode(h.next)
//   h.next.next = h
//   h.next = null
//   return result
// }
// const reversedList = reverseListNode(head)
// console.log('reversedList: ', JSON.stringify(reversedList))

// 判断回文链表
// 后序递归遍历对比对称节点值
// function isPalindrome(h) {
//   let left = h
//   function traverse(right) {
//     if (!right) {
//       return true
//     }
//     const result = traverse(right.next)
//     const isEqual = result && right.value === left.value
//     left = left.next
//     return isEqual
//   }
//   return traverse(h)
// }
// console.log('isPalindrome: ', JSON.stringify(isPalindrome(head)))
