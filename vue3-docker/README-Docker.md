# 关于docker使用的说明

## 步骤

1. 前端编译

命令：`yarn build`

2. 编译Docker镜像

命令：`docker build -t vue3-alpine:latest .`

3. 新建并启动Docker容器

命令：`docker run  -p 8080:80 --name vue3-demo -d  vue3-alpine:latest`

或者通过Docker Desktop页面操作

## 其他命令

- 修改Docker tag

命令：`docker tag vue3-alpine:latest vue3-alpine:v0.1`

- 删除Docker 镜像

命令：`docker rmi vue3-alpine:latest`