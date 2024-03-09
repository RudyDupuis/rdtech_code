FROM node:16 as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "start", "--", "-p", "3000"]
