#!/usr/bin/env sh

FROM node:18.17.0

WORKDIR /usr/src/app
COPY package* ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

