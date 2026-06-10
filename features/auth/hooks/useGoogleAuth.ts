import { useCallback, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { authApi } from '@/features/auth/api/auth.api';
import {
  getGoogleAuthRequestConfig,
  isGoogleAuthConfigured,
} from '@/features/auth/lib/google-auth-config';
import { storeAuthTokens } from '@/features/auth/lib/auth-storage';
import { getApiErrorMessage } from '@/lib/api-error';

WebBrowser.maybeCompleteAuthSession();

type UseGoogleAuthOptions = {
  onSuccess?: () => void;
};

export const useGoogleAuth = ({ onSuccess }: UseGoogleAuthOptions = {}) => {
  const [isPending, setIsPending] = useState(false);
  const googleConfig = getGoogleAuthRequestConfig();

  const [request, response, promptAsync] = Google.useAuthRequest(googleConfig);

  useEffect(() => {
    if (response?.type === 'success') {
      const idToken = response.authentication?.idToken;

      if (!idToken) {
        setIsPending(false);
        Alert.alert('Error', 'Google sign-in did not return a token. Please try again.');
        return;
      }

      authApi
        .googleAuth({ idToken })
        .then(async (data) => {
          await storeAuthTokens(data);
          setIsPending(false);
          onSuccess?.();
        })
        .catch((error) => {
          setIsPending(false);
          Alert.alert('Error', getApiErrorMessage(error));
        });
    } else if (response?.type === 'error') {
      setIsPending(false);
      Alert.alert('Error', response.error?.message ?? 'Google sign-in failed. Please try again.');
    } else if (response?.type === 'dismiss' || response?.type === 'cancel') {
      setIsPending(false);
    }
  }, [response, onSuccess]);

  const signInWithGoogle = useCallback(async () => {
    if (Constants.appOwnership === 'expo' && Platform.OS === 'android') {
      Alert.alert(
        'Development build required',
        'Google sign-in does not work in Expo Go on Android because the app runs as host.exp.exponent, not com.daftr.\n\nRun: npx expo run:android\n\nThen use your Android OAuth client (package com.daftr + SHA-1).',
      );
      return;
    }

    if (!isGoogleAuthConfigured()) {
      Alert.alert(
        'Error',
        'Google sign-in is not configured. Add EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID and EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID to .env.local.',
      );
      return;
    }

    if (!request) {
      Alert.alert('Error', 'Google sign-in is not ready yet. Please try again.');
      return;
    }

    try {
      setIsPending(true);
      await promptAsync();
    } catch {
      setIsPending(false);
      Alert.alert('Error', 'Could not open Google sign-in. Please try again.');
    }
  }, [request, promptAsync]);

  return {
    signInWithGoogle,
    isPending,
  };
};
