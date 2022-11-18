FROM node:18-alpine

WORKDIR /front

COPY package.json yarn.lock /front/

RUN yarn

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["yarn", "dev"]