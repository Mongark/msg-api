import supertest from "supertest";

import app from "../src/app";

describe("Connection test", () => {
    const server = supertest(app);

    it("should return a valid response to '/ping'", async() => {
        const res = await server.get("/ping");

        console.log(res.type);
        expect(res.status).toEqual(200);
        expect(res.headers["content-type"]).toEqual("application/text; charset=utf-8");
        expect(res.body).toEqual("pong");

    });
});
