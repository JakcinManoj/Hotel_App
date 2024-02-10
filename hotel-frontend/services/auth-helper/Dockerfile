FROM node:12.13.0

COPY . /src

WORKDIR /src

RUN npm install --global yarn

RUN yarn install

# Binds to port 9001
EXPOSE  9001

CMD ["yarn", "start"]