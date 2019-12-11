Clone app's repo:
```
git clone git@github.com:num8er/hello-world-node.git
cd hello-world-node
```

Set env variable:
```
export PROJECT_ID="$(gcloud config get-value project -q)"
```

Build image:
```
docker build -t gcr.io/${PROJECT_ID}/hello-world:v1 .
docker tag gcr.io/${PROJECT_ID}/hello-world:v1 gcr.io/${PROJECT_ID}/hello-world:latest
```

Authenticate in GCloud Repository:
```
gcloud auth configure-docker
```

Push image to GCloud repo:
```
docker push gcr.io/${PROJECT_ID}/hello-world:v1
docker push gcr.io/${PROJECT_ID}/hello-world:latest
```

Apply deployment, create lb, create ingress:
```
cd k8s
sed "s/__PROJECT_ID_HERE__/$PROJECT_ID/g" ./deployment.yaml.template > ./deployment.yaml
kubectl apply -f deployment.yaml
kubectl apply -f np.yaml
kubectl apply -f ingress.yaml
```
