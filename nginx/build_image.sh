#!/bin/bash

PWD=$(pwd)
PATH_DOCKERFILE=$PWD/Dockerfile
IMAGE_TAG="v1"

if [[ ! -e $PATH_DOCKERFILE ]]; then 
    echo "$PATH_DOCKERFILE not found"
    exit 1
else 
    docker build -t keepwork/stage/nginx:$IMAGE_TAG .
fi

REGISTRY_HOST="10.28.18.13"
docker tag keepwork/stage/nginx:$IMAGE_TAG $REGISTRY_HOST/keepwork/stage/nginx:$IMAGE_TAG
docker push $REGISTRY_HOST/keepwork/stage/nginx:$IMAGE_TAG