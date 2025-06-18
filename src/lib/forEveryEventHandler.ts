function forEveryKey<T extends object>(
  obj: T,
  fn: (key: string, value: unknown, obj: object) => void,
) {
  for (const [key, value] of Object.entries(obj) as [string, unknown][]) {
    switch (typeof value) {
      case "object":
        switch (true) {
          case Array.isArray(value):
            for (const item of value) {
              forEveryKey(item, fn);
            }
            break;
          case value === null:
            fn(key, value, obj);
            break;
          default:
            forEveryKey(value, fn);
            break;
        }
        break;
      default:
        fn(key, value, obj);
        break;
    }
  }
}

function isCapitalLetter(str: string) {
  return str[0]?.toUpperCase() === str[0];
}

function isEventKey(key: string) {
  return key.startsWith("on") && isCapitalLetter(key.slice(2));
}

/**
 * Deeply inspects an object for event handlers and calls the provided function for each one.
 *
 * Event handlers are functions that start with "on" and are not a function themselves.
 *
 * @param obj - The object to iterate over.
 * @param fn - The function to call for each key-value pair.
 */
export function forEveryEventHandler<T extends object>(
  obj: T,
  fn: (key: string, value: unknown, obj: object) => void,
) {
  if (typeof obj !== "object") return;
  if (obj === null) return;

  forEveryKey(obj, (key, value, object) => {
    if (!isEventKey(key)) return;
    fn(key, value, object);
  });
}
