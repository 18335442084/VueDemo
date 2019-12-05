import Vue from 'vue';

new Vue({
    el: '#root',
    // template: `
    //     <div :id='aaa' @click="handleClick">
    //     <div :class="{active : !isActive}">
    //     <div :class="[!isActive ? 'active' : '']">
    //         <p v-html= "html"></p>
    //         <p v-html="arr.join(' ')"></p>
    //     </div>
    // `,
    template: `
    <div 
    :class="[{active : !isActive}]"
    :style="[styles, styles2]"
    >
        <p>{{getJoinedArr(arr)}}</p>
    </div>
    `,
    data: {
        isActive: false,
        arr: [1,2,3],
        html: "<span>123</span>",
        aaa: 'main',
        styles:{
            color: "red",
            appearance: 'none'//消除浏览器默认样式
        },
        styles2:{
            color: "black"
        }
    },
    methods: {
        handleClick(){
            alert('clicked')
        },
        getJoinedArr(arr){
            return arr.join(' ');
        }
    }
});
