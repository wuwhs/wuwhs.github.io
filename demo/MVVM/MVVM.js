class MVVM {
    constructor(options) {
        // 先把可用的东西挂载在实例上
        this.$el = options.el;
        this.$data = options.data;

        if (this.$el) {
            new Observer(this.$data);
            this.proxyData(this.$data);
            console.log('this.$el', this.$el)
            new Compile(this.$el, this);
        }
    }

    proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                get() {
                    return data[key];
                },
                set(newValue) {
                    data[key] = newValue;
                }

            })
        })
    }
}