FROM node:10 as server

WORKDIR /tmp/server

COPY server .

RUN yarn --frozen-lockfile && yarn build

FROM node:10 as client

WORKDIR /tmp/client

COPY client .

RUN yarn --frozen-lockfile && yarn build

FROM node:10 as app

LABEL Maintainer="Femi - NERT"

WORKDIR /app/www

COPY ./server/package.json ./server/yarn.lock ./

RUN yarn --pure-lockfile --prod

RUN mkdir server

COPY ./server/bin bin

COPY --from=client /tmp/client/build build
COPY --from=server /tmp/server/dist dist

ENV MONGO_URI="mongodb://mongo:27017/test"

EXPOSE 4000

CMD ["node", "./bin/www"]

