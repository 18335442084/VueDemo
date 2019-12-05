import Vue from 'vue';

const app = new Vue({
    el: '#root', //mount()
    //template: '<div id="root">{{text}}</div>',
    data: {
        text: 'aaa'
    },
    beforeCreate(){
        console.log(this.$el, 'beforeCreate');
    },
    created(){
        console.log(this.$el, 'created');
    },
    beforeMount(){
        console.log(this.$el, 'beforeMount');
    },
    mounted(){
        console.log(this.$el, 'mounted');
    },
    beforeUpdate(){
        console.log(this, 'beforeUpdate');
    },
    updated(){
        console.log(this, 'updated');
    },
    activated(){
        console.log(this, 'activated');
    },
    deactivated(){
        console.log(this, 'deactivated');
    },
    beforeDestroy(){
        console.log(this, 'beforeDestroy');
    },
    destroyed(){
        console.log(this, 'destroyed');
    },
    render(h){
        console.log('rendor function invoked');
        return h('div', {}, this.text);
    },
    renderError(h, err){//本组件rendor function出错可用
        return h('div', {}, err.stack);
    },
    errorCaptured(){//这个模块下的所有模块的error都可以捕获，除非子模块禁止向上冒泡

    }
});

// app.$mount('#root');
