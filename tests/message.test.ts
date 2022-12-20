import supertest from "supertest";
import mongoose from "mongoose";

import app from "../src/app";

describe("Routes in 'message_router'", () => {
    const server = supertest(app);
    const msg = {
        from_user: "Bob",
        to_user: "Ross",
        message: "My message",
    };

    beforeAll(async() => {
        var uri = process.env.DATABASE_URL;
        if(!uri) uri = "";
        await mongoose.connect(uri);
        mongoose.set('strictQuery', true);
    });


    afterAll(async() => {
        await mongoose.connection.close();
    });

    it("should return a error 400 upon sending an empty body to 'POST /message'", async() => {
        const res = await server.post("/message");

        expect(res.status).toEqual(400);
        expect(res.body).toEqual("Post request has empty body");
    });

    it("should return a status code of 201 upon sending an valid body to 'POST /message'", async() => {
        const res = await server
            .post("/message").send(msg)
            .set('in-testing-env', 'true');

        expect(res.status).toEqual(201);

        const data = {
            from_user: res.body.data['from_user'],
            to_user: res.body.data['to_user'],
            message: res.body.data['message'],
        }

        expect(data).toEqual(msg);
    });

    it("should return a error 400 upon sending an empty query to 'GET /message'", async() => {
        const res = await server.get("/message");

        expect(res.status).toEqual(400);
        expect(res.body).toEqual("Post request has empty body");
    });
});
