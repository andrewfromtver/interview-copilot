FROM node:current-alpine3.17

COPY main.mjs \
    package.json \
    package-lock.json \
    default.conf \
    /src/
WORKDIR /src
RUN npm i 

EXPOSE 80

CMD ["node", "main.mjs"]