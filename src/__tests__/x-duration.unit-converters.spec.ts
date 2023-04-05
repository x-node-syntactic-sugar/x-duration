import { XDuration } from "../x-duration";

describe("XDuration - Unit converters", () => {
  test("XDuration#inMilliseconds returns duration in milliseconds", () => {
    expect(new XDuration({ seconds: 1.5 }).inMilliseconds).toBe(1500);
    expect(new XDuration({ milliseconds: 1.5 }).inMilliseconds).toBe(1.5);
  });

  test("XDuration#inMs returns duration in milliseconds", () => {
    expect(new XDuration({ seconds: 1.5 }).inMs).toBe(1500);
    expect(new XDuration({ milliseconds: 1.5 }).inMs).toBe(1.5);
  });

  test("XDuration#inSeconds returns duration in seconds", () => {
    expect(new XDuration({ milliseconds: 500 }).inSeconds).toBe(0.5);
    expect(new XDuration({ seconds: 1.5 }).inSeconds).toBe(1.5);
    expect(new XDuration({ minutes: 1.5 }).inSeconds).toBe(90);
  });

  test("XDuration#inMinutes returns duration in minutes", () => {
    expect(new XDuration({ seconds: 20 }).inMinutes).toBe(1 / 3);
    expect(new XDuration({ minutes: 1.5 }).inMinutes).toBe(1.5);
    expect(new XDuration({ hours: 1.5 }).inMinutes).toBe(90);
  });

  test("XDuration#inHours returns duration in hours", () => {
    expect(new XDuration({ minutes: 45 }).inHours).toBe(0.75);
    expect(new XDuration({ hours: 1.5 }).inHours).toBe(1.5);
    expect(new XDuration({ days: 1.5 }).inHours).toBe(36);
  });

  test("XDuration#inDays returns duration in days", () => {
    expect(new XDuration({ hours: 36 }).inDays).toBe(1.5);
    expect(new XDuration({ days: 1.5 }).inDays).toBe(1.5);
    expect(new XDuration({ weeks: 1.5 }).inDays).toBe(10.5);
  });

  test("XDuration#inWeeks returns duration in weeks", () => {
    expect(new XDuration({ days: 10.5 }).inWeeks).toBe(1.5);
    expect(new XDuration({ weeks: 1.5 }).inWeeks).toBe(1.5);
    expect(new XDuration({ months: 1.5 }).inWeeks).toBe(6);
  });

  test("XDuration#inMonths returns duration in months", () => {
    expect(new XDuration({ weeks: 6 }).inMonths).toBe(1.5);
    expect(new XDuration({ months: 1.5 }).inMonths).toBe(1.5);
    expect(new XDuration({ years: 1.5 }).inMonths).toBe(18);
  });

  test("XDuration#inQuarters returns duration in quarters", () => {
    expect(new XDuration({ months: 4.5 }).inQuarters).toBe(1.5);
    expect(new XDuration({ quarters: 1.5 }).inQuarters).toBe(1.5);
    expect(new XDuration({ years: 1.5 }).inQuarters).toBe(6);
  });

  test("XDuration#inYears returns duration in Years", () => {
    expect(new XDuration({ months: 18 }).inYears).toBe(1.5);
    expect(new XDuration({ quarters: 6 }).inYears).toBe(1.5);
    expect(new XDuration({ years: 1.5 }).inYears).toBe(1.5);
  });
});
