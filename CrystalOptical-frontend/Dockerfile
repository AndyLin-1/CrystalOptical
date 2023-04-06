FROM --platform=$BUILDPLATFORM node:lts-alpine
RUN apk add --no-cache python3 py3-pip make g++
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

EXPOSE 4200
CMD ["yarn", "start"]