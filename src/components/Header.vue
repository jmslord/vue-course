<template>
    <header>
        <h1>{{ title }}</h1>
        <DefaultButton v-show="homePage" @btn-click="$emit('toggle-add-task')" 
            :text="showAddTask ? 'Close' : 'Add Task' " 
            :color="showAddTask ? 'Red' : 'Green'"/>
    <!--<DefaultButton text="Update Task" color="blue"/>
        <DefaultButton text="Delete Task" color="red"/>-->
    </header>
    
</template>

<script>
import DefaultButton from './Button'
    export default {
        name: 'HeaderFirst',
        props: {
            title: {
                type: String,
                default: 'Hello World',
            },
            showAddTask: {
                type: Boolean,
                default: false
            }
        },
        components: {
            DefaultButton
        },
        computed: {
            homePage() {
                return this.$route.path === '/';
            }
        }    
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>