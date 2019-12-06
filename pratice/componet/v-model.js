import Vue from 'vue';

const component = {
    props: ['value'],
    template:　`
        <div>
            <input type='text' @input="handleInput" :value='value'>
        </div>
    `,
    methods:{
        handleInput(e){
            this.$emit('input', e.target.value);
        }
    }

}

new Vue({
    components:{
        compOne: component
    },
    el: '#root',
    data(){
        return {
            value: 123
        }
    },
    template:`
        <div>
            <comp-one @input="value = arguments[0]" :value="value"></comp-one>
        </div>
    `
});
