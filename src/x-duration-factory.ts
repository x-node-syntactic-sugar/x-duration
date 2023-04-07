import { XDuration, XDurationUnit } from "./x-duration";

export const unitAliases = {
  milliseconds: ["milliseconds", "millisecond", "ms"],
  seconds: ["seconds", "second", "s"],
  minutes: ["minutes", "minute", "m"],
  hours: ["hours", "hour", "h"],
  days: ["days", "day", "D"],
  weeks: ["weeks", "week", "W"],
  months: ["months", "month", "M"],
  quarters: ["quarters", "quarter", "Q"],
  years: ["years", "year", "Y"],
} as const;

export type XDurationUnitInput = typeof unitAliases[XDurationUnit][number];

// Factory to create durations
export const XDurationFactory = (value: number, unit: XDurationUnitInput) =>
  new XDuration({ [reversedUnitAliases[unit]]: value });

const reversedUnitAliases = Object.entries(unitAliases).reduce(
  (acc, [unit, aliases]) => ({
    ...acc,
    ...(aliases as readonly string[]).reduce(
      (acc2, alias) => ({ ...acc2, [alias]: unit }),
      {}
    ),
  }),
  {}
) as { [K in XDurationUnitInput]: XDurationUnit };
