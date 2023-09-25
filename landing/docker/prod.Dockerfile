# Production Dockerfile for the website
FROM node:20-alpine

WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
RUN npm i

# Copy code, test, and build
COPY . .
RUN npm run test run && npm run build

# Run production server
CMD ["npm", "start"]

