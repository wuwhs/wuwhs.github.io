const buildTree = (data) => {
  if (!data && !data.length) {
    return
  }

  let unUseMap = {}
  let usedMap = {}
  let result = {}
  data.forEach((item, index, value) => {
    if (item.parent_id === null) {
      usedMap[item.id] = result[item.id] = {
        children: {}
      }
    } else {
      let parentId = item.parent_id
      if (usedMap[parentId]) {
        let parentChild = usedMap[parentId].children
        parentChild[item.id] = {
          children: {}
        }
        usedMap[item.id] = parentChild[item.id]
      }
    }
    if (unUseMap[item.id] && usedMap[item.id]) {
      usedMap[item.id].children = unUseMap[item.id]
      delete unUseMap[item.id]
    } else {
      unUseMap[item.id] = item
    }
  });
  return result
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

console.log(buildTree(data))
