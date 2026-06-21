/**
 * Error reporting module
 */

export function reportAppError(
  error: Error,
  options?: { boundary?: string; [key: string]: unknown }
): void {
  // Log error for debugging
  console.error("[Error Reporter]", error, options);
}
