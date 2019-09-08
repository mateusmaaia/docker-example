# Docker-Example

## Class topics

### 1 - Dockerize our application

`docker build -t $(DOCKER_IMAGE):latest -f Dockerfile .`  

`docker run -p 5051:5051 $(DOCKER_IMAGE):latest`

### 2 - Using detached mode

`-d`

### 3 - Reading logs

`docker logs -t --tail 1000 $(DOCKER_IMAGE)`

### 4 - Executing commandds on your docker container

`docker exec -it $(DOCKER_IMAGE) bash`

### 5 - Dockerignore

### 6 - A few tips
