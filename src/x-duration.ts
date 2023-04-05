import { DateTime as LuxonDateTime, Duration as LuxonDuration } from "luxon";

export type XDurationInput =
  | { years: number }
  | { quarters: number }
  | { months: number }
  | { weeks: number }
  | { days: number }
  | { hours: number }
  | { minutes: number }
  | { seconds: number }
  | { milliseconds: number };

export interface XDurationLikeObject {
  years?: number | undefined;
  quarters?: number | undefined;
  months?: number | undefined;
  weeks?: number | undefined;
  days?: number | undefined;
  hours?: number | undefined;
  minutes?: number | undefined;
  seconds?: number | undefined;
  milliseconds?: number | undefined;
}

export class XDuration {
  #duration: LuxonDuration;

  constructor(parts: XDurationInput) {
    this.#duration = LuxonDuration.fromObject(parts);
  }

  static sum(value: number): XDuration {
    return new XDuration({ milliseconds: value }).rescale();
  }

  /**
   * Unit converters
   */
  get inMilliseconds(): number {
    return this.#duration.as("milliseconds");
  }

  get inMs(): number {
    return this.inMilliseconds;
  }

  get inSeconds(): number {
    return this.#duration.as("seconds");
  }

  get inMinutes(): number {
    return this.#duration.as("minutes");
  }

  get inHours(): number {
    return this.#duration.as("hours");
  }

  get inDays(): number {
    return this.#duration.as("days");
  }

  get inWeeks(): number {
    return this.#duration.as("weeks");
  }

  get inMonths(): number {
    return this.#duration.as("months");
  }

  get inQuarters(): number {
    return this.#duration.as("quarters");
  }

  get inYears(): number {
    return this.#duration.as("years");
  }

  /**
   * Transformations
   */
  plus(duration: XDuration): XDuration {
    this.#duration = this.#duration.plus(duration.toObject());
    return this;
  }

  minus(duration: XDuration): XDuration {
    this.#duration = this.#duration.minus(duration.toObject());
    return this;
  }

  rescale(): XDuration {
    this.#duration = this.#duration.rescale();
    return this;
  }

  /**
   * Date converters
   */
  after(date: Date): Date {
    const newDate = LuxonDateTime.fromJSDate(date).plus(this.#duration);
    return newDate.toJSDate();
  }

  since(date: Date): Date {
    return this.after(date);
  }

  get fromNow(): Date {
    return this.after(new Date());
  }

  before(date: Date): Date {
    const newDate = LuxonDateTime.fromJSDate(date).minus(this.#duration);
    return newDate.toJSDate();
  }

  until(date: Date): Date {
    return this.before(date);
  }

  get ago(): Date {
    return this.before(new Date());
  }

  /**
   * Outputs
   */
  valueOf(): number {
    return this.inMilliseconds;
  }

  // Important for (XDuration + XDuration) or (Date + XDuration)
  toString(): number {
    return this.valueOf();
  }

  toISO(): string {
    return this.#duration.toISO();
  }

  toJSON(): string {
    return this.toISO();
  }

  toFormat(formatString: string, options: { floor?: boolean } = {}): string {
    return this.#duration.toFormat(formatString, options);
  }

  toObject(): XDurationLikeObject {
    return this.#duration.toObject();
  }
}
