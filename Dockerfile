FROM node:12.10.0-alpine

ENV NODE_PATH=/app

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 5051

CMD [ "npm", "start" ]
