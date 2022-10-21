// 发布订阅模式的实现
class PubSub {
  constructor() {
    // 维护事件及订阅行为
    this.events = {}
  }

  // 注册事件订阅行为
  subscribe(type, event) {
    if (!this.events[type]) {
      this.events[type] = []
    }
    this.events[type].push(event)
  }

  // 发布事件
  publish(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach((event) => {
        event(...args)
      })
    }
  }

  // 移除某个事件的订阅行为
  unsubscribe(type, event) {
    const evts = this.events[type]
    if (evts) {
      for (let i = 0; i < evts.length; i++) {
        if (evts[i] === event) {
          evts.splice(i, 1)
        }
      }
    }
  }
}

const pub = new PubSub()
const fn = (...args) => {
  console.log('subscribe：', ...args)
}
pub.subscribe('customer-event', fn)
pub.publish('customer-event', 1, 2, 3)
