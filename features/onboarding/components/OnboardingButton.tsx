import { colors } from '@/theme/colors'
import React from 'react'
import { Text, TouchableOpacity,StyleSheet, View } from 'react-native'
import { 
  useFonts
} from '@expo-google-fonts/tektur';

import {
  Changa_400Regular,
  Changa_700Bold,
  Changa_500Medium
} from '@expo-google-fonts/changa';
import { onboardingData } from '../data/onboardingData'

interface props {
    currentStep: number;
}

const OnboardingButton = ({ currentStep }: props) => {
       let [fontsLoaded] = useFonts({
        Changa_400Regular,
        Changa_700Bold,
        Changa_500Medium
      })
  return (
    <View style={styles.container}>
         <TouchableOpacity >
            {currentStep < onboardingData.length && (
                <Text style={styles.continueButton}>{onboardingData[currentStep].buttonText}</Text>
            )}
            {
                currentStep === onboardingData.length - 1 && (
                    <Text style={styles.signInButton}>Sign In</Text>
                )
            }
         </TouchableOpacity>    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginBottom: 16,
    },
   continueButton:{
     color:colors.textGray,
     fontSize: 16,
     fontFamily: 'Changa_500Medium',
     paddingVertical: 12,
     paddingHorizontal: 24,  
     lineHeight: 24, 
    },
    signInButton:{
        backgroundColor: colors.primary,
        fontSize: 16,
        fontFamily: 'Changa_500Medium',
        paddingVertical: 12,
        paddingHorizontal: 24,  
        lineHeight: 24,
        color: colors.white,
    }
})

export default OnboardingButton