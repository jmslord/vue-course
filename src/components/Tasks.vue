<template>
    <div :key="task.id" v-for="task in tasks">
        <DefTask @toggle-reminder="$emit('toggle-reminder',task.id)" @delete-task="$emit('delete-task',task.id)" :task="task"/>
    </div>
</template>

<script>

import DefTask from './Task'
export default {
    name: 'DefTasks',
    props: {
        tasks: {
            type: Array,
        }
    },
    components: {
    DefTask
    },
    emits: ['delete-task','toggle-reminder']
}
</script>