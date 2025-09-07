const imgList = [
  {
    url: './images/在忙.png',
    desc: '在忙'
  },
  {
    url: './images/安排.png',
    desc: '安排'
  },
  {
    url: './images/提issue.png',
    desc: '提issue'
  },
  {
    url: './images/点赞.png',
    desc: '点赞'
  },
  {
    url: './images/谁写的.png',
    desc: '谁写的'
  },
  {
    url: './images/马上.png',
    desc: '马上'
  }
]

const levelList = [
  {
    value: 3,
    desc: '简单'
  },
  {
    value: 4,
    desc: '一般'
  },
  {
    value: 5,
    desc: '困难'
  },
  {
    value: 6,
    desc: '地狱'
  }
]

const vm = new Vue({
  data() {
    return {
      appWidth: 600,
      level: 3,
      bgImgUrl: imgList[0].url,
      origList: [], // 原图有序列表
      messList: [], // 初始乱序列表
      imgList,
      levelList,

      formData: {
        imgUrl: imgList[0].url,
        level: levelList[0].value
      },
      switchOn: true,
      step: 0,
      time: '',
      count: 0,
      countTimer: null
    }
  },

  computed: {
    itemWidth() {
      return this.appWidth / this.level
    },
    imgUrl() {
      return this.formData.imgInfo.url || ''
    },
    btnText() {
      return this.switchOn ? '开始游戏' : '结束游戏'
    }
  },

  watch: {
    count(val) {
      const m = Math.floor(val / 60)
      const h = Math.floor(val / 60 / 60)
      const s = val % 60
      this.time = `${h}时${m}分${s}秒`
    },
    'formData.level'(val) {
      this.level = val
      this.init()
    },
    'formData.imgUrl'(val) {
      this.bgImgUrl = val
      this.init()
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    // 初始化
    init() {
      this.initOrigList()
      this.initMessList()
    },

    // 初始化原始列表
    initOrigList() {
      const { level } = this
      const list = []
      for (let i = 0; i < level; i++) {
        for (let j = 0; j < level; j++) {
          list.push({
            index: i * level + j,
            bgPos: this.getBgPos(i + 1, j + 1),
            isSpace: false
          })
        }
      }
      this.origList = list
    },

    // 初始化乱序列表
    initMessList() {
      // 除去最后一项的列表打乱
      const list = this.sufflex(this.origList.slice(0, -1))

      // 最后一项设置为空白：背景图片移出可视区
      this.messList = [
        ...list,
        {
          index: Math.pow(this.level, 2) - 1,
          bgPos: `-${this.appWidth}px`,
          isSpace: true
        }
      ]
    },

    // 洗牌算法
    // 思想：从最末尾开始往前，前面随机选出一个数与最后的数互换
    sufflex(arr) {
      const len = arr.length
      const cards = [...arr]
      let r = len - 1

      while (r >= 0) {
        const i = Math.floor(Math.random() * (r + 1))
        ;[cards[r], cards[i]] = [cards[i], cards[r]]
        r--
      }
      return cards
    },

    // 获取背景图片位置
    getBgPos(row, col) {
      const w = this.itemWidth
      const { level } = this
      const offsetX = ((col - 1) % level) * w
      const offsetY = ((row - 1) % level) * w
      return `-${offsetX}px -${offsetY}px`
    },

    // 获取乱序单元背景图片位置
    getMessBgPos(row, col) {
      const { messList } = this
      if (!messList.length) return ''
      return this.messList[(row - 1) * this.level + (col - 1)].bgPos
    },

    // 点击单元项移动
    handleMove(row, col) {
      if (this.switchOn) return
      const targetPos = this.getNearbySpacePos(row - 1, col - 1)
      if (!targetPos.length) return

      this.changePos((row - 1) * this.level + col - 1, targetPos[0] * this.level + targetPos[1])
      this.step += 1

      this.judgeSuccess()
    },

    // 获取当前点击模块紧挨着的空白模块位置
    // 如果有则可以移动：当前模块上下左右相邻模块有空白模块则可以移动
    getNearbySpacePos(row, col) {
      const { level, messList } = this

      // 上
      if (row > 0 && messList[(row - 1) * level + col].isSpace) return [row - 1, col]

      // 下
      if (row < level - 1 && messList[(row + 1) * level + col].isSpace) return [row + 1, col]

      // 左
      if (col > 0 && messList[row * level + col - 1].isSpace) return [row, col - 1]

      // 右
      if (col < level - 1 && messList[row * level + col + 1].isSpace) return [row, col + 1]

      return []
    },

    // 交换位置
    changePos(index, targetIndex) {
      const temp = this.messList[index]
      const targetTemp = this.messList[targetIndex]
      this.$set(this.messList, targetIndex, temp)
      this.$set(this.messList, index, targetTemp)
    },

    // 判别成功
    judgeSuccess() {
      const messStr = this.messList.map((item) => item.index).join('.')
      const origStr = this.origList.map((item) => item.index).join('.')

      if (messStr === origStr) {
        this.$alert(
          `用时<span style="color: #d14;">${this.time}</span>，使用了<span style="color: #d14;">${this.step}</span>步`,
          '🎉恭喜你，闯关成功！',
          {
            dangerouslyUseHTMLString: true,
            callback: () => {
              this.reset()
            }
          }
        )
      }
    },

    // 游戏开关
    switchGame() {
      this.switchOn = !this.switchOn
      if (this.switchOn) {
        this.reset()
      } else {
        this.countTimer = setInterval(() => {
          this.count++
        }, 1000)
      }
    },

    // 重置
    reset() {
      clearInterval(this.countTimer)
      this.step = 0
      this.time = '-'
      this.count = 0
    }
  }
})
vm.$mount('#app')
