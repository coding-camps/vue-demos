import { reactive, computed } from "vue"

export const countStore = reactive({
    count: 0,
    increment() {
        this.count++
    },
})
