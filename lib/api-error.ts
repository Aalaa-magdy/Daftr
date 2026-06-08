import { AxiosError, isAxiosError } from 'axios';

type NestedApiMessage = {
  message?: string | string[];
  error?: string;
  statusCode?: number;
};

type ApiErrorBody = {
  statusCode?: number;
  message?: string | string[] | NestedApiMessage;
  error?: string;
};

function formatMessageValue(value: string | string[] | undefined): string | undefined {
  if (value == null) return undefined;

  if (Array.isArray(value)) {
    const items = value.map((item) => item.trim()).filter(Boolean);
    return items.length > 0 ? items.join(', ') : undefined;
  }

  const trimmed = value.trim();
  return trimmed || undefined;
}

export function getApiErrorMessage( 
  error: unknown,
  fallback = 'Something went wrong',
): string {
  if (!isAxiosError(error)) {
    return fallback;
  }

  const axiosError = error as AxiosError<ApiErrorBody>;
  const data = axiosError.response?.data;

  if (!data) {
    if (axiosError.code === 'ECONNABORTED') {
      return 'Request timed out. Please try again.';
    }

    if (axiosError.message === 'Network Error') {
      return 'Unable to connect to the server. Check your connection.';
    }

    return fallback;
  }

  const { message } = data;

  if (message && typeof message === 'object' && !Array.isArray(message)) {
    return (
      formatMessageValue(message.message) ??
      message.error ??
      data.error ??
      fallback
    );
  }

  return (
    formatMessageValue(message as string | string[] | undefined) ??
    data.error ??
    fallback
  );
}
