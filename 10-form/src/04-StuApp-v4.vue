<script setup>
import { ref } from "vue"
import StudentList from "./components/StudentList-v4.vue"
import StudentForm from "./components/StudentForm-v4.vue"

// 发送请求来向服务器加载数据
const STU_ARR = ref([
    {
        id: 1,
        name: "孙悟空",
        age: 18,
        gender: "男",
        address: "花果山"
    },
    {
        id: 2,
        name: "猪八戒",
        age: 28,
        gender: "男",
        address: "高老庄"
    },
    {
        id: 3,
        name: "沙和尚",
        age: 38,
        gender: "男",
        address: "流沙河"
    },
    {
        id: 4,
        name: "唐僧",
        age: 16,
        gender: "男",
        address: "女儿国"
    }
])

// 添加一个删除学生的方法
const delStuHandler = (index) => {
    STU_ARR.value.splice(index, 1)
    // console.log("删除学生")
}

// 添加学生的方法
const addNewStudent = (student) => {
    const lastId = STU_ARR.value.at(-1)?.id
    const newId = !isNaN(lastId) ? lastId + 1 : 1
    student.id = newId
    STU_ARR.value.push(student)
}

</script>

<template>
    <!-- 可以将组件中的方法以自定义事件的形式发送给其他的组件 -->
    <StudentList :students="STU_ARR" @del-stu="delStuHandler"></StudentList>
    <hr />
    <StudentForm @add-new-student="addNewStudent"></StudentForm>
</template>

<style scoped>
</style>
