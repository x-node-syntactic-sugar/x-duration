import { XDuration } from "../x-duration";

describe("XDuration - Date converters", () => {
  test("XDuration#fromNow returns the current JS Date increased by the duration", () => {
    const date = new XDuration({ minutes: 1 }).fromNow;

    expect(date.getTime() / 1000).toBeCloseTo(Date.now() / 1000 + 60, 1);
    expect(date instanceof Date).toBe(true);
  });

  test("XDuration#after returns the given JS Date increased by the duration", () => {
    const givenDate = new Date("2036-01-01 12:00:00");
    const date = new XDuration({ minutes: 1 }).after(givenDate);

    expect(date.getTime() / 1000).toBeCloseTo(
      givenDate.getTime() / 1000 + 60,
      1
    );
    expect(date instanceof Date).toBe(true);
  });

  test("XDuration#since returns the given JS Date increased by the duration", () => {
    const givenDate = new Date("2036-01-01 12:00:00");
    const date = new XDuration({ minutes: 1 }).since(givenDate);

    expect(date.getTime() / 1000).toBeCloseTo(
      givenDate.getTime() / 1000 + 60,
      1
    );
    expect(date instanceof Date).toBe(true);
  });

  test("XDuration#ago returns the current JS Date decreased by the duration", () => {
    const date = new XDuration({ minutes: 1 }).ago;

    expect(date.getTime() / 1000).toBeCloseTo(Date.now() / 1000 - 60, 1);
    expect(date instanceof Date).toBe(true);
  });

  test("XDuration#before returns the given JS Date decreased by the duration", () => {
    const givenDate = new Date("2036-01-01 12:00:00");
    const date = new XDuration({ minutes: 1 }).before(givenDate);

    expect(date.getTime() / 1000).toBeCloseTo(
      givenDate.getTime() / 1000 - 60,
      1
    );
    expect(date instanceof Date).toBe(true);
  });

  test("XDuration#until returns the given JS Date decreased by the duration", () => {
    const givenDate = new Date("2036-01-01 12:00:00");
    const date = new XDuration({ minutes: 1 }).until(givenDate);

    expect(date.getTime() / 1000).toBeCloseTo(
      givenDate.getTime() / 1000 - 60,
      1
    );
    expect(date instanceof Date).toBe(true);
  });
});
