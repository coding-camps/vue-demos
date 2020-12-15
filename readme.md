# ReadMe

## Introduction

本仓库包含学习vue3的代码及笔记。大部分笔记均在代码文件注释中。

## Ackownledgement

- Vue3.0视频教程-李立超  
  B站视频：https://www.bilibili.com/video/BV1re4y1M7ko  
  Github: https://github.com/lilichao/vue-course  
  Give: https://gitee.com/ymhold/vue-course  

## Intro

-   vue 是一个前端的框架，主要负责帮助我们构建用户的界面
-   MVVM：Model - View - View Model
-   vue 负责 vm 的工作（视图模型），通过 vue 可以将视图和模型相关联。
    -   当模型发生变化时，视图会自动更新
    -   也可以通过视图去操作模型
-   vue 思想：
    -   组件化开发
    -   声明式的编程

## HelloWorld

1. 直接在网页中使用（像 jQuery 一样）

    - `        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`

2. 使用 vite

    - `yarn add vite -D`

3. 代码：

    ```javascript
    // 组件，就是一个普通js对象
    const App = {}

    // 创建应用
    const app = createApp(App)

    // 挂载到页面
    app.mount("#root")
    ```

4. 自动创建项目
    - `npm init vue@latest`
    - `yarn create vue`
