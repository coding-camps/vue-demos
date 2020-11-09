<script setup>

// const props = defineProps(["students", "fn"])
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
        <caption>学生列表</caption>
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
    width: 60%;
    border-collapse: collapse;
    text-align: center;
}
th, td {
    border: 1px solid black;
}

th {
    font-weight: bold;
    font-size: 1.5em;
}
</style>
