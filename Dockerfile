FROM node:20.9.0 
RUN useradd -r usertest

WORKDIR /app
RUN chown usertest /app

COPY --chown=usertest . .
WORKDIR /app/build/
RUN "rm" "index.js"

WORKDIR /app
RUN "npm" "install"
RUN "npx" "tsc"

USER usertest
CMD "node" "build/index.js"