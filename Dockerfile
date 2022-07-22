FROM node:12.18.4
WORKDIR /Users/dhkim/project/dhk-project/web-project-app

COPY package.json .

ADD . .
RUN npm install

EXPOSE 8080
CMD ["npm", "run", "serve"]