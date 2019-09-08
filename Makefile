DOCKER_IMAGE = mateusmaaia/docker-class
DOCKER_API_NAME := docker-class
DOCKER_DEV_LOCAL := docker-compose -f docker-compose.yml

.PHONY: install
install:
	npm install

.PHONY: run
run:
	npm install && NODE_ENV=dev npm start

.PHONY: dev
dev:
	$(DOCKER_DEV_RUN) up --remove-orphans

.PHONY: docker/build
docker/build:
	docker build -t $(DOCKER_IMAGE):latest -f Dockerfile .

.PHONY: docker/run
docker/run:
	docker run -p 5051:5051 $(DOCKER_IMAGE):latest
