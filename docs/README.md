# msg-API
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

![GitHub repo size](https://img.shields.io/github/repo-size/Mongark/msg-api)

ExpressJS API for a messaging application.

## Endpoints
* `GET /ping` For health checking.
* `POST /message <data>` For posting new messages.
* `GET /message/:id` For gettting a message.
* `GET /messages` For gettting all messages.

## To-Do
### Setups
-[x] Setup ExpressJS server
-[x] Setup scripts for Jest
 -[x] `test` Jest with SWC
-[ ] Setup WebPack for production and development builds

### Health
-[x] `GET       /ping`      Returns pong. For connection checking

### Messages
-[x] `POST      /message`   Posts a message to MongoDB
-[x] `GET       /messages`  Gets all messages in MongoDB
-[x] `GET       /message`   Gets a message from MongoDB
-[ ] `PATCH     /message`   Modifies a message from MongoDB
-[ ] `DELETE    /message`   Deletes a message

### User
-[ ] `POST      /user <data>`           Creates new user
-[ ] `GET       /token/:token <user>`   Signs a token
-[ ] `POST      /validate/:token`       Validates a token

