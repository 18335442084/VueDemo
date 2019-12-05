import Vue from 'vue';

new Vue({
    el: '#root',
    template:`
    <div>
        <div v-if="active" v-show="active" v-text='text'>Text: {{text}}</div>
        <div v-else-if="text === 1">else if</div>
        <div v-else>else</div>
        <div v-html="html" v-on:click="click"></div>
        <ul>
            <li v-for="(item,index) in arr" :key="item">{{item}} : {{index}}</li>
        </ul>
        <ul>
            <li v-for="(value, key, index) in obj">{{value}} : {{key}} : {{index}}</li>
        </ul>
        <div><input type="text" v-model.lazy="text"></div>
        <div>
            <input type="checkbox" :value="1" v-model="arr">
            <input type="checkbox" :value="2" v-model="arr">
            <input type="checkbox" :value="3" v-model="arr">
        </div>
        <div>
            <input type="radio" :value="1" v-model="picked" >
            <input type="radio" :value="2" v-model="picked" >
        </div>
        <div v-pre>{{text}}</div>
    </div>
    `,//v-text内容与标签内容不能同时显示，v-text优先显示
    //v-if是否删除节点 使用v-else-f v-else，v-if是上个节点必须设置的，这三个都操作了文档流;v-show给当前节点设置display:'none',还在文档流里
    //v-for 设定:key值，当文档流没有发生变化时，不再重新遍历，从内存中提取利用:key缓存的内容，减少资源开支，优化性能
    //v-on 事件系统 简写为 @
    //v-model; :value ;v-model.number .trim .lazy修饰符，默认为.change，.lazy时只有当焦点移开时数据才会发生变化
    //v-pre 不会解析内容，怎样输入就怎样输出
    //v-clock
    //v-once 数据绑定只执行一次，数据不会改变，不再检测这一节点
    data:{
        arr: [1,2,3],
        obj: {
            a: '123',
            b: '456',
            c: '789'
        },
        picked: '',
        text: 0,
        active: true,
        html: '<span>this is html</span>'
    },
    methods:{
        click(){
            alert('clicked');
        }
    }
});
