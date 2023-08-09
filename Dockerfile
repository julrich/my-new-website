FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app

COPY --link .npmrc package.json package-lock.json ./
RUN --mount=type=secret,id=secret_npmrc,target=/root/.npmrc npm ci

FROM base AS devcontainer

RUN apk update && apk add --no-cache git fish tig curl

WORKDIR /workspaces/energyui-storyblok-starter
RUN chown node:node /workspaces/energyui-storyblok-starter
USER node

COPY --from=deps --chown=node:node --link /app /workspaces/energyui-storyblok-starter
COPY --from=deps --chown=node:node --link /app/node_modules /workspaces/energyui-storyblok-starter/node_modules
COPY --link --chown=node:node . .

EXPOSE 3000
