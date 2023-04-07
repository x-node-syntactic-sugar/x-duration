import { DateTime as LuxonDateTime, Duration as LuxonDuration } from "luxon";

export type XDurationUnit =
  | "years"
  | "quarters"
  | "months"
  | "weeks"
  | "days"
  | "hours"
  | "minutes"
  | "seconds"
  | "milliseconds";

export type XDurationLikeObject = {
  [key in XDurationUnit]?: number;
};

export class XDuration {
  #duration: LuxonDuration;

  constructor(parts: XDurationLikeObject) {
    this.#duration = LuxonDuration.fromObject(parts);
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
   * Transformations (mutates the current object)
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

  toISO(): string | null {
    return this.#duration.toISO();
  }

  toJSON(): string | null {
    return this.toISO();
  }

  toFormat(formatString: string, options: { floor?: boolean } = {}): string {
    return this.#duration.toFormat(formatString, options);
  }

  toObject(): XDurationLikeObject {
    return this.#duration.toObject();
  }
}
