# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port that your application will run on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "server.js"]
