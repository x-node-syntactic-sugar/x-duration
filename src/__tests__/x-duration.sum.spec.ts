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

describe("XDuration - sum", () => {
  test("XDuration.sum returns a duration summing the parts", () => {
    const duration = XDuration.sum(
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

  test("XDuration.sum rescales result duration", () => {
    const duration = XDuration.sum(
      // @ts-ignore
      new XDurationFactory(3).days + new XDurationFactory(4).days
    );
    expect(duration.toObject()).toStrictEqual({ weeks: 1 });
  });

  test("XDuration.sum handles subtraction", () => {
    const duration = XDuration.sum(
      // @ts-ignore
      new XDurationFactory(1).week - new XDurationFactory(3).day
    );
    expect(duration.toObject()).toStrictEqual({ days: 4 });
  });
});
