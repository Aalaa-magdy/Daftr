import ProgressBar from '@/components/ui/ProgressBar';
import { colors } from '@/theme/colors';
import { StyleSheet, Text, View } from 'react-native';
import ViewIcon from '@hugeicons/core-free-icons/ViewIcon';
import ArrowUpLeft01Icon from '@hugeicons/core-free-icons/ArrowUpLeft01Icon';
import ArrowDownRight01Icon from '@hugeicons/core-free-icons/ArrowDownRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';

import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from '@expo-google-fonts/changa';
const HomeInfo = () => {
     const [fontsLoaded] = useFonts({
        Changa_400Regular,
        Changa_500Medium,
      });
    
      if (!fontsLoaded) {
        return null;
      }
  return (
    <View style={styles.container}>
        <View style={styles.firstRow}>
            <Text style={styles.currentBalance}>TOTAL BALANCE</Text>
             <HugeiconsIcon
              icon={ViewIcon}
              size={24}
              color={colors.white}
          />
        </View>
        <View style={styles.secondRow}>
            <Text style={styles.balance}>15,000</Text> 
             <Text style={styles.currency}>EGP</Text>
        </View>
        <View style={styles.thirdRow}>
          <View style={styles.item}>
            <View style={styles.icon}>
             <HugeiconsIcon
               icon={ArrowDownRight01Icon }
               size={20}
               color={'#17B26A'}
             />
            </View>
             <View>
                 <Text style={styles.type}>Income</Text>
                 <Text style={styles.amount}>20,000 EGP</Text>
              </View>
         </View>
        <View style={styles.item}>
       <View style={styles.icon}>
             <HugeiconsIcon
               icon={ArrowUpLeft01Icon }
               size={20}
               color={'#F04438'}
               style={{backgroundColor:'#FEF3F2'}}
             />
            </View>
             <View>
                 <Text style={styles.type}>Expense</Text>
                 <Text style={styles.amount}>20,000 EGP</Text>
              </View>
              </View>
        </View>
        <View>
          <View style={styles.lastRow}>
             <Text style={styles.spans}>spent 5,000 EGP</Text>
             <Text style={styles.spans}>20 days remaining</Text>
           </View>
            <ProgressBar progress={0.5} color={colors.secondary} trackColor={'#144718'} />
         </View>
        
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '93%',
    height: 230,
    padding: 20,
    borderRadius:12,
    backgroundColor: colors.primary,
  },
  currentBalance:{
    color:colors.white,
    fontSize: 16,
    fontFamily: 'Changa_400Regular',
    lineHeight: 20,
  },
  firstRow:{
    flexDirection:'row',
    justifyContent:'space-between',  
  },
  secondRow:{
    flexDirection:'row',
    marginBottom:20,
  },
  balance:{
     fontSize: 36,
    fontFamily: 'Changa_500Medium',
    lineHeight: 52,
    color:colors.white,
    marginTop:8,
    position:"relative"
  },
  currency:{
    fontFamily: 'Changa_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color:colors.white,
    marginTop:4,
    position:'absolute',
    bottom:0,
    left:115,
  },
  icon:{
    backgroundColor:'#ECFDF3',
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,  
  },
  thirdRow:{
    flexDirection:'row',
    gap:20,
    marginBottom:22,
  },
  item:{
    flexDirection:'row',
        gap:8,
   alignItems:'center',
  },
  type:{
    color:colors.white,
    fontSize: 14,
    fontFamily: 'Changa_400Regular',
     lineHeight: 20,
  },
  amount:{
    color:colors.white,    fontSize: 14,
    fontFamily: 'Changa_400Regular',
     lineHeight: 20,
  },
  lastRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:2
  },
  spans:{
    color:colors.white,    fontSize: 14,
    fontFamily: 'Changa_400Regular',
    lineHeight: 20,
  }
});

export default HomeInfo;