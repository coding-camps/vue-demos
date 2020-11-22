<template>
    <div v-show="props.isShow" @click.self="$emit('hide')" class="mask">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps(["isShow"])
const emits = defineEmits(["hide"])
</script>

<style scoped>
.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
}
</style>
