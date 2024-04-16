import { handleSubmit } from "../client/js/formHandler";

describe("test function handleSubmit", () => {
  it("function handleSubmit should exist and be a function", async () => {
    expect(handleSubmit).toBeDefined();
    expect(typeof handleSubmit).toBe("function");
  });
});
