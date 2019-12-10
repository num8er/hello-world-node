FROM node:10.17-alpine

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

CMD npm start

