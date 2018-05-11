#!/bin/bash

kubectl delete -f nginx.yaml
kubectl create -f nginx.yaml