const httpMocks = require("node-mocks-http");
const requestPost = require("../server/handleRequest");
const validateRequest = requestPost.validateInputRequest;
const postRequest = requestPost.postRequest;

describe("test the function postRequest", () => {
  it("should be a function and exist", async () => {
    expect(postRequest).toBeDefined();
    expect(typeof postRequest).toBe("function");
  });
  it("should throw error when incorrect input", async () => {
    const next = jest.fn();
    const req = httpMocks.createRequest({
      body: {
        url: "https://www.testinvalid.com",
      },
    });
    const res = httpMocks.createResponse();
    validateRequest(req, res, next);
    expect(res.statusCode).toBe(400);
    expect(res._isJSON()).toBeTruthy();
    const json = JSON.parse(res._getData());
    expect(json.message).toBe("input invalid");
  });
});
