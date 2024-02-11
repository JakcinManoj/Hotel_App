# Use the official Node.js image as the base image
FROM node:12.13.0

# Set the working directory in the container
WORKDIR /usr/src/

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

RUN npm install --global yarn

# Install dependencies
RUN yarn install

# Copy the entire project to the working directory
COPY . .

# Expose port 9000
EXPOSE 9000

# Command to run the application
CMD ["yarn", "start"]

