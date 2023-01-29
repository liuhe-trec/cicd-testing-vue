# 基础镜像使用ngixn
FROM nginx
# 将前端dist文件中的内容复制到nginx目录
COPY dist/ /usr/share/nginx/html/
ARG envType=staging
COPY cloudbuild/nginx_${envType}.conf /etc/nginx/conf.d/default.conf