FROM node:18-alpine
RUN npm i -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY src ./
COPY index.js ./

RUN pnpm install
CMD [ "pnpm", "start" ]