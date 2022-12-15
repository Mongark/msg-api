import supertest from "supertest";

import app from "../src/app";

describe("Routes in 'message_router'", () => {
    const server = supertest(app);

    it("should return a error 400 upon sending an empty body to 'POST /message'", async() => {
        const res = await server
            .post("/message");

        expect(res.status).toEqual(400);
    });
});
