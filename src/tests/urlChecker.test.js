import { validURL } from "../client/js/urlChecker";

describe("test function validURL", () => {
  it("function validURL exist and function", async () => {
    expect(validURL).toBeDefined();
    expect(typeof validURL).toBe("function");
  });
  it("the function validURL valid url", () => {
    const url = "https://www.example.com:8080/path";
    const response = validURL(url);
    expect(response).toBeDefined();
    expect(response).toBe(true);
  });
  it("function validURL invalid url", () => {
    const urlInvalid = "test";
    const response = validURL(urlInvalid);
    expect(response).toBeDefined();
    expect(response).toBe(false);
  });
});
