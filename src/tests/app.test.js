const request = require("supertest");
const app = require("../server/app");

describe("test get path", () => {
  it("should response the get method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
  it("should response when get method test", async () => {
    const response = await request(app).get("/test");
    expect(response.statusCode).toBe(200);
    expect(response.body.time).toBe("now");
  });
});
