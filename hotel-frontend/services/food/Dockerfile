FROM node:12.13.0

COPY . /src

WORKDIR /src

RUN npm install --global yarn

RUN yarn install

# Binds to port 9005
EXPOSE  9005

CMD ["yarn", "start"]