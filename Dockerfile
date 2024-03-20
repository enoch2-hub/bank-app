FROM node:14-alpine

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json /app/src/ 
# or COPYT package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]



