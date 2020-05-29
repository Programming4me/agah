FROM node:10

WORKDIR /usr/src/routes

COPY package.json ./
#  instal packages
RUN npm install --save express mongoose body-parser cors
# install development tools
RUN npm install --dev dotenv nodemon

COPY . .

EXPOSE 3000

CMD ["npm", "start"]