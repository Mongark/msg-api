import supertest from "supertest";
import mongoose from "mongoose";

import app from "../src/app";

describe("Connection test", () => {
    const server = supertest(app);

    beforeAll(async() => {
        var uri = process.env.DATABASE_URL;
        if(!uri) uri = "";
        await mongoose.connect(uri);
        mongoose.set('strictQuery', true);
    });


    afterAll(async() => {
        await mongoose.connection.close();
    });

    it("should return a valid response to '/ping'", async() => {
        const res = await server.get("/ping");

        expect(res.status).toEqual(200);
        expect(res.headers["content-type"]).toEqual("application/json; charset=utf-8");
        expect(res.body).toEqual("pong");
    });
});
