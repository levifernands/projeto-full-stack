FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./server-api/package*.json ./
RUN npm install

COPY ./server-api/ .

EXPOSE 3000

# Comando para rodar o servidor
CMD ["npm", "run", "start:dev"]
