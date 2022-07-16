# https://docs.docker.com/samples/library/node/

# Build container
FROM mongo
ARG DUMB_INIT_VERSION

WORKDIR /home/node

ADD . /home/node


RUN apt update  
RUN apt install curl -y
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update
RUN apt install git nodejs -y
RUN apt install yarn -y

# RUN npm install yarn

RUN yarn install

RUN yarn build && yarn cache clean

EXPOSE 3000
CMD ["yarn", "run", "serve"]
