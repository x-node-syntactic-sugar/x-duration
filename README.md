<p align="center">
  <a href="https://www.npmjs.com/x-duration" target="_blank"><img src="https://img.shields.io/npm/v/x-duration.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/x-duration" target="_blank"><img src="https://img.shields.io/npm/l/x-duration.svg" alt="Package License" /></a>
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/typing-Typescript-brightgreen.svg?style=flat" alt="Typescript" /></a>
  <a href="https://github.com/x-node-syntactic-sugar/x-duration/actions/workflows/ci-test.yml" target="_blank"><img src="https://github.com/x-node-syntactic-sugar/x-duration/actions/workflows/ci-test.yml/badge.svg" alt="GitHub CI" /></a>
</p>

# X-Duration

Syntactic sugar functions to handle duration and dates.

```javascript
const duration = d(2).days.plus(d(1).hour)

duration.inMinutes
// 2940

duration.ago
// 2036-12-24T10:11:12.013Z
```

## Features

* **Syntactic sugar** — Inspired from `rails` Duration utilities: manipulate durations and apply them on Dates.

* **Reliable** — Based on [luxon](https://github.com/moment/luxon) (JS native `Date` manipulation can give some unexpected results).

* **Typed** — With Typescript.

* **MIT license** — Use it like you want.

## Getting started

```bash
npm install x-duration
```

```javascript
import d from "x-duration"

const duration = d(2).minutes

// setTimeout(..., duration.inMs)
```

## Documentation

This library manipulates 2 kinds of objects: `XDurationFactory` and `XDuration`.

```javascript
import d, { XDurationFactory, XDuration } from "x-duration"
```

### XDurationFactory

```javascript
declare const d: {
  // Returns a factory to create durations
  (value: number): XDurationFactory;

  // Re-wrap a duration (in milliseconds) after summing them
  sum(value: number): XDuration;
};

declare class XDurationFactory {
  constructor(value: number);

  // Returns a duration in milliseconds
  get milliseconds(): XDuration;
  // Alias of `milliseconds`
  get millisecond(): XDuration;

  // Returns a duration in seconds
  get seconds(): XDuration;
  // Alias of `seconds`
  get second(): XDuration;

  // Returns a duration in minutes
  get minutes(): XDuration;
  // Alias of `minutes`
  get minute(): XDuration;

  // Returns a duration in hour
  get hour(): XDuration;
  // Alias of `hour`
  get hours(): XDuration;

  // Returns a duration in days
  get days(): XDuration;
  // Alias of `days`
  get day(): XDuration;

  // Returns a duration in weeks
  get weeks(): XDuration;
  // Alias of `weeks`
  get week(): XDuration;

  // Returns a duration in months
  get months(): XDuration;
  // Alias of `months`
  get month(): XDuration;

  // Returns a duration in quarters
  get quarters(): XDuration;
  // Alias of `quarters`
  get quarter(): XDuration;

  // Returns a duration in years
  get years(): XDuration;
  // Alias of `years`
  get year(): XDuration;
}
```

#### Examples

```javascript
d(10).milliseconds
d(1).millisecond

d(10).seconds
d(1).second

d(10).minutes
d(1).minute

d(10).hours
d(1).hour

d(10).days
d(1).day

d(10).weeks
d(1).week

d(10).months
d(1).month

d(10).quarters
d(1).quarter

d(10).years
d(1).year

d.sum(d(1).hour + d(10).minutes)
```

### XDuration

```javascript
declare class XDuration {
  constructor(parts: XDurationInput);

  /**
   * Unit converters
   */
  get inMilliseconds(): number;
  get inMs(): number;
  get inSeconds(): number;
  get inMinutes(): number;
  get inHours(): number;
  get inDays(): number;
  get inWeeks(): number;
  get inMonths(): number;
  get inQuarters(): number;
  get inYears(): number;

  /**
   * Transformations (mutates the current object)
   */
  // Adds the given duration to current duration
  plus(duration: XDuration): XDuration;

  // Removes the given duration to current duration
  minus(duration: XDuration): XDuration;

  // Rescales units to their largest representation
  rescale(): XDuration;

  /**
   * Date converters
   */
  // Returns a new Date with the time of the given date plus the current duration
  after(date: Date): Date;

  // Alias of `after`
  since(date: Date): Date;

  // Alias of `after(new Date)`
  get fromNow(): Date;

  // Returns a new Date with the time of the given date minus the current duration
  before(date: Date): Date;

  // Alias of `before`
  until(date: Date): Date;

  // Alias of `before(new Date)`
  get ago(): Date;

  /**
   * Outputs
   */
  // Returns duration in milliseconds
  valueOf(): number;

  // Returns duration in milliseconds
  toString(): number;

  // Returns ISO 8601 format
  toISO(): string;

  // Alias of `toISO`
  toJSON(): string;

  // Returns the formatted duration
  toFormat(
    formatString: string,
    options?: {
      floor?: boolean;
    }
  ): string;

  // Returns the internal representation of the current duration
  toObject(): XDurationLikeObject;
}
```

#### Examples

```javascript
/**
 * Unit converters
 */
d(86400000).millisecond.inDays
// 1

d(30).seconds.inMilliseconds
// 30000

d(1).minute.inMilliseconds
// 60000

d(10).minutes.inSeconds
// 600

d(1.5).hours.inMinutes
// 90

d(1.5).days.inHours
// 36

d(0.5).weeks.inHours
// 84 (3 * 24 + 12)

d(0.5).months.inDays
// 15

d(1.5).quarters.inMonths
// 4.5

d(1.5).years.inMonths
// 18
```

```javascript
/**
 * Transformations
 */
d(2).hours.plus(d(90).minutes).toObject()
// { hours: 2, minutes: 90 }

d(2).hours.minus(d(90).minutes).toObject()
// { hours: 2, minutes: -90 }

d(2).hours.plus(d(90).minutes).rescale().toObject()
// { hours: 3, minutes: 30 }
```

```javascript
/**
 * Date converters
 */
// Let's say the current date is "2036-01-01 12:00:00 GMT"

d(3).minutes.ago
// 2036-01-01T11:57:00.000Z

d(2).hours.fromNow
// 2036-01-01T14:00:00.000Z

d(2).hours.before(new Date("2036-01-01 12:00:00 GMT"))
// 2036-01-01T10:00:00.000Z

d(3).minutes.after(new Date("2036-01-01 12:00:00 GMT"))
// 2036-01-01T12:03:00.000Z
```

```javascript
/**
 * Outputs
 */
const duration = d(2).months.plus(d(10).days).plus(d(1).minute)

duration.valueOf()
// 6048060000

duration.toISO()
// "P2M10DT1M"

duration.toFormat("M S")
// "2 864060000"

duration.toObject()
// { minutes: 1, days: 10, months: 2 }
```

### Extra - Type unboxing

Operator overloading is not really possible in Javascript, but you can sum durations to other durations (though it has some limitations, and typescript is not really happy about it.)

```javascript
d(2).hours + d(1).minute
// 7260000 (duration in milliseconds), so we can re-wrap it as a duration:

d.sum(d(2).hours + d(1).minute).toObject()
// { hours: 2, minutes: 1 }
```

```javascript
setTimeout(..., d(1).minute)
// will work but it's better calling explicitly "setTimeout(..., d(1).minute.inMs)"
```
