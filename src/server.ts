import app from "./app";
import { connectDB } from "./database/database";
import { debug } from "console";

connectDB().then((db) => {
    process.on('SIGTERM', () => db.close(true, () => debug("Closing connection to MongoDB")));
}).catch((err) => {
    throw("DB failed to connect");
});

app.listen(8080, () => {
    console.log("Server listening on port "+8080);
});
