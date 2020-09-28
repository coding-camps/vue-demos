<script>
import MyButton from './compnonts/MyButton.vue';

/* 编写组件的代码 */
export default {
    data() {
        return {
            msg: "我超级爱Vue！",
        }
    },

    // 在组件中注册子组件
    components: {
        MyButton
    },
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <MyButton></MyButton>
    <MyButton></MyButton>
</template>
