FROM node:12.19.0-alpine3.11

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Copy source files
COPY . /app

CMD [ "npm", "start"]