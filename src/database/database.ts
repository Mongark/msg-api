import mongoose from "mongoose";

export async function connectDB() {
    const MONGO_URL: string = process.env.DATABASE_URL;

    if(!MONGO_URL) return;

    mongoose.set('strictQuery', true);
    await mongoose.connect(MONGO_URL);

    const database = mongoose.connection;
    database.on('error', (err) => console.log(err));

    return database;
}
