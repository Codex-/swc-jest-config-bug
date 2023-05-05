import { addOne } from "./utility";

describe("utility", () => {
  it("can add one", () => {
    expect(addOne(1)).toStrictEqual(2);
  });
});
