import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';

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

const OnboardingScreen = () => {
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
       <View style={styles.logoSection}>  
                    <SoloLogo  style={styles.logo}/>
                     <Text style={styles.logoText}> Daftar</Text>     
       </View>
       <View>

       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   container:{
     flex:1 ,
     paddingHorizontal:20,
     paddingVertical: 16,
     justifyContent:'space-between',
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
   header:{  
      flex:1,     
      position:'relative',  
      flexDirection:'row',
      justifyContent:'flex-end',
      top:0,
   },
   headerButton:{ 
      fontFamily:'Changa_400Regular',
      fontSize:22,
      fontWeight:'500',
      color:colors.primary,
      padding:10,    
   },
   logoSection:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-start',
      gap:8,
      paddingVertical: 20,
      paddingHorizontal: 16,
   },
   logo: {
      width:14,
      height:14,
      marginTop:5,
   },
   logoText:{
    color:colors.primary,
    fontFamily:'Tektur_400Regular',
    fontSize:28,
    fontWeight:'400',
   }
});

export default OnboardingScreen;
