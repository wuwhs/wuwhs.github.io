// 实现JS限流调度器:方法add接收一个返回Promise的函数，同时执行的任务数量不能超过两个。
class Scheduler {
  constructor() {
    this.tasks = []
    this.limit = 2
    this.count = 0
  }
  add(task) {
    return new Promise((resolve) => {
      this.count += 1
      task.resolve = resolve

      const execTask = (task) => {
        task().then(() => {
          this.count -= 1
          task.resolve()
          if (this.tasks.length) {
            execTask(this.tasks.shift())
          }
        })
      }

      if (this.count <= this.limit) {
        execTask(task)
      } else {
        this.tasks.push(task)
      }
    })
  }
}
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

// 限制同一时刻只能执行2个task
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// log 2 3 1 4
