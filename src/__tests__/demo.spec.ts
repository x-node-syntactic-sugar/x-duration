import d, { XDuration } from "../index";

describe("Basic usage", () => {
  test("It makes duration unit convertion more expressive", () => {
    expect(d(86400000, "milliseconds").inDays).toBe(1);
    expect(d(30, "seconds").inMilliseconds).toBe(30000);
    expect(d(1, "minute").inMilliseconds).toBe(60000);
    expect(d(10, "minutes").inSeconds).toBe(600);
    expect(d(1.5, "hours").inMinutes).toBe(90);
    expect(d(1.5, "days").inHours).toBe(36);
    expect(d(0.5, "weeks").inHours).toBe(3 * 24 + 12);
    expect(d(0.5, "months").inDays).toBe(15);
    expect(d(1.5, "quarters").inMonths).toBe(4.5);
    expect(d(1.5, "years").inMonths).toBe(18);
  });

  test("It helps manipulating dates", () => {
    const nowSeconds = Date.now() / 1000;

    expect(d(3, "minutes").ago.getTime() / 1000).toBeCloseTo(
      nowSeconds - 180,
      1
    );
    expect(d(2, "hours").fromNow.getTime() / 1000).toBeCloseTo(
      nowSeconds + 7200,
      1
    );

    const givenDate = new Date("2036-01-01 12:00:00");
    const givenDateSeconds = givenDate.getTime() / 1000;
    expect(d(2, "hours").before(givenDate).getTime() / 1000).toBeCloseTo(
      givenDateSeconds - 7200,
      1
    );
    expect(d(3, "minutes").after(givenDate).getTime() / 1000).toBeCloseTo(
      givenDateSeconds + 180,
      1
    );
  });

  test("It helps manipulating durations", () => {
    expect(d(2, "hours").plus(d(1, "minute")).toISO()).toBe("PT2H1M");
    expect(d(2, "hours").minus(d(1, "minute")).toISO()).toBe("PT2H-1M");

    // Rescales units to their largest representation
    expect(d(90, "minutes").rescale().toObject()).toStrictEqual({
      hours: 1,
      minutes: 30,
    });
  });

  test("It helps to output durations", () => {
    const duration = d(2, "months").plus(d(10, "days")).plus(d(1, "minute"));

    expect(duration.toISO()).toBe("P2M10DT1M");
    expect(duration.toFormat("M S")).toBe("2 864060000");
    expect(duration.toObject()).toStrictEqual({
      minutes: 1,
      days: 10,
      months: 2,
    });
  });
});

/**
 * Native JS Date can have some surprising behaviours, and as the goal of this lib
 * is not to tackle them, we use the library "luxon" under the hood.
 */
describe("Fixes JS Date shortcomings", () => {
  test("Adding a month to the 31th of January", () => {
    // Native JS Date
    const date = new Date("2036-01-31");
    expect(new Date(date.setMonth(date.getMonth() + 1)).toISOString()).toBe(
      new Date("2036-03-02").toISOString()
    );

    // With Luxon
    expect(d(1, "month").after(new Date("2036-01-31")).toISOString()).toBe(
      new Date("2036-02-29").toISOString()
    );
  });
});

/**
 * Operator overloading is not really possible in Javascript, but you can sum
 * durations to other durations (though it has some limitations, and typescript
 * is not really happy about it.)
 */
describe("Type unboxing", () => {
  test("XDuration + XDuration", () => {
    // @ts-ignore: The right-hand side of an arithmetic operation must be of type
    // 'any', 'number', 'bigint' or an enum type
    expect(d.sum(d(2, "hours") - d(1, "minute")).toISO()).toBe("PT1H59M");

    // Note: XDuration + XDuration will return a number (duration in milliseconds),
    // so we need to re-wrap it with "d.sum" (and result might differ from calling
    // "plus" because we do an additional "rescale").
  });

  test("Use with setTimeout", () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    // @ts-ignore: Argument of type 'XDuration' is not assignable to parameter of type 'number'
    setTimeout(callback, d(1, "minute"));

    // Note: you can also call: setTimeout(callback, d(1).minute.inMs)

    jest.advanceTimersByTime(59000);
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(1000);
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
