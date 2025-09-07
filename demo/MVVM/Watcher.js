// 观察者的目的给需要变化的元素增加一个观察者
class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;

        // 先缓存旧的值
        this.value = this.get();
    }

    getVal(vm, expr) {
        expr = expr.split('.');
        return expr.reduce((prev, cur) => {
            return prev[cur];
        }, vm.$data);
    }

    get() {
        Dep.target = this;
        let value = this.getVal(this.vm, this.expr);
        Dep.target = null;
        return value;
    }
    // 对外暴露的方法
    update() {
        let newValue = this.getVal(this.vm, this.expr);
        let oldValue = this.value;
        if (newValue !== oldValue) {
            this.cb(newValue);
        }
    }
}