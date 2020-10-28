<script setup>
import MyButton from "./components/MyButton.vue"
import A from "./components/A.vue"
import MyWrapper from "./components/MyWrapper.vue"

const name = "孙悟空"
</script>
<template>
    <h1>App组件</h1>
    <!-- 
        希望在父组件中指定子组件中的内容
            - 我们可以通过插槽（slot）来实现该需求
        <MyButton>插槽的入口</MyButton>

        <button>
            <slot></slot>  插槽的出口
        </button>

        通过插槽引入组件，位于父组件的作用域中
    -->
    <hr/>
    <h1>基本插槽</h1>
    例1:
    <MyButton>App定义的内容</MyButton>
    <br/>
    例2:
    <MyButton>
        <A :name="name"></A>
    </MyButton>

    <hr/>
    <h1>具名插槽</h1>
    <MyWrapper>
        <!-- 具名插槽的入口 -->
        <template v-slot:aa>一级标题</template>
        <template #bb>二级标题</template>
    </MyWrapper>
</template>
