import { connectDB } from "../src/database/database";

describe("Tests for database connection", () => {
    it("should connect successfully", () => {
        const db = connectDB();

        db?.close();
    });
});
