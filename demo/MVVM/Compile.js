let CompileUtil;

class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        console.log('this.el', this.el)

        // 元素能获取到则编译
        if (this.el) {
            // 先把真实的DOM移入到内存中 documentFfragment
            let fragement = this.node2fragement(this.el);
            // 编译，提取想要的元素节点和文本节点
            this.compile(fragement);
            // 把编译好的fragment再塞回到页面
            this.el.appendChild(fragement);
        }
    }

    // 判断是否是元素节点
    isElementNode(node) {
        return node.nodeType === 1;
    }

    // 文档碎片
    node2fragement(el) {
        let fragement = document.createDocumentFragment();
        let firstChild;
        // 先把真实的DOM移到内存中
        while (firstChild = el.firstChild) {
            fragement.appendChild(firstChild);
        }
        return fragement;
    }

    isDirective(attrName) {
        return /^v-model/.test(attrName);
    }

    /**
     * 以下是核心方法
     */

    compileElement(node) {
        // 获取当前所有属性
        console.log('compileElement: ', node)
        // 当前节点所有属性
        let attrs = node.attributes;

        Array.from(attrs).forEach(attr => {
            let attrName = attr.name;
            console.log('attrName:', attrName)
            if (this.isDirective(attrName)) {
                let expr = attr.value;
                let [, type] = attrName.split('-');

                CompileUtil[type](node, this.vm, expr);
            }
        })
    }

    compileText(node) {
        // 取文本中内容
        let expr = node.textContent;
        let reg = /\{\{([^}]+)\}\}/g;
        if (reg.test(expr)) {
            CompileUtil['text'](node, this.vm, expr);
        }
    }

    compile(fragement) {
        let childNodes = fragement.childNodes;
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) {
                console.log('element: ', node);
                this.compileElement(node);
                // 是元素节点，递归编译
                this.compile(node);
            } else {
                console.log('text: ', node);
                this.compileText(node);
            }
        })
    }
}

CompileUtil = {
    // 获取对象属性值 data.a.b.c
    getVal(vm, expr) {
        expr = expr.split('.');
        return expr.reduce((prev, cur) => {
            return prev[cur];
        }, vm.$data)
    },
    // 获取文本表达式{{}}中对应属性值
    getTextVal(vm, expr) {
        return expr.replace(/\{\{([^}]+)\}\}/g, (...args) => {
            return this.getVal(vm, args[1]);
        })
    },
    // 文本处理
    text(node, vm, expr) {
        let updateFn = this.updater['textUpdater'];
        let value = this.getTextVal(vm, expr);
        expr.replace(/\{\{([^}]+)\}\}/g, (...args) => {
            new Watcher(vm, args[1], (newValue) => {
                updateFn && updateFn(node, this.getTextVal(vm, expr));
            })
        })
        console.log('text value:', value);
        updateFn && updateFn(node, value);
    },
    setValue(vm, expr, value) {
        expr = expr.split('.');
        return expr.reduce((prev, cur, currentIndex) => {
            if (currentIndex === expr.length - 1) {
                return prev[cur] = value;
            }
            return prev[cur];
        }, vm.$data)
    },
    // 输入框处理
    model(node, vm, expr) {
        let updateFn = this.updater['modelUpdater'];
        new Watcher(vm, expr, (newValue) => {
            // 当值变化后会调用 cb 将新的值传递过来
            updateFn && updateFn(node, this.getVal(vm, expr));
        });
        node.addEventListener('input', (e) => {
            let newValue = e.target.value;
            this.setValue(vm, expr, newValue);
        })
        updateFn && updateFn(node, this.getVal(vm, expr));
    },
    updater: {
        // 文本更新
        textUpdater(node, value) {
            node.textContent = value;
        },

        // 输入框更新
        modelUpdater(node, value) {
            node.value = value;
        }
    }
}