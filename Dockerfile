FROM node:22 AS builder

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

FROM node:22-alpine

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .

EXPOSE 3000
CMD [ "node", "server.js" ]