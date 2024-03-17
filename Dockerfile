FROM node:18.12

RUN npm install -g http-server

WORKDIR /work

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
