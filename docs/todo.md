# To-Do
## Setups
-[ ] Setup ExpressJS server
-[ ] Setup scripts for Jest
 -[ ] `fast-test` Jest with SWC
 -[ ] `test` Jest with ts-loader
-[ ] Setup WebPack for production and development builds

## Endpoints

### Health
-[ ] `GET       /ping`      Returns pong. For connection checking

### Messages
-[ ] `POST      /message`   Posts a message to MongoDB
-[ ] `GET       /messages`  Gets all messages in MongoDB
-[ ] `GET       /message`   Gets a message from MongoDB
-[ ] `PATCH     /message`   Modifies a message from MongoDB
-[ ] `DELETE    /message`   Deletes a message

### User
-[ ] `POST      /user <data>`           Creates new user
-[ ] `GET       /token/:token <user>`   Signs a token
-[ ] `POST      /validate/:token`       Validates a token

