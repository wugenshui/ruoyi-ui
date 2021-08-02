FROM nginx:1.19.0

LABEL maintainer="bo chen <chenbo@huaweisoft.com>"

ENV LANG C.UTF-8

# 设置容器时间
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# 设置容器时区
RUN echo 'Asia/Shanghai' >/etc/timezone

# 定制默认配置文件(可选步骤)
#COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html/

EXPOSE 80