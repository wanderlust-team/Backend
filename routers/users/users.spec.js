// const db = require('supertest');
const db = require("../../data/dbConfig.js");
const Users = require("./users-model.js");

describe("userModel.js", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("add", () => {
    afterEach(async () => {
      await db("users").truncate();
    });

    it("should insert the provided user into the database", async () => {
      let user = await Users.add({
        username: "Michael",
        password: "password",
        email: "email@email.org",
        guide: true
      });
      expect(user.username).toBe("Michael");
    });
  });

  describe("find", () => {
    afterEach(async () => {
      await db("users").truncate();
    });

    it("should find all users in the database", async () => {
      const games = await Users.find();
      expect(games).toHaveLength(7);
    });
  });
});