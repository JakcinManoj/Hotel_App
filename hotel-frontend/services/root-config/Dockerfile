FROM node:12.13.0

COPY . /src

WORKDIR /src

RUN npm install --global yarn

RUN yarn install

# Binds to port 9000
EXPOSE  9000

CMD ["yarn", "start"]