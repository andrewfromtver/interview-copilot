FROM nginx:stable-alpine3.17

RUN apk add npm --no-cache

COPY default.conf \
    /etc/nginx/conf.d/default.conf
COPY webpack.config.js \
    package.json \
    package-lock.json \
    index.html \
    style.css \
    main.js \
    favicon.ico \
    manifest.webmanifest \
    /src/
COPY assets/ /src/assets/
COPY js/ /src/js/

WORKDIR /src

RUN npm i; npm run build
RUN mv /docs/* /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]