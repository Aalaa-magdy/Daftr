export type SigninField = 'email' | 'password';

export type SigninFieldErrors = Partial<Record<SigninField, string>>;

export const INVALID_CREDENTIALS_KEY = 'auth.invalidCredentials';

const CLIENT_ERROR_KEYS = new Set([
  'auth.emailRequired',
  'auth.invalidEmail',
  'auth.passwordRequired',
  INVALID_CREDENTIALS_KEY,
]);

export function resolveSigninFieldError(
  error: string | undefined,
  t: (key: string) => string,
): string | undefined {
  if (!error) return undefined;
  if (CLIENT_ERROR_KEYS.has(error)) return t(error);
  return error;
}

export function mapSigninFieldErrors(errorMessage: string): SigninFieldErrors {
  const errors: SigninFieldErrors = {};
  const lower = errorMessage.toLowerCase();

  if (
    lower.includes('invalid credentials') ||
    lower.includes('unauthorized') ||
    lower.includes('incorrect') ||
    lower.includes('wrong password') ||
    lower.includes('invalid password')
  ) {
    errors.email = INVALID_CREDENTIALS_KEY;
    errors.password = INVALID_CREDENTIALS_KEY;
    return errors;
  }

  if (lower.includes('email')) {
    errors.email = errorMessage;
  } else if (lower.includes('password')) {
    errors.password = errorMessage;
  }

  if (!Object.keys(errors).length && errorMessage) {
    errors.email = errorMessage;
  }

  return errors;
}
