FROM python:3.11-bullseye

WORKDIR /app

# Install Node.js 18.x and system dependencies
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs git curl patch build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy repository
COPY . .

# Install Python dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends python3 python3-pip \
    && rm -rf /var/lib/apt/lists/*
RUN pip3 install pytest pytest-timeout

# Install Node.js dependencies (both client and server)
RUN cd client && npm ci || npm install && cd .. \
    && cd server && npm ci || npm install

ENV NODE_ENV=production
