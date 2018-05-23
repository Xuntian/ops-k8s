#!/bin/bash

set -xe
PWD=$(pwd)
ENV_DOCKERFILE_PATH=$PWD/env.dockerfile
if [[ ! -e $ENV_DOCKERFILE_PATH ]]; then 
    echo "env.dockerfile文件不存在"
    exit 1
fi
docker build -t xuntian/node:10.1-npm-5.6-yarn-1.6 -f env.dockerfile ./
docker run --rm -v /var/jenkins_home/workspace/node/node:/code xuntian/node:10.1-npm-5.6-yarn-1.6 npm install


BUILD_DOCKERFILE_PATH=$PWD/Dockerfile
if [[ ! -e $BUILD_DOCKERFILE_PATH ]]; then 
    echo "build.dockerfile文件不存在"
    exit 1
fi 
docker build -t xuntian/node_project:v2 ./

docker tag xuntian/node_project:v1 10.28.18.13/node_project:v2
docker push 10.28.18.13/node_project:v2

kubectl delete pod node01

sleep 5s
kubectl create -f node01.yaml

