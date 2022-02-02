import { indexCarousel, dateConverter } from "../utils/utils";

describe("indexCarousel function", () => {
  it("should increment by 1", () => {
    const current = 1;
    const inc = 1;
    const max = 3;
    const actual = indexCarousel(current, inc, max);
    expect(actual).toBe(2);
  });
  it("should decrement by 1", () => {
    const current = 1;
    const inc = -1;
    const max = 3;
    const actual = indexCarousel(current, inc, max);
    expect(actual).toBe(0);
  });
  it("should decrement to index length", () => {
    const current = 0;
    const inc = -1;
    const max = 3;
    const actual = indexCarousel(current, inc, max);
    expect(actual).toBe(max);
  });
  it("should increment to 0 index when larger than max", () => {
    const current = 3;
    const inc = 1;
    const max = 3;
    const actual = indexCarousel(current, inc, max);
    expect(actual).toBe(0);
  });
});

describe("dateConverter", () => {
  it("converts dates", () => {
    const input = "2-2-2022";
    const actual = dateConverter(input);
    const expected = "February 2, 2022";
    expect(actual).toBe(expected);
  });
});
