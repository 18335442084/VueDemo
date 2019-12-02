<template>
    <section class="real-app">
        <input 
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="Do you want to do next?"
        @keyup.enter="addTodo"
        >       
        <item 
        :todo="todo"
        v-for="todo in filteredTodos"
        :key="todo.id"
        @del="deleteTodo"
        ></item>
        <tabs 
        :filter="filter"
        :todos="todos"
        @toggle="toggleFileter"
        @clearAllCompleted="clearAllCompleted"
        ></tabs> 
    </section>
</template>
 
<script>
import Item from './item.vue';
import Tabs from './tabs.vue';

let id = 0;

export default {
    data(){
        return {
            todos: [],
            filter: 'all'
        }
    },
    methods:{
        addTodo(e){
            this.todos.unshift({
                id: id++,
                content: e.target.value.trim(),
                completed: false
            });
            e.target.value = '';
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
        },
        toggleFileter(state){
            this.filter = state;
        },
        clearAllCompleted(){
            this.todos = this.todos.filter(todo => !todo.completed);
        }
    },
    computed:{
        filteredTodos(){
            if(this.filter === 'all'){
                return this.todos;
            }
            const completed = this.filter === 'completed';
            return this.todos.filter(todo => completed === todo.completed);
        }
    },
    components: {
        Item,
        Tabs,
    }
}
</script>

<style lang="stylus" scoped>
    .real-app{
        width 50%
        background-color #fff
        padding 10px
        position relative
        left 25%
        }
    .add-input{
        width 100%
        font-size 30px
        line-height 50px
        border 0
        border-bottom 1px #ccc solid
        }
</style>