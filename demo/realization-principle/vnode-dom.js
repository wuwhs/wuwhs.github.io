// 将虚拟DOM 转换成真实DOM
// 思想：使用深度优先递归，在叶子节点（即children为空），返回DOM节点，
// 否则遍历递归当前节点的children返回的DOM节点，插入当前节点

const data = {
  tag: 'DIV',
  attrs: {
    id: 'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [{ tag: 'A', children: [] }]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}

function vnode2Dom(vnode) {
  if (!vnode.children || !vnode.children.length) {
    return document.createElement(vnode.tag)
  }

  const dom = document.createElement(vnode.tag)
  const attrs = vnode.attrs
  if (attrs) {
    Object.keys(attrs).forEach((key) => dom.setAttribute(key, attrs[key]))
  }
  for (let child of vnode.children) {
    dom.appendChild(vnode2Dom(child))
  }
  return dom
}

console.log(vnode2Dom(data))
