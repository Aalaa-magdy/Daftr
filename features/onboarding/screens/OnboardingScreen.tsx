import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/theme/colors';

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
       <View style={styles.header}>
          <ImageBackground source={patternSource} style={styles.backgroundImage}>
              <View style={styles.backgroundImageFill}/>
          </ImageBackground>
          <View >
                 <TouchableOpacity >
                    <Text style={styles.headerButton}>Sign In</Text>
                 </TouchableOpacity>
           </View>
       </View>
       <View>

       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   container:{
     flex:1 ,
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'flex-start',
     paddingHorizontal:20,
     paddingVertical: 16,
   },
   backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    height: '90%',
    width: '100%',
    top:0,
  },
  backgroundImageFill: {
    flex: 1,
  },
   header:{  
      flex:1,
      width:'100%',
      position:'relative',  
      flexDirection:'row',
      justifyContent:'flex-end',
      top:0,
   },
   headerButton:{
     
      fontFamily:'Changa_500Medium',
      fontSize:22,
      fontWeight:'500',
      color:colors.primary,
      padding:10,    
   }
});

export default OnboardingScreen;
