import d, { XDuration, XDurationFactory } from "../index";

test("exports a default helper function", () => {
  expect(typeof d).toBe("function");
  expect(d(1) instanceof XDurationFactory).toBe(true);
  expect(d(1).second instanceof XDuration).toBe(true);
});

test("exports XDurationFactory", () => {
  expect(typeof XDurationFactory).toBe("function");
  expect(typeof new XDurationFactory(1)).toBe("object");
});

test("exports XDuration", () => {
  expect(typeof XDuration).toBe("function");
  expect(typeof new XDuration({ seconds: 1 })).toBe("object");
});
