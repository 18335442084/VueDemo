//time: 02:23:49

import Vue from 'vue';

// const data= {
//     text: 123
// }

const component = {
    props:{},
    template:　`<div><input type="text" v-model="text"></div>`,
    data(){
        //return data;
        return {
            text: 123
        }
    },
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
            <comp-one></comp-one>
            <comp-one></comp-one>
        </div>
    `//串式，会自动转换，层次清晰
});
