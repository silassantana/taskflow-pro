FROM python:3.11-bullseye

WORKDIR /app


# Install Node.js 18.x
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs git curl patch build-essential \
    && rm -rf /var/lib/apt/lists/*


# Copy repository
COPY . .

RUN apt-get update \
	&& apt-get install -y --no-install-recommends python3 python3-pip \
	&& rm -rf /var/lib/apt/lists/*
RUN pip3 install pytest pytest-timeout

ENV NODE_ENV=production

