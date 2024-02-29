# syntax = docker/dockerfile:experimental
FROM node:15.14.0 as build
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/app/node_modules yarn install
ARG SITE
RUN --mount=type=cache,target=/app/node_modules yarn run static-$SITE
