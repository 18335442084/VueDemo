import Vue from 'vue';

//const div = document.createElement('div');
//document.body.appendChild(div);

const app = new Vue({
    //el: '#root',
    template: '<div ref="div">{{text}} {{obj.a}}</div>',
    data:{
        text: 0,
        obj: {}
    },
    watch:{
        'text' (newText, oldText){
            console.log(`${newText} : ${oldText}`)
        }
    }
});

app.$mount('#root');

//app.text = "text1";
let i = 0;
setInterval(() => {
    i++;
    //app.$set(app.obj, 'a', i);
    //app.$delete(app.obj, 'a');
    //app.obj.a = i;
    //app.$forceUpdate();
    app.text += 1;
    app.text += 1;
    app.text += 1;
    app.text += 1;  //异步渲染 1s直接+5；同步渲染 1s从0到5
    app.text += 1; 
    //app.$options.data.text += 1; //options属性不能修改
},1000);

//vue实例属性
//console.log(app.$data);  //数据对象
//console.log(app.$props);  //属性对象
//console.log(app.$el);     //节点对象
//console.log(app.$options); //vue实例对象
//app.$options.render = (h) => {
//    return h('div', {}, 'new render function');
//}     //对options属性的重新渲染，在页面发生下一次渲染时
//console.log(app.$root === app); //vue实例生成的整个对象
//console.log(app.$children);   //vue $root下的子节点对象，数组
//console.log(app.$slots);
//console.log(app.$scopedSlots)
//console.log(app.$refs);   //类似于id，快速标记vue中的一部分？
//console.log(app.$isServer); //是否是服务器端渲染


//const unWatch = app.$watch('text',(newText, oldText) => {//$watch返回unWatch function
//    console.log(`${newText} : ${oldText}`);
//});    //vue的监听，可以在vue对象里面直接配置，好处在于当当前vue实例注销的时候不用手动接触监听
//setTimeout(() => {
//    unWatch()
// },2000);


// app.$on('test',(a, b) => {//事件监听
//     console.log(`test emited ${a} and ${b}`);
// });
// app.$emit('test', 1, 2); //事件触发

// app.$once('test',() => { //只能触发一次的事件
//     console.log(`once emited`);
// });
// setInterval(() => {
//     app.$emit('test');
// },1000);

//app.$forceUpdate(); //页面强制重新渲染，只有在vue options里面的属性（响应式数据）才可以被渲染，通过外部赋值方式（非响应式数据）的不可以被直接渲染--响应式框架
//app.$set(app.obj, 'a', i);   //设置属性
//app.$delete(app.obj, 'a');    //删除属性
//app.$nextTick([callback]) //vue的渲染时异步进行的，当想要在下一次渲染之后立即调用一个方法时使用，多用在DOM节点
