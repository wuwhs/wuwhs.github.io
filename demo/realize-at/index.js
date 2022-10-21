const vm = new Vue({
  data() {
    return {
      content1:
        '😃😄😁主动选中在文本输入框元素某一区域可以使用 setSelectionRange。指定文本输入框的某个位置插入内容或者替换选区的内容，可以使用 setRangeText 实现。',
      content2:
        '😃😄😁<span style="color: #00965e;">Selection</span> 对象表示用户选择的文本范围或插入符号的当前位置。它代表页面中的文本选区，可能横跨多个元素。文本选区由用户拖拽鼠标经过文字而产生。可以用 Document 对象的 Document.createRange 方法创建 Range，也可以用 Selection 对象的 getRangeAt 方法获取 Range。另外，还可以通过 Document 对象的构造函数 Range() 来得到 Range。',
      pos: {
        start: 0,
        end: 0
      },

      content:
        '😃😄😁Selection 对象表示用户选择的文本范围或插入符号的当前位置。它代表页面中的文本选区，可能横跨多个元素。文本选区由用户拖拽鼠标经过文字而产生。可以用 Document 对象的 Document.createRange 方法创建 Range，也可以用 Selection 对象的 getRangeAt 方法获取 Range。另外，还可以通过 Document 对象的构造函数 Range() 来得到 Range。',
      isShowUserList: false,
      userList: [
        { uid: 1, name: '张三' },
        { uid: 1, name: '李四' },
        { uid: 1, name: '王五' },
        { uid: 1, name: '老六' }
      ],
      popperStyle: { x: 0, y: 0 },
      lastRange: null
    }
  },

  directives: {
    // 点击目标元素外区域，目标元素隐藏
    clickOutHide: {
      inserted(el) {
        el._clickHandler = function (ev) {
          if (!el.contains(ev.target)) {
            el.style.display = 'none'
          }
        }
        document.addEventListener('click', el._clickHandler)
      },
      unbind() {
        if (el._clickHandler) {
          document.removeEventListener('click', el._clickHandler)
        }
      }
    }
  },

  // mounted() {
  //   const $input = this.$refs.textarea1.$el.firstChild
  //   document.addEventListener('mouseup', () => {
  //     this.pos = {
  //       start: $input.selectionStart,
  //       end: $input.selectionEnd
  //     }
  //   })
  // },

  methods: {
    handleTextarea1Mouseup(ev) {
      const $input = ev.target
      this.pos = {
        start: $input.selectionStart,
        end: $input.selectionEnd
      }
    },

    handleTextarea1(key) {
      const $input = this.$refs.textarea1.$el.firstChild
      switch (key) {
        case 1:
          $input.setSelectionRange(0, 6)
          // $input.select()
          $input.focus()
          break
        case 2:
          $input.setSelectionRange(6, 6)
          $input.focus()
          break
        case 3:
          const { start, end } = this.pos
          $input.setSelectionRange(start, end)
          $input.focus()
          break

        case 4:
          $input.setRangeText('😂😂😂')
          $input.focus()
          break

        case 5:
          $input.setRangeText('😂😂😂', 8, 8, 'preserve')
          $input.focus()
          break

        default:
          break
      }
    },

    /**
     * 获取所有文本节点及其偏移量
     * @param {HTMLElement} wrapDom 最外层节点
     * @param {Number} start 开始位置
     * @param {Number} end 结束位置
     * @returns
     */
    getNodeAndOffset(wrapDom, start = 0, end = 0) {
      const txtList = []
      const map = function (children) {
        ;[...children].forEach((el) => {
          if (el.nodeName === '#text') {
            txtList.push(el)
          } else {
            map(el.childNodes)
          }
        })
      }
      // 递归遍历，提取出所有 #text
      map(wrapDom.childNodes)
      // 计算文本的位置区间
      const clips = txtList.reduce((arr, item, index) => {
        const end = item.textContent.length + (arr[index - 1] ? arr[index - 1][2] : 0)
        arr.push([item, end - item.textContent.length, end])
        return arr
      }, [])
      // 查找满足条件的范围区间
      const startNode = clips.find((el) => start >= el[1] && start < el[2])
      const endNode = clips.find((el) => end >= el[1] && end < el[2])
      return [startNode[0], start - startNode[1], endNode[0], end - endNode[1]]
    },

    handleTextarea2Mouseup() {
      const selection = document.getSelection()
      const range = selection.getRangeAt(0)
      this.lastRange = range
    },

    handleTextarea2(key) {
      const $input = this.$refs.textarea2
      const selection = document.getSelection()
      const range = document.createRange()

      switch (key) {
        case 1:
          const $span = $input.childNodes[1]
          // range.selectNode($span)
          range.selectNodeContents($span)
          selection.removeAllRanges()
          selection.addRange(range)
          break

        case 2:
          range.setStart($input.firstChild, 0)
          range.setEnd($input.firstChild, 6)
          selection.removeAllRanges()
          selection.addRange(range)
          break

        case 3:
          {
            const nodes = this.getNodeAndOffset($input, 4, 17)
            range.setStart(nodes[0], nodes[1])
            range.setEnd(nodes[2], nodes[3])
            selection.removeAllRanges()
            selection.addRange(range)
          }
          break

        case 4:
          {
            const nodes = this.getNodeAndOffset($input, 7, 7)
            range.setStart(nodes[0], nodes[1])
            range.setEnd(nodes[2], nodes[3])
            selection.removeAllRanges()
            selection.addRange(range)
          }
          break

        case 5:
          selection.removeAllRanges()
          selection.addRange(this.lastRange)
          break

        case 6:
          const $text = document.createTextNode('😂😂😂')
          this.lastRange.deleteContents()
          this.lastRange.insertNode($text)
          this.lastRange.setStartAfter($text)
          $input.focus()
          break

        case 7:
          const $mark = document.createElement('mark')
          // this.lastRange.surroundContents($mark)
          const fragments = this.lastRange.extractContents()
          $mark.append(fragments)
          this.lastRange.insertNode($mark)
          break

        case 8:
          const pos = this.lastRange.getBoundingClientRect()
          const highlight = document.getElementById('highlight')
          highlight.style.left = `${pos.x}px`
          highlight.style.top = `${pos.y}px`
          highlight.style.width = `${pos.width}px`
          highlight.style.height = `${pos.height}px`
          break

        default:
          break
      }
    },

    hideUserList() {
      this.isShowUserList = false
    },

    showUserList() {
      this.isShowUserList = true
    },

    focusChatInput() {
      this.$refs.chatInput.focus()
    },

    getRange() {
      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0) {
        return selection.getRangeAt(0)
      }
    },

    /**
     * 输入聊天内容
     * @param {*} ev
     */
    inputChatContent(ev) {
      if (ev.data === '@') {
        this.saveCaret()
        const pos = this.getCaretPos()
        this.showUserList()
        this.$nextTick(() => {
          this.setUserListPos(pos)
        })
      } else {
        this.hideUserList()
      }
    },

    /**
     * 获取光标位置
     * @returns
     */
    getCaretPos() {
      const range = this.getRange()
      const pos = range.getBoundingClientRect()
      return pos
    },

    /**
     * 设置用户列表的位置
     * @param {*} pos
     */
    setUserListPos(pos) {
      const $popper = this.$refs.popper
      const panelWidth = $popper.offsetWidth
      const panelHeight = $popper.offsetHeight
      const { x, y } = pos

      this.popperStyle = {
        top: y - panelHeight - 20 + 'px',
        left: x - panelWidth / 2 + 'px'
      }
    },

    /**
     * 聊天内容输入框失焦
     */
    chatContentBlur() {
      this.saveCaret()
    },

    /**
     * 聊天内容输入框鼠标抬起
     */
    chatContentMouseup() {
      this.saveCaret()
    },

    /**
     * 记录光标
     */
    saveCaret() {
      const range = this.getRange()
      this.lastRange = range
    },

    /**
     * 选择用户
     */
    selectUser(user) {
      // 让失焦事件先执行
      setTimeout(() => {
        this.hideUserList()
        this.insertContent({ type: 'at', ...user })
      })
    },

    /**
     * 恢复光标
     */
    restoreCaret() {
      if (this.lastRange) {
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(this.lastRange)
      }
    },

    /**
     * 删除输入框中光标位置现有的@字符
     */
    deleteCaretAtCode() {
      const range = this.getRange()
      // 光标开始节点和光标在节点上的偏移量，找到光标准确位置，选中光标位置前一个字符范围并删除
      const node = range.startContainer
      const end = range.endOffset

      // 开始节点内容最后一个字符是@，删除，否则不删除
      if (node.textContent[end - 1] === '@') {
        range.setStart(node, end ? end - 1 : 0)
        range.deleteContents()
      }
    },

    /**
     * 转换要插入光标位置的内容
     * @param {*} data
     */
    parseContent(data) {
      const { type = 'text', name } = data
      let content = null

      // type 是插入内容类型，可能是文本、@标签、图片、表情等
      if (type === 'text') {
        content = document.createTextNode(name)
      } else if (type === 'at') {
        // 删除输入框中光标位置现有的@字符
        this.deleteCaretAtCode()

        const $span = document.createElement('span')
        $span.contentEditable = false
        $span.classList.add('tag')
        $span.innerHTML = `@${name}`

        // 插入一个空格字符（\u0010）到@标签后面，可以解决IOS上光标在聊天输入框后面
        const $space = document.createTextNode('\u0010')
        const frag = document.createDocumentFragment()

        frag.appendChild($span)
        frag.appendChild($space)

        content = frag
      }
      return content
    },

    /**
     * 插入内容
     * @param {*} data
     */
    insertContent(data) {
      this.restoreCaret() // 还原光标

      const selection = window.getSelection()
      // if (!selection || !selection.rangeCount > 0) {
      //   return
      // }
      const range = selection.getRangeAt(0)
      range.collapse(false) // 折叠选区，光标移到最后

      const pc = this.parseContent(data)
      range.insertNode(pc)

      // 将选区范围起始位置设置到当前元素后面
      range.collapse(false)

      selection.removeAllRanges()
      selection.addRange(range)
    }
  }
})
vm.$mount('#app')
