FROM node:12.0.0-alpine
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install
WORKDIR /usr/src/app
COPY . .
EXPOSE 5000
CMD ["npm","run","serve"]
