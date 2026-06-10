import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter, type Href } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Tektur_400Regular, useFonts } from '@expo-google-fonts/tektur';
import { Changa_400Regular } from '@expo-google-fonts/changa';
import { useTranslation } from 'react-i18next';
import SoloLogo from '@/assets/images/SoloLogo.svg';
import { useAppDirection } from '@/hooks/useAppDirection';
import { colors } from '@/theme/colors';

const SPLASH_MS = 3000;

const SplashScreenComponent = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { directionStyle, textAlign, writingDirection } = useAppDirection();
  const [fontsLoaded] = useFonts({
    Tektur_400Regular,
    Changa_400Regular,
  });

  useEffect(() => {
    if (!fontsLoaded) return;

    let cancelled = false;

    const run = async () => {
      await SplashScreen.hideAsync();
      if (cancelled) return;
      await new Promise<void>((resolve) => setTimeout(resolve, SPLASH_MS));
      if (cancelled) return;
      router.replace('/onboarding' as Href);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [router, fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.container, directionStyle]}>
      <Animated.View entering={FadeInDown.duration(800).springify()} style={styles.content}>
        <SoloLogo width={120} height={120} />
        <Text style={[styles.title, { textAlign, writingDirection }]}>
          {t('onboarding.brand')}
        </Text>
        <Text style={[styles.tagline, { textAlign, writingDirection }]}>
          {t('splash.tagline')}
        </Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  content: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    marginTop: 8,
    color: colors.primary,
    fontFamily: 'Tektur_400Regular',
    fontSize: 36,
    lineHeight: 44,
  },
  tagline: {
    color: colors.textSecondary,
    fontFamily: 'Changa_400Regular',
    fontSize: 16,
    lineHeight: 24,
  },
});
