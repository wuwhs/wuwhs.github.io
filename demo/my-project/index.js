class Observer {
  constructor () {
    this.data = {}
  }
  // 监听
  listen (key, callback) {
    if (!this.data.hasOwnProperty(key)) {
      this.data[key] = []
    }
    this.data[key].push(callback)
  }
  // 触发
  trigger (...args) {
    const key = args[0]
    const callbacks = this.data[key]
    if (!callbacks || !Array.isArray(callbacks) || !callbacks.length) return

    callbacks.forEach((callback) => callback.apply(this, args.slice(1)))
  }
  // 删除
  remove (key, callback) {
    const callbacks = this.data[key]
    if (!callbacks) return

    if (!callback) {
      callbacks.length = 0
    } else {
      const index = callbacks.findIndex((value) = value === callback)
      callbacks.splice(index, 1)
    }
  }
}

const fn = () => {
  console.log('fn')
}
const ob = new Observer()
ob.listen('key1', fn)
console.log('ob: ', ob)
ob.trigger('key1')
ob.remove('key1')
console.log('ob: ', ob)
