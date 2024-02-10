FROM node:12.13.0

COPY . /src

WORKDIR /src

RUN npm install --global yarn

RUN yarn install

# Binds to port 9004
EXPOSE  9004

CMD ["yarn", "start"]