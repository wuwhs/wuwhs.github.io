class Observer {
  constructor(data) {
    this.observer(data)
  }

  observer(data) {
    // 对data原有属性改成set和get形式
    if (!data || typeof data !== 'object') return

    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key])
      // 深度遍历劫持
      this.observer(data[key])
    })
  }

  // 定义响应式
  defineReactive(obj, key, value) {
    let _this = this
    // 每个变化的数据，都对应一个数组，这个数组是存放所有更新操作
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        // 当取值的时候
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      set(newValue) {
        // 当给 data 属性中设置值的时候
        if (newValue !== value) {
          // 如果是对象，继续劫持
          _this.observer(newValue)
          value = newValue
          dep.notify() // 通知所有数据更新
        }
      }
    })
  }
}

class Dep {
  constructor() {
    this.subs = []
  }

  addSub(watcher) {
    this.subs.push(watcher)
  }

  notify() {
    this.subs.forEach((watcher) => watcher.update())
  }
}
