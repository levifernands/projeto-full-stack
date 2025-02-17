FROM node:20-alpine

WORKDIR /usr/src/app

COPY ./package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

# Comando para rodar o React
CMD ["npm", "start"]
