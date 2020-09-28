<script>
export default {
    data() {
        return {
            count: 0,
        }
    },
}
</script>

<template>
    <div>
        子组件：<button @click="count++">点我一下</button> {{ count }} <br />
    </div>
</template>
