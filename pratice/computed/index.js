import Vue from 'vue';

new Vue({
    el: "#root",
    template: `
    <div>
        <p>Name: {{name}}</p>
        <p>Name: {{getName()}}</p>
        <p>Number: {{number}}</p>
        <p>FullName: {{fullName}}</p>
        <p><input type="text" v-model="number"></p>
        <p>FirstName: <input type="text" v-model="firstName"></p>
        <p>LastName: <input type="text" v-model="lastName"></p>
        <p>Name: <input type="text" v-model="name"></p>
        <p>obj.a: {{obj.a}}</p>
    </div>
    `,
    data: {
        firstName: 'Jokcy',
        lastName: 'Luo',
        number: 0,
        fullName: '',
        obj: {a: 123, b: 789}
    },
    computed:{//依赖值发生变化时，才会重新渲染，内存开销小
        // name(){
        //     console.log("computed");
        //     return `${this.firstName} ${this.lastName}`
        // }
        name: {
            get(){
                console.log('new name');
                return `${this.firstName} ${this.lastName}`
            },
            set(name){
                const names = name.split(" ");
                this.firstName =  names[0];
                this.lastName = names[1];
            }
        }
    },
    mounted(){
        this.obj = {
            a: 456
        }
    },
    watch:{
        firstName: {
            handler(newName, oldName){
                this.fullName = newName + ' ' + this.lastName; 
            },
            immediate: true,//设置之后监听立即生效
            //deep: true //深度监听该对象下的每一个属性，资源消耗大；可以使用字符串具体到监听的某个属性来节省资源开支
        },
        'obj.a': {
            handler(){
                console.log('obj.a changed');
            },
            immediate: true,
            //deep: true
        }
    },
    methods:{//每一次渲染都会调用methods中的方法
        getName(){
            console.log("getName is invoked");
            return `${this.firstName} ${this.lastName}`
        }
    }
});
