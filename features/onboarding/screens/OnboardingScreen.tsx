import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/theme/colors';
import SoloLogo from '@/assets/images/SoloLogo.svg';
const patternSource = require('@/assets/images/background-pattern-decorative.png');

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
import Pagination from '../components/Pagination';
import React from 'react';
import OnboardingItem from '../components/OnboardingItem';
import OnboardingButton from '../components/OnboardingButton';

const OnboardingScreen = () => {

    const [currentStep, setCurrentStep] = React.useState(0);
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
    <SafeAreaView style={styles.container}>
        <ImageBackground source={patternSource} resizeMode="cover" style={styles.backgroundImage}/>
       <View style={styles.header}>
                 <TouchableOpacity >
                    <Text style={styles.headerButton}>Sign In</Text>
                 </TouchableOpacity>
       </View>
       <View style={styles.content}> 
       <View style={styles.logoSection}>  
                    <SoloLogo />
                     <Text style={styles.logoText}> Daftar</Text>     
       </View>
       <View style={styles.pagination}>
           <Pagination scrollX={new Animated.Value(0)} currentStep={0}/>
       </View>
       <View style={styles.data}>
          <OnboardingItem currentStep={0} />
       </View>
        <View>
           <OnboardingButton currentStep={0} />
        </View>
       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingHorizontal: 20,
     paddingVertical: 16,
     backgroundColor: colors.white,
   },
   backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '90%',
  },
   header: {  
      height: 220,  // Fixed height
      flexDirection: 'row',
      justifyContent: 'flex-end',   
   },
   content:{
      flex: 1,
   },
   headerButton: { 
      fontFamily: 'Changa_500Medium',
      fontSize: 22,
      fontWeight: '500',
      color: colors.primary,
      padding: 24,    
   },
   logoSection: {
      width: '100%',
      height: 55,  // Fixed height
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',  // Vertically centers content
      gap: 8,
      paddingHorizontal: 16,
       
   },
 
   logoText: {
      color: colors.primary,
      fontFamily: 'Tektur_400Regular',
      fontSize: 28, 
      fontWeight: '400',
   },
   pagination: {
      width: '100%',
      height: 40,  // Fixed height
      paddingHorizontal: 16,
   },
   data:{
    flex:1,  
     height:340
   }

});

export default OnboardingScreen;