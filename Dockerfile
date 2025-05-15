FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install --production

COPY dist ./dist

EXPOSE 5008

CMD ["yarn", "start"]