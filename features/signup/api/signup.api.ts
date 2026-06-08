// src/features/auth/api/authApi.ts
import { apiClient } from '../../../lib/axios';
import { SignupRequest, AuthResponse } from '../types/signup.types';

export const signupApi = {
  signup: async (data: SignupRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/signup', data);
    return response.data;
  }
};