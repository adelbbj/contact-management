import { Button } from "../button";
import type { ErrorMessageProps } from "./error-message.types";

export function ErrorMessage({
  title = "Something went wrong",
  message,
  onRetry,
  showRetry = true,
}: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      {/* <AlertIcon  /> */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 max-w-md">{message}</p>
      {showRetry && onRetry && (
        <Button
          onClick={onRetry}
          variant="accent"
          className="flex items-center gap-2"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}
