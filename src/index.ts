import { XDuration } from "./x-duration";
import { XDurationFactory } from "./x-duration-factory";

export { XDuration, XDurationFactory };
export const d = (value: number) => new XDurationFactory(value);
