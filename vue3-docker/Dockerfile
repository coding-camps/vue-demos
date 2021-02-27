# 生产环境使用Nginx
FROM nginx:stable-alpine

# 从构建阶段复制构建结果到Nginx目录
COPY dist/ /usr/share/nginx/html

# 暴露8081端口
EXPOSE 80
  
  # 启动Nginx，并且Nginx将持续运行
CMD ["nginx", "-g", "daemon off;"]