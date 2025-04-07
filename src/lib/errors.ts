export function isErrorMessage(
  event: MessageEvent,
): event is MessageEvent<{ __error__: string }> {
  return (
    event.data && typeof event.data === "object" && "__error__" in event.data
  );
}

export function createErrorMessage(errorish: unknown): { __error__: string } {
  return { __error__: errorStringFromUnknown(errorish) };
}
function errorStringFromUnknown(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null && "message" in error) {
    return String(error.message);
  }

  if (typeof error === "string") {
    return error;
  }

  return "Unknown error";
}
