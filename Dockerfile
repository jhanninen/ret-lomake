FROM node:16 as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build


FROM nginx:1.21-alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

