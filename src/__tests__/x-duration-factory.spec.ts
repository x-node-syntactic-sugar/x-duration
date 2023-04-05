import { XDurationFactory } from "../x-duration-factory";

describe("XDurationFactory", () => {
  test("XDurationFactory#millisecond returns a duration in milliseconds", () => {
    const duration = new XDurationFactory(1).millisecond;
    expect(duration.toObject()).toStrictEqual({ milliseconds: 1 });
  });

  test("XDurationFactory#milliseconds returns a duration in milliseconds", () => {
    const duration = new XDurationFactory(2).milliseconds;
    expect(duration.toObject()).toStrictEqual({ milliseconds: 2 });
  });

  test("XDurationFactory#second returns a duration in seconds", () => {
    const duration = new XDurationFactory(1).second;
    expect(duration.toObject()).toStrictEqual({ seconds: 1 });
  });

  test("XDurationFactory#seconds returns a duration in seconds", () => {
    const duration = new XDurationFactory(2).seconds;
    expect(duration.toObject()).toStrictEqual({ seconds: 2 });
  });

  test("XDurationFactory#minute returns a duration in minutes", () => {
    const duration = new XDurationFactory(1).minute;
    expect(duration.toObject()).toStrictEqual({ minutes: 1 });
  });

  test("XDurationFactory#minutes returns a duration in minutes", () => {
    const duration = new XDurationFactory(2).minutes;
    expect(duration.toObject()).toStrictEqual({ minutes: 2 });
  });

  test("XDurationFactory#hour returns a duration in hours", () => {
    const duration = new XDurationFactory(1).hour;
    expect(duration.toObject()).toStrictEqual({ hours: 1 });
  });

  test("XDurationFactory#hours returns a duration in hours", () => {
    const duration = new XDurationFactory(2).hours;
    expect(duration.toObject()).toStrictEqual({ hours: 2 });
  });

  test("XDurationFactory#day returns a duration in days", () => {
    const duration = new XDurationFactory(1).day;
    expect(duration.toObject()).toStrictEqual({ days: 1 });
  });

  test("XDurationFactory#days returns a duration in days", () => {
    const duration = new XDurationFactory(2).days;
    expect(duration.toObject()).toStrictEqual({ days: 2 });
  });

  test("XDurationFactory#week returns a duration in weeks", () => {
    const duration = new XDurationFactory(1).week;
    expect(duration.toObject()).toStrictEqual({ weeks: 1 });
  });

  test("XDurationFactory#weeks returns a duration in weeks", () => {
    const duration = new XDurationFactory(2).weeks;
    expect(duration.toObject()).toStrictEqual({ weeks: 2 });
  });

  test("XDurationFactory#month returns a duration in months", () => {
    const duration = new XDurationFactory(1).month;
    expect(duration.toObject()).toStrictEqual({ months: 1 });
  });

  test("XDurationFactory#months returns a duration in months", () => {
    const duration = new XDurationFactory(2).months;
    expect(duration.toObject()).toStrictEqual({ months: 2 });
  });

  test("XDurationFactory#quarter returns a duration in quarters", () => {
    const duration = new XDurationFactory(1).quarter;
    expect(duration.toObject()).toStrictEqual({ quarters: 1 });
  });

  test("XDurationFactory#quarters returns a duration in quarters", () => {
    const duration = new XDurationFactory(2).quarters;
    expect(duration.toObject()).toStrictEqual({ quarters: 2 });
  });

  test("XDurationFactory#year returns a duration in years", () => {
    const duration = new XDurationFactory(1).year;
    expect(duration.toObject()).toStrictEqual({ years: 1 });
  });

  test("XDurationFactory#years returns a duration in years", () => {
    const duration = new XDurationFactory(2).years;
    expect(duration.toObject()).toStrictEqual({ years: 2 });
  });
});
