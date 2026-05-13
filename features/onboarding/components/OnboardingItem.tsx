import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '@/theme/colors';
import type { OnboardingItemType } from '../data/onboardingData';

import { onboardingData } from '../data/onboardingData';

import { 
  Tektur_400Regular,
  Tektur_500Medium,
  Tektur_600SemiBold,
  Tektur_700Bold,
  Tektur_800ExtraBold,
  Tektur_900Black,
  useFonts
} from '@expo-google-fonts/tektur';

import {
  Changa_400Regular,
  Changa_700Bold,
  Changa_500Medium
} from '@expo-google-fonts/changa';
interface props {
  currentStep: number;
}
const OnboardingItem : React.FC<props> = ({ currentStep }) => {
  
   let [fontsLoaded] = useFonts({
    Tektur_400Regular,
    Tektur_500Medium,
    Tektur_600SemiBold,
    Tektur_700Bold,
    Tektur_800ExtraBold,
    Tektur_900Black,
    Changa_400Regular,
    Changa_700Bold,
    Changa_500Medium
  })
  return (
     <View style={styles.container}>    
        <Text style={styles.title}> 
          {onboardingData[currentStep].title}
        </Text>
        <Text style={styles.description}>
          {onboardingData[currentStep].description}
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
     container:{
        flex: 1,
        position: 'relative',
       paddingHorizontal: 16,
     },
     title:{
      fontSize: 26,
      fontFamily: 'Changa_500Medium',
      fontWeight: '500',
      color: colors.text,
      marginBottom: 12,
     },
      description:{
      fontSize: 16,
      fontFamily: 'Changa_400Regular',
      fontWeight: '400',
      color: colors.textSecondary,
     },
     
  
  } );

export default OnboardingItem;
