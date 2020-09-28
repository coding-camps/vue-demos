
// import { createApp } from "vue";
// // import { createApp } from "vue/dist/vue.esm-bundler.js"
// import App from "./App.vue"

// // 创建应用并挂载
// // mount()的返回值是根组件的实例
// createApp(App).mount("#app")

// import { createApp } from "vue/dist/vue.esm-bundler.js"
import { createApp } from "vue"
import App from "./App.vue"

// 创建应用并挂载
// mount()的返回值是跟组件的实例
const vm = createApp(App).mount("#app")
