<script setup>
// 通过defineProps定义的属性在attrs中就不存在了

// 使用自定义属性时，最好通过defineProps来声明一下
const props = defineProps(["students"])
const emits = defineEmits(['delStu'])

const delStuHandler = (index) => {
    if(confirm("是否删除？")) {
        // props.students.splice(index, 1)
        // props.fn(index)
        emits("delStu",index)
    }
}
</script>
<template>
    <table>
        <caption>
            学生列表
        </caption>
        <thead>
            <tr>
                <th>学号-index</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>住址</th>
                <th>操作</th>
            </tr>
        </thead>

        <tr v-for="(stu, index) in props.students">
            <td>{{ stu.id }} - {{ index }}</td>
            <td>{{ stu.name }}</td>
            <td>{{ stu.age }}</td>
            <td>{{ stu.gender }}</td>
            <td>{{ stu.address }}</td>
            <td>
                <!-- <a href="#" @click.prevent="$emit('delStu', index)">删除</a> -->
                <a href="#" @click.prevent="delStuHandler(index)">删除</a>
            </td>
        </tr>
    </table>
</template>

<style scoped>
table {
    width: 80%;
    border-collapse: collapse;
    text-align: center;
}

caption {
    font-size: 30px;
    font-weight: bold;
}

td, th {
    border: 1px solid black;
    font-size: 24px;
}
</style>
