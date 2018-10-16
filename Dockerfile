FROM node

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /graphql/
COPY yarn.lock .
COPY package.json .
RUN npm install yarn -g
RUN yarn --ignore-engines

COPY . .

EXPOSE 1111

CMD [ "yarn", "start" ]
