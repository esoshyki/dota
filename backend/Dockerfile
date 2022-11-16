FROM node:18-alpine

WORKDIR /workspace

COPY package.json yarn.lock /workspace/

RUN yarn

COPY . .

RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]