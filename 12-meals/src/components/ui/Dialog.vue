<script setup>
import Mask from './Mask.vue';
const props = defineProps(["msg"])

const emits = defineEmits()

const okHandler = () => {
    emits('ok')
    emits('hide')
}
</script>

<template>
    <Mask>
        <div class="dialog">
            <p class="msg">{{ props.msg }}</p>
            <div class="btn">
                <button @click="$emit('hide')" class="cancel">取消</button>
                <button @click="okHandler" class="ok">确认</button>
            </div>
        </div>
    </Mask>
</template>

<style scoped>
.dialog {
    width: 700rem;
    height: 400rem;
    background-color: white;
    border-radius: 40rem;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.msg {
    height: 260rem;
    font-size: 40rem;
    text-align: center;
    line-height: 300rem;
}

.btn {
    display: flex;
    justify-content: space-around;
}

button {
    width: 300rem;
    height: 80rem;
    border-radius: 40rem;
    border: 1px solid black;
    background-color: #fff;
    font-size: 32rem;
}

.ok {
    background-color: rgb(248, 188, 0);
    border: none;
}
</style>
