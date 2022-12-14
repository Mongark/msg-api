import supertest from "supertest";

import app from "../src/app";

describe("Routes in 'message_router'", () => {
    const server = supertest(app);

    it("should post an object successfully", async() => {
        const res = await server
            .post("/message")
            .send({msg: "Message"});

    });
});
