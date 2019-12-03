<template>
    <div :class="['todo-item',todo.completed ? 'completed': '']">
        <input
            type="checkbox"
            class="toggle"
            v-model="todo.completed"
        >
        <label>{{todo.content}}</label>
        <button :class="$style.destory" @click="deleteTodo"></button>
    </div>
</template>

<script>

export default {
    props:{
        todo:{
            type: Object,
            required: true
        }
    },
    methods:{
        deleteTodo(){
            this.$emit('del',this.todo.id);
        }
    }
}
</script>

<style lang="stylus" module>
.todo-item
    font-size 30px
    line-height 50px
    border-bottom 1px #ccc solid
    
label
    margin-right 65%

.destory
    width 20px
    height 20px
    border 1px #ccc solid
    border-radius 50%
</style>