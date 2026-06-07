import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { initI18n } from '@/lib/i18n';
import { colors } from '@/theme/colors';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {
  const [i18nReady, setI18nReady] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    initI18n()
      .then(() => {
        setI18nReady(true);
        SplashScreen.hideAsync();
      })
      .catch(() => {
        setI18nReady(true);
        SplashScreen.hideAsync();
      });
  }, []);

  if (!i18nReady) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.white,
        }}
      >
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  const isRTL = i18n.language === 'ar';

  return (
    <View
      key={i18n.language}
      style={{ flex: 1, direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="lastOnboarding" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="reset-password" />
      <Stack.Screen name="set-salary" />
      <Stack.Screen name="home" />
      <Stack.Screen name="history" />
      <Stack.Screen name="statistics" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="edit-profile" />
      <Stack.Screen name="verify-email" />
      <Stack.Screen name="change-password" />
      <Stack.Screen name="faq" />
      <Stack.Screen name="terms" />
      <Stack.Screen name="privacy-policy" />
      <Stack.Screen name="language" />
      <Stack.Screen name="transaction/[id]" />
      </Stack>
    </View>
  );
}
