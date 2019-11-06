FROM node:10

WORKDIR /usr/src/app

COPY . .

RUN cd client && yarn && yarn build

RUN cd server && yarn && yarn build

EXPOSE 8080

CMD ["node","./server/dist/app.js"]
