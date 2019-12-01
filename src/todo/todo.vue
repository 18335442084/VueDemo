<template>
    <section class="real-app">
        <input 
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="Do you want to do next?"
        @keyup.enter="addTodo"
        >       
        <item :todo="todo"></item>
        <tabs :filter="fileter"></tabs> 
    </section>
</template>
 
<script>
import Item from './item.vue';
import Tabs from './tabs.vue';

export default {
    data(){
        return {
            todo: {
                id: 0,
                content: "this is todo",
                completed: false
            },
            filter: 'all'
        }
    },
    methods:{
        todo(){}
    },
    components: {
        Item,
        Tabs,
    }
}
</script>

<style lang="stylus" scoped>

</style>