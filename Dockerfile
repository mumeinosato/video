FROM node:18.12 as build

WORKDIR /work

COPY package*.json ./
RUN npm install

EXPOSE 5173

CMD ["npm", "dev"]
