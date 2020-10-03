<script>

const obj = {
    count: 0,
};

export default {
    data() {
        return obj;
    }
}

</script>

<template>
    <button @click="count++">{{ count }}</button>
</template>

<style scoped>
button {
    margin: 3px;
}
</style>
