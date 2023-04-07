import d, { XDuration, XDurationFactory } from "../index";

test("exports a default helper function", () => {
  expect(typeof d).toBe("function");
  expect(d(1, "ms") instanceof XDuration).toBe(true);
});

test("exports XDurationFactory", () => {
  expect(typeof XDurationFactory).toBe("function");
  expect(typeof XDurationFactory(1, "ms")).toBe("object");
});

test("exports XDuration", () => {
  expect(typeof XDuration).toBe("function");
  expect(typeof new XDuration({ seconds: 1 })).toBe("object");
});

describe("d.sum", () => {
  test("d.sum returns a duration summing the parts", () => {
    const duration = d.sum(
      // @ts-ignore
      d(1, "year") +
        d(1, "month") +
        d(1, "week") +
        d(1, "day") +
        d(1, "hour") +
        d(1, "minute") +
        d(1, "second") +
        d(1, "millisecond")
    );
    expect(duration.toObject()).toStrictEqual({
      years: 1,
      months: 1,
      weeks: 1,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
      milliseconds: 1,
    });
  });

  test("d.sum rescales result duration", () => {
    const duration = d.sum(
      // @ts-ignore
      d(3, "days") + d(4, "days")
    );
    expect(duration.toObject()).toStrictEqual({ weeks: 1 });
  });

  test("d.sum handles subtraction", () => {
    const duration = d.sum(
      // @ts-ignore
      d(1, "week") - d(3, "day")
    );
    expect(duration.toObject()).toStrictEqual({ days: 4 });
  });
});
