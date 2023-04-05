import { XDuration } from "./x-duration";

export class XDurationFactory {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  get milliseconds(): XDuration {
    return new XDuration({ milliseconds: this.value });
  }

  get millisecond(): XDuration {
    return this.milliseconds;
  }

  get seconds(): XDuration {
    return new XDuration({ seconds: this.value });
  }

  get second(): XDuration {
    return this.seconds;
  }

  get minutes(): XDuration {
    return new XDuration({ minutes: this.value });
  }

  get minute(): XDuration {
    return this.minutes;
  }

  get hour(): XDuration {
    return this.hours;
  }

  get hours(): XDuration {
    return new XDuration({ hours: this.value });
  }

  get days(): XDuration {
    return new XDuration({ days: this.value });
  }

  get day(): XDuration {
    return this.days;
  }

  get weeks(): XDuration {
    return new XDuration({ weeks: this.value });
  }

  get week(): XDuration {
    return this.weeks;
  }

  get months(): XDuration {
    return new XDuration({ months: this.value });
  }

  get month(): XDuration {
    return this.months;
  }

  get quarters(): XDuration {
    return new XDuration({ quarters: this.value });
  }

  get quarter(): XDuration {
    return this.quarters;
  }

  get years(): XDuration {
    return new XDuration({ years: this.value });
  }

  get year(): XDuration {
    return this.years;
  }
}
