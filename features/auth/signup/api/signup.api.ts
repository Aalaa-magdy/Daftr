import { apiClient } from '@/lib/axios';
import { SignupRequest, AuthResponse } from '@/features/auth/signup/types/signup.types';

export const signupApi = {
  signup: async (data: SignupRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/signup', data);
    return response.data;
  }
};