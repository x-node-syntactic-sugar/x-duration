import { XDuration } from "./x-duration";
import { XDurationFactory, XDurationUnitInput } from "./x-duration-factory";

export { XDuration, XDurationFactory };

// Factory to create durations
export const d = (value: number, unit: XDurationUnitInput) =>
  XDurationFactory(value, unit);

// Re-wrap a duration (in milliseconds) after summing them
d.sum = (value: number) => XDurationFactory(value, "milliseconds").rescale();

export default d;
