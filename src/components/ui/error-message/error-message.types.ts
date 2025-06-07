export type ErrorMessageProps = {
  title?: string;
  message: string;
  onRetry?: () => void;
  showRetry?: boolean;
};
