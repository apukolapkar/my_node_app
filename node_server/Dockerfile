FROM node

RUN mkdir -p /node_server
RUN npm install express
RUN npm install get-docker-host
RUN npm install is-in-docker

WORKDIR /node_server

EXPOSE 5051

CMD ["node", "index.js"]
