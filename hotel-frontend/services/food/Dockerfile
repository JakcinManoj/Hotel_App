FROM node:12.13.0

WORKDIR /usr/src/app

COPY package*.json  yarn.lock ./

RUN yarn

COPY . .

EXPOSE 9005

CMD [ "yarn", "start" ]
