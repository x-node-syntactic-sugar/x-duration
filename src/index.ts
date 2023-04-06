import { XDuration } from "./x-duration";
import { XDurationFactory } from "./x-duration-factory";

export { XDuration, XDurationFactory };

// Returns a factory to create durations
export const d = (value: number) => new XDurationFactory(value);

// Re-wrap a duration (in milliseconds) after summing them
d.sum = (value: number) => new XDuration({ milliseconds: value }).rescale();

export default d;
