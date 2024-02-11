FROM node:12.13.0

WORKDIR /usr/src/app

COPY package*.json  yarn.lock ./

RUN yarn

COPY . .

ENV FILE .env

EXPOSE 4001

CMD [ "yarn", "start" ]
