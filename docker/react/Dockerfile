FROM node:17

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    curl \
    nano

#Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install global
RUN npm i -g pm2

EXPOSE 3000
