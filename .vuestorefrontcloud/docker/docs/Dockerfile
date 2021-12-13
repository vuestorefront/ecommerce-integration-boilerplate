FROM node:14 AS build

WORKDIR /var/www

COPY . .

RUN yarn install --network-concurrency 1
RUN cd packages/api-client && yarn build && yarn cache clean --all
RUN cd packages/composables && yarn build && yarn cache clean --all

RUN cd docs \
  && npm install \
  && sed -i "s/base: '\/',/base: '\/__replace_me__\/',/g" ./.vuepress/config.js \
  && cat ./.vuepress/config.js \
  && npm run build

FROM nginx

COPY --from=build /var/www/docs/.vuepress/dist /usr/share/nginx/html/__replace_me__
