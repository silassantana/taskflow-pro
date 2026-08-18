FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
COPY server/package.json server/package.json
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production

EXPOSE 4000
CMD ["node", "server/dist/index.js"]
