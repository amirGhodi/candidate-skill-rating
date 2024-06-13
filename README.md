<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).



## Notes:-
-> Add responses collection before hitting the rating api and aggregate api
candidate ID should be updated.
response collection sample data:-
{
  "_id": {
    "$oid": "666982b2d0a76734dd834c2c"
  },
  "candidateID": "666ab8b661a38700cc08e1af", 
  "candidateResponse": [
    {
      "skillId": 1,
      "difficulty_level": "easy",
      "question": "What is node?",
      "response": "",
      "rating": 5
    },
    {
      "skillId": 1,
      "difficulty_level": "easy",
      "question": "What is express?",
      "rating": 5,
      "response": ""
    },
    {
      "skillId": 1,
      "difficulty_level": "hard",
      "question": "How to handle child processes in node?",
      "rating": 4,
      "response": ""
    },
    {
      "skillId": 1,
      "difficulty_level": "medium",
      "question": "What are streams?",
      "rating": 4,
      "response": ""
    }
  ],
  "__v": 0
}
## API's curls

1) register user

curl --location 'http://localhost:3000/auth/register' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Amir reviewer",
  "role": "reviewer",
  "password": "password123"
}'

2) login user

curl --location 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Amir reviewer",
  "password": "password123"
}'

3) get all users

curl --location 'http://localhost:3000/users' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFtaXIgY2FuZGlkYXRlIiwicm9sZSI6ImNhbmRpZGF0ZSIsImlhdCI6MTcxODI3NTIwMCwiZXhwIjoxNzE4Mjc4ODAwfQ.GlOTW85EQL_GHdFWTMYWlNkC904UvaSCt0mLEcTrQjQ'

4) get user by Id

curl --location 'http://localhost:3000/users/666acc33add503f14ecdb4cf' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFtaXIgY2FuZGlkYXRlIiwicm9sZSI6ImNhbmRpZGF0ZSIsImlhdCI6MTcxODI3NTIwMCwiZXhwIjoxNzE4Mjc4ODAwfQ.GlOTW85EQL_GHdFWTMYWlNkC904UvaSCt0mLEcTrQjQ'

5) update user by id

curl --location --request PUT 'http://localhost:3000/users/666acc33add503f14ecdb4cf' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFtaXIgY2FuZGlkYXRlIiwicm9sZSI6ImNhbmRpZGF0ZSIsImlhdCI6MTcxODI3NTIwMCwiZXhwIjoxNzE4Mjc4ODAwfQ.GlOTW85EQL_GHdFWTMYWlNkC904UvaSCt0mLEcTrQjQ' \
--data '{
  "name": "Amir reviewer"
}'


6) delete user by id

curl --location --request DELETE 'http://localhost:3000/users/666acc33add503f14ecdb4cf' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFtaXIgY2FuZGlkYXRlIiwicm9sZSI6ImNhbmRpZGF0ZSIsImlhdCI6MTcxODI3NTIwMCwiZXhwIjoxNzE4Mjc4ODAwfQ.GlOTW85EQL_GHdFWTMYWlNkC904UvaSCt0mLEcTrQjQ'

7) update rating 

curl --location --request PUT 'http://localhost:3000/responses' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFtaXIgcmV2aWV3ZXIiLCJyb2xlIjoicmV2aWV3ZXIiLCJpYXQiOjE3MTgyNzUzMjUsImV4cCI6MTcxODI3ODkyNX0.ZPXibiRt-RvlwCuBPE0KDv4O1Zp8hk93vaB7KokYgZI' \
--header 'Content-Type: application/json' \
--data '{
    "candidateID": "666ab8b661a38700cc08e1af",
    "question": "What is node?",
    "difficulty_level": "easy",
    "rating": 5
}'

8) aggregate result 

curl --location 'http://localhost:3000/responses/aggregate' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFtaXIgcmV2aWV3ZXIiLCJyb2xlIjoicmV2aWV3ZXIiLCJpYXQiOjE3MTgyNzUzMjUsImV4cCI6MTcxODI3ODkyNX0.ZPXibiRt-RvlwCuBPE0KDv4O1Zp8hk93vaB7KokYgZI' \
--header 'Content-Type: application/json' \
--data '{
  "candidateID": "666ab8b661a38700cc08e1af"
}'