// 观察者模式的实现
// 观察者模式指的是一个对象（Subject）维持一系列依赖于它的对象（Observer），
// 当有关状态发生变更时，Subject 对象通知一系列 Observer 对象进行更新。
// 目标对象
class Subject {
  constructor() {
    // 维护观察者列表
    this.observers = []
  }
  // 添加一个观察者
  add(observer) {
    this.observers.push(observer)
  }
  // 删除一个观察者
  remove(observer) {
    const { observers } = this
    for (let i = 0; i < observers.length; i++) {
      if (observers[i] === observer) {
        observers.splice(i, 1)
      }
    }
  }
  // 通知所有观察者
  notify() {
    const { observers } = this
    for (let i = 0; i < observers.length; i++) {
      observers[i].update()
    }
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name
  }
  // 更新
  update() {
    console.log('name: ', this.name)
  }
}

const sub = new Subject()
const obs1 = new Observer('wuwhs')
const obs2 = new Observer('winfar')
sub.add(obs1)
sub.add(obs2)
sub.notify()
