<template>
    <div id="app">
        <div id="cover">
            <Header></Header>
            <Todo></Todo>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
    import Header from './todo/header.vue';
    import Footer from './todo/footer.jsx';
    import Todo from './todo/todo.vue';

    export default {
        components:{
            Header,
            Footer,
            Todo,
        }
    }
</script>

<style lang="stylus" scoped>
#cover
    position absolute 
    left 0
    right 0
    top 0
    bottom 0
    background #000
    background-size cover
    opacity .8
</style>