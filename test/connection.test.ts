import supertest from "supertest";

import app from "../src/app";

describe("Connection test", () => {
    const server = supertest(app);

    it("should return a valid response to '/ping'", (done) => {
        server
            .get("/ping")
            .send()
            .expect(200);
    });
});
