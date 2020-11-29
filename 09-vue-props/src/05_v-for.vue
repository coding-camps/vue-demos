<script setup>
import { ref } from "vue"
const arr = ref(["孙悟空", "猪八戒", "沙和尚", "唐僧"])
const arr2 = ref([
    {
        id: 1,
        name: "孙悟空",
        age: 18
    },
    {
        id: 2,
        name: "猪八戒",
        age: 28
    },
    {
        id: 3,
        name: "沙和尚",
        age: 38
    }
])
</script>
<template>
    <button @click="arr.push('白骨精')">点我一下</button>
    <button @click="arr2.unshift({ id: 4, name: '唐僧', age: 16 })">
        点我一下2
    </button>
    <ul>
        <li v-for="name of arr">{{ name }}</li>
    </ul>

    <ul>
        <li v-for="(name, index) in arr">{{ index }} - {{ name }}</li>
    </ul>

    <div v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</div>
    <hr />
    <!-- <template v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</template> -->

    <!-- 
        我们在使用v-for遍历时，旧的结构和新的结构是按照顺序进行对比的
        <div>孙悟空</div>
        <div>猪八戒</div>
        <div>沙和尚</div>

        <div>唐僧</div>
        <div>孙悟空</div>
        <div>猪八戒</div>
        <div>沙和尚</div>

        <div>孙悟空</div>
        <div>猪八戒</div>
        <div>沙和尚</div>
        <div>唐僧</div>

        在使用v-for时，可以为元素指定一个唯一的key
            有了key以后，元素再比较时就会按照相同的key去比较而不是顺序
            key 不要使用 index，用index作为key和没使用是一样的效果，因为index也在变化中
            详情参考一下几篇文章：
            - https://www.jb51.net/article/184127.htm
            - https://www.fengnayun.com/news/content/128679.html
            - https://juejin.cn/post/7055463998015143966
            - https://www.jianshu.com/p/1a18ddb9a866?ivk_sa=1024320u
            - https://www.jianshu.com/p/99f0db2dee28


        <div key=1>孙悟空</div>
        <div key=2>猪八戒</div>
        <div key=3>沙和尚</div>

        <div key=4>唐僧</div>
        <div key=1>孙悟空</div>
        <div key=2>猪八戒</div>
        <div key=3>沙和尚</div>
        
    -->
    <ul>
        <li v-for="({ id, name, age }, index) in arr2" :key="id">
            {{ name }} -- {{ age }}
            <input type="text" />
        </li>
    </ul>
</template>
