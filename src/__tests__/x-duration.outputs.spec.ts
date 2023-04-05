import { XDuration } from "../x-duration";
import { XDurationFactory } from "../x-duration-factory";

const complexDuration = XDuration.sum(
  // @ts-ignore
  new XDurationFactory(1).year +
    new XDurationFactory(1).month +
    new XDurationFactory(1).week +
    new XDurationFactory(1).day +
    new XDurationFactory(1).hour +
    new XDurationFactory(1).minute +
    new XDurationFactory(1).second +
    new XDurationFactory(1).millisecond
);

describe("XDuration - Outputs", () => {
  test("XDuration#valueOf returns duration in milliseconds", () => {
    expect(new XDuration({ seconds: 1.5 }).valueOf()).toBe(1500);
  });

  test("XDuration#toString returns duration in milliseconds", () => {
    expect(new XDuration({ seconds: 1.5 }).toString()).toBe(1500);
  });

  test("XDuration#toISO returns an object with all the duration parts", () => {
    expect(complexDuration.toISO()).toBe("P1Y1M1W1DT1H1M1.001S");
  });

  test("XDuration#toJSON returns an object with all the duration parts", () => {
    expect(complexDuration.toJSON()).toBe("P1Y1M1W1DT1H1M1.001S");
  });

  test("XDuration#toFormat returns an object with all the duration parts", () => {
    expect(complexDuration.toFormat("y d s")).toBe("1 38 3661");
    expect(complexDuration.toFormat("yy dd sss")).toBe("01 38 3661");
    expect(complexDuration.toFormat("M S")).toBe("13 694861001");
  });

  test("XDuration#toObject returns an object with all the duration parts", () => {
    expect(complexDuration.toObject()).toStrictEqual({
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
});
