import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { colors } from '@/theme/colors';
import { 
  useFonts
} from '@expo-google-fonts/tektur';

import {
  Changa_400Regular,
  Changa_500Medium
} from '@expo-google-fonts/changa';

import type { OnboardingItemType } from '../data/onboardingData';

interface Props {
  item: OnboardingItemType;
  width: number;
}

const OnboardingItem: React.FC<Props> = ({ item, width }) => {
  let [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium
  });

  return (
    <View style={[styles.container, { width }]}>
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 24,
  },
  title: {
      fontSize: 23,
      fontFamily: 'Changa_500Medium',
      fontWeight: '500',
      color: colors.text,
      marginBottom: 12,
      lineHeight: 40,
  },
  description: {
      fontSize: 16,
      fontFamily: 'Changa_400Regular',
      fontWeight: '400',
      color: colors.textSecondary,
      lineHeight: 24,
  },
});

export default OnboardingItem;
