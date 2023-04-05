import { XDuration } from "../x-duration";

/**
 * Note: no need to test in detail as all complexity is delegated to "luxon" dependency.
 */
describe("XDuration - Transformations", () => {
  test("XDuration#plus adds the duration and returns the new duration object", () => {
    const duration = new XDuration({ years: 1 })
      .plus(new XDuration({ months: 1 }))
      .plus(new XDuration({ weeks: 1 }))
      .plus(new XDuration({ days: 1 }))
      .plus(new XDuration({ hours: 1 }))
      .plus(new XDuration({ minutes: 1 }))
      .plus(new XDuration({ seconds: 1 }))
      .plus(new XDuration({ milliseconds: 1 }));

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

  test("XDuration#minus substract the duration and returns the new duration object", () => {
    const duration = new XDuration({ years: 1 })
      .minus(new XDuration({ months: 1 }))
      .minus(new XDuration({ weeks: 1 }))
      .minus(new XDuration({ days: 1 }))
      .minus(new XDuration({ hours: 1 }))
      .minus(new XDuration({ minutes: 1 }))
      .minus(new XDuration({ seconds: 1 }))
      .minus(new XDuration({ milliseconds: 1 }));

    expect(duration.toObject()).toStrictEqual({
      years: 1,
      months: -1,
      weeks: -1,
      days: -1,
      hours: -1,
      minutes: -1,
      seconds: -1,
      milliseconds: -1,
    });
  });

  test("XDuration#rescale rescales units to their largest representation", () => {
    const duration = new XDuration({ seconds: 694861 });
    expect(duration.toObject()).toStrictEqual({ seconds: 694861 });

    expect(duration.rescale().toObject()).toStrictEqual({
      weeks: 1,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    });
  });
});
