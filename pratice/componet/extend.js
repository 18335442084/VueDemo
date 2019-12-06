import Vue from 'vue'

const component = {
    props:{//外部组件传来的属性，props修改会报警，但是不推荐,推荐单向数据流
        active: Boolean,
        propOne: String,
        onChange: Function
    },
    template:　`<div><input type="text"  v-model="text">{{propOne}}
        <span @click='onClick'>CM</span>
        <div @click="change">CCCMMM</div>
    </div>`,
    mounted(){
        console.log("Parent mounted");
    },
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
};

// const CompVue = Vue.extend(component);//将自定义组件抽象成一个vue的子类

// new CompVue({
//     el: '#root',
//     propsData: {
//         propOne: 'xxx'
//     },
//     mounted(){
//         console.log("child mounted");
//     },
//     activated(){
//         setIterval(() =>{
//             console.log("setInterval");
//             this.text = 456;
//         },1000);
//     },
//     methods:{
//         changeCon(){
//             this.text = "456"
//         }
//     }
// });

const component2 = {
    extends: component,
    el: '#root',
}

