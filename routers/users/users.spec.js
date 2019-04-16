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
        username: "Erick",
        password: "password",
        userType: "guide"
      });
      expect(user.username).toBe("Erick");

      user = await Users.add({
        username: "Adam",
        password: "kjahdlkfjhakdjh",
        userType: "tourist"
      });
      expect(user.username).toBe("Adam");
    });
  });

  describe("find", () => {
    afterEach(async () => {
      await db("users").truncate();
    });

    it("should find all users in the database", async () => {
      let user = await Users.add({
        username: "Jor",
        password: "password",
        userType: "guide"
      });
      expect(user.username).toBe("Jor");

      const games = await Users.find();
      expect(games).toHaveLength(1);
    });
  });
});