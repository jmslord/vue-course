<template>
    <button @click="onClick()" :style="{background:color}" class="btn">{{ text }}
    </button>
</template>

<script>
export default {
    name: 'DefaultButton',
    props: {
        text: {
            type: String,
            default: 'Button'
        },
        color: {
            type: String,
            default: 'black'
        },
        
    },
    methods: {
            onClick() {
                this.$emit('btn-click')
            }
        }
}
</script>