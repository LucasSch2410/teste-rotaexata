FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

COPY ./src ./src

RUN npm install

EXPOSE 3333

CMD [ "npm", "run", "start" ]