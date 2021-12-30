FROM node:16.1.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install react-scripts

COPY . ./

CMD ["npm", "start"]

# docker build -f Dockerfile -t test .
# docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOOLING=true test
# docker run -v ${PWD}:/app -v /app/node_modules -p 80:3000 test

# docker pull jenkins/jenkins:lts-jdk11
# docker run -p 8888:8080 -p 50000:50000 jenkins/jenkins:lts-jdk11
