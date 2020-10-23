<script setup>
/* 
        父组件可以通过props来向子组件传递数据
        注意：父组件传递给子组件的props都是只读的，无法修改
            即使可以修改，我们也尽量不要在子组件中去修改父组件的数据
            如果非得要改，具体方法后边再讲（自定义事件）

        属性名
            - 定义属性名时，属性名要遵循驼峰命名法
            
    */

// 定义props
// count = 0
// obj = {count = 0}
// const props = defineProps(["count", "obj", "maxLength"])

const props = defineProps({
    count: Number,
    obj: Object,
    isCheck: Boolean,
    maxLength: {
        type: String,
        required: true,
        default: "哈哈",
        validator(value) {
            return value !== "嘻嘻"
        }
    }
})

console.log(props)
</script>

<template>
    <div>
        <h2>我是子组件 MyBox</h2>
        <h3>count: {{ props.count }}</h3>
        <button @click="props.count++" disabled>MyBox按钮 count++</button>
        <h3>obj.count: {{ props.obj.count }}</h3>
        <button @click="props.obj.count++">MyBox按钮 obj.count++</button>
        <h3>maxLength: {{ props.maxLength }}</h3>
        
    </div>
</template>

<style scoped>
div {
    padding: 10px;
    border: solid 1px lightgreen;
    border-radius: 10px;
    margin: 10px;
}
</style>
