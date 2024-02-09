# Pull base image.
FROM node:12.13.0

COPY . /src

WORKDIR /src

RUN npm install --global yarn

RUN yarn install

# Binds to port 4002
EXPOSE  4002

CMD ["yarn", "start"]