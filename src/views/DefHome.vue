<template>
    <AddTask v-if="showAddTask" @add-task="addTask" />
    <DefTasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>

import DefTasks from '../components/Tasks'
import AddTask from '../components/AddTask'

export default {
    name: 'DefHome',
    props: { showAddTask: Boolean },
    components: {
        DefTasks,
        AddTask
    },
    data() {
        return {
            tasks: []
        }
    },
    methods: {
        async addTask(task) {
            const res = await fetch('api/task', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(task)
            })

            const data = await res.json()
            this.tasks.push(data)
        },
        async deleteTask(id) {
            if (confirm('Are you sure?')) {
                const res = await fetch(`api/task/${id}`, {
                    method: 'DELETE'
                })
                res.status === 200 ? this.tasks = this.tasks.filter(task => task.id !== id) : alert('Error Deleting This Task')
            }
        },
        async toggleReminder(id) {
            const taskToToggle = await this.fetchTask(id)
            const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
            const res = await fetch(`api/task/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updTask)
            })
            const data = await res.json()
            this.tasks = this.tasks.map(task => task.id === id ? { ...task, reminder: data.reminder } : task)
        },
        async fetchTasks() {
            const res = await fetch('api/task')
            const data = await res.json()
            return data
        },
        async fetchTask(id) {
            const res = await fetch(`api/task/${id}`)
            const data = await res.json()
            return data
        }
    },
    async created() {
        this.tasks = await this.fetchTasks()
    }
}
</script>