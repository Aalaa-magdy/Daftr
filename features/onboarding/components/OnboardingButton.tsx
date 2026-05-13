import { colors } from '@/theme/colors'
import React from 'react'
import { Text, TouchableOpacity,StyleSheet, View } from 'react-native'
import { 
  useFonts
} from '@expo-google-fonts/tektur';

import {
  Changa_400Regular,
  Changa_500Medium
} from '@expo-google-fonts/changa';
import { onboardingData } from '../data/onboardingData'

interface Props {
    currentStep: number;
    onPress: () => void;
    isLastStep: boolean;
}

const OnboardingButton = ({ currentStep, onPress, isLastStep }: Props) => {
      let [fontsLoaded] = useFonts({
        Changa_400Regular,
        Changa_500Medium
      })

  const buttonText = onboardingData[currentStep]?.buttonText ?? 'Continue';

  return (
    <View style={styles.container}>
         <TouchableOpacity
            style={isLastStep ? styles.primaryButton : undefined}
            onPress={onPress}
            activeOpacity={0.8}
         >
            {isLastStep ? (
              <Text style={styles.primaryButtonText}>{buttonText}</Text>
            ) : (
              <Text style={styles.continueButton}>{buttonText}</Text>
            )}
         </TouchableOpacity>    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        marginBottom: 16,
    },
    continueButton:{
        color:colors.textGray,
        fontSize: 16,
        fontFamily: 'Changa_500Medium',
        paddingVertical: 12,
        lineHeight: 24, 
    },
    primaryButton: {
        width: '100%',
        backgroundColor: colors.primary,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButtonText: {
        fontSize: 16,
        fontFamily: 'Changa_500Medium',
        lineHeight: 24,
        color: colors.white,
    }
})

export default OnboardingButton