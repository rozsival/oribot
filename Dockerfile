FROM node:22-alpine

COPY . .

RUN yarn install --cache-folder ./ycache --frozen-lockfile --non-interactive
RUN yarn build
RUN yarn install --cache-folder ./ycache --frozen-lockfile --non-interactive --production

EXPOSE 4000

CMD ["yarn", "start"]
