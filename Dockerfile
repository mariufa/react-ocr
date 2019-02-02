FROM node:10.15.1-alpine

COPY . .

RUN npm install

CMD npm start