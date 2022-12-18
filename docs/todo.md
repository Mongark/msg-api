# To-Do
## Setups
-[x] Setup ExpressJS server
-[x] Setup scripts for Jest
 -[x] `test` Jest with SWC
-[ ] Setup WebPack for production and development builds

## Endpoints

### Health
-[x] `GET       /ping`      Returns pong. For connection checking

### Messages
-[x] `POST      /message`   Posts a message to MongoDB
-[ ] `GET       /messages`  Gets all messages in MongoDB
-[ ] `GET       /message`   Gets a message from MongoDB
-[ ] `PATCH     /message`   Modifies a message from MongoDB
-[ ] `DELETE    /message`   Deletes a message

### User
-[ ] `POST      /user <data>`           Creates new user
-[ ] `GET       /token/:token <user>`   Signs a token
-[ ] `POST      /validate/:token`       Validates a token

