FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY . /app
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=builder /app/public /app/public
COPY --from=builder /app/.next/static /app/.next/static

EXPOSE 3000
ENTRYPOINT ["node", "server.js"]
