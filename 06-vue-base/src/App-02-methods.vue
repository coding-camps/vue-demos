<script>

export default {
    // data用来指定实例对象中的响应式属性
    data() {
        return {
            msg: "今天天气真不错！",
        }
    },

    /* 
        methods 用来指定实例对象中的方法 
            - 它是一个对象，可以在它里边定义多个方法
            - 这些方法最终将会被挂载到组件实例上
            - 可以直接通过组件实例来调用这些方法    
            - 所有组件实例上的属性都可以在模板中直接访问
            - methods中函数的this会被自动绑定为组件实例
    */
    methods: {
        // 该方法在程序中没有使用，在浏览器后台可以通过 vm.hello() 调用。
        hello() {
            console.log("Hello Vue3~!");
        },

        sum(a, b) {
            // console.log(this) // 组件实例 vm
            return a + b
        },

        // sum2: (a, b, vm) => {
        //     console.log(vm, a, b);
        //     return a + b
        // },

        changeMsg() {
            this.msg = "新的消息！"
        },
    }

}
</script>

<template>
    <h1>{{ msg }}</h1>
    <h2>sum(3, 5) = {{ sum(3, 5) }}</h2>
    <!-- <h2>sum2(3, 5) = {{ sum2(3, 5) }}</h2> -->
    <button @click="changeMsg">点我一下</button>
</template>
