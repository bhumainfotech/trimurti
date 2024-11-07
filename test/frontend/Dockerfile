# Dockerfile for the frontend service
FROM node:14

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port for the React app
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

