//time: 02:23:49

import Vue from 'vue';

// const data= {
//     text: 123
// }

const component = {
    props:{//外部组件传来的属性，props修改会报警，但是不推荐,推荐单向数据流
        active: {
            type: true,
            // validator(value){
            //     return typeof value === "boolen"
            // },//自定义类型验证器
            require: true,
            //default: false
        },
        propOne: String,
        onChange: Function
    },
    template:　`<div><input type="text"  v-show="active" v-model="text">{{propOne}}
        <span @click='onClick'>CM</span>
        <div @click="change">CCCMMM</div>
    </div>`,
    data(){
        //return data;
        return {
            text: 123
        }
    },
    methods: {
        onClick(){
            this.onChange();
        },
        change(){
            this.$emit("change");
        }
    }
};//在非vue对象组件中，data不允许是对象，必须是一个方法,因为：此类组件可能被多次调用，那么它们
//使用的data数据就是共享的同一份，这样会导致对数据进行操作时，所有组件数据全部改动，所以data要用
//方法，每次都重新生成新的data对象，生成一份单独的data数据

//Vue.component('CompOne', component);  //将组件放置全局环境中，camelCode

new Vue({
    components:{
        CompOne: component
    },
    el: '#root',
    template: `
        <div>
            <comp-one :active="true" :prop-one="one" :on-change="handlerChange"></comp-one>
            <comp-one @change="handlerChange"></comp-one>
        </div>
    `//串式，会自动转换，层次清晰
    ,
    data: {
        one: "99",
    },
    methods: {
        handlerChange(){
            this.one += 1;
        }
    }
});
