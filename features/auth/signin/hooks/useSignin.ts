import { useMutation } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signinApi } from '@/features/auth/signin/api/signin.api';
import { SigninRequest, AuthResponse, isAuthSuccess } from '@/features/auth/signin/types/signin.types';
import { AxiosError } from 'axios';

export const useSignin = () => {
  return useMutation<AuthResponse, AxiosError, SigninRequest>({
    mutationFn: async (credentials: SigninRequest) => {
      const response = await signinApi.signin(credentials);
      return response;
    },

    onSuccess: async (data) => {
      // Store tokens if returned from backend
      if (isAuthSuccess(data)) {
        await AsyncStorage.setItem('accessToken', data.accessToken);
        if (data.refreshToken) {
          await AsyncStorage.setItem('refreshToken', data.refreshToken);
        }
      }
    },
  });
};