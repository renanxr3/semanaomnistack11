const generateUniqueId = require("../../src/utils/generateUniqueId");

describe("Generate Unique ID", () => {
  it("should generate a string with 8 bytes ", () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});

describe("Generate Unique ID", () => {
  it("should generate a unique ID", () => {
    const id = generateUniqueId();
    const id2 = generateUniqueId();

    expect(id).not.toBe(id2);
  });
});
