FROM xuntian/node:10.1-npm-5.6-yarn-1.6 as pac_builder
MAINTAINER xuntian "li.zq@foxmail.com"
COPY ./ /code/
WORKDIR /code
# RUN npm install
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=pac_builder /code/dist .
CMD ["nginx", "-g", "daemon off;"]
