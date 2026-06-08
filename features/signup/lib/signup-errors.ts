export type SignupField = 'name' | 'email' | 'password' | 'confirmPassword';

export type SignupFieldErrors = Partial<Record<SignupField, string>>;

export function mapSignupFieldErrors(errorMessage: string): SignupFieldErrors {
  const errors: SignupFieldErrors = {};
  const parts = errorMessage.split(/,\s*/).filter(Boolean);

  for (const part of parts) {
    const lower = part.toLowerCase();

    if (lower.includes('email')) {
      errors.email = part;
    } else if (lower.includes('password')) {
      errors.password = part;
    } else if (lower.includes('name')) {
      errors.name = part;
    }
  }

  if (!Object.keys(errors).length && errorMessage) {
    errors.email = errorMessage;
  }

  return errors;
}
