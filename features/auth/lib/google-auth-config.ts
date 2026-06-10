import type { GoogleAuthRequestConfig } from 'expo-auth-session/providers/google';

const webClientId = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID ?? '';
const androidClientId =
  process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID ?? webClientId;
const iosClientId = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID ?? webClientId;

export function getGoogleAuthRequestConfig(): Partial<GoogleAuthRequestConfig> {
  return {
    webClientId,
    androidClientId,
    iosClientId,
    scopes: ['profile', 'email', 'openid'],
  };
}

export function isGoogleAuthConfigured(): boolean {
  return Boolean(webClientId && androidClientId && iosClientId);
}
