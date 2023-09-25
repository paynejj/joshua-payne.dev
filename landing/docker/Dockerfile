# Development Dockerfile for the website
FROM node:20-slim

# Code is inserted via volume for hot reloading
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm i

# Copy the rest of the code
COPY . .

# Run development server
CMD ["npm", "run", "dev"]

