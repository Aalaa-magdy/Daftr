import { colors } from "@/theme/colors";
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from "@expo-google-fonts/changa";

import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react-native";
import { useRouter, type Href } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ResetHeader from "../components/ResetHeader";

const fieldIcon = (icon: IconSvgElement) => (
  <HugeiconsIcon icon={icon} size={22} />
);
import passwordData ,{ PasswordDataType }from "../data/passwordData";  
import { useState } from "react";
import Pagination from "../components/Pagination";

const ResetPassword = () => {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });
  const [currentStep, SetCurrentStep] = useState(1);

  if (!fontsLoaded) {
    return null;
  }
   
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>
        {/* Your main content goes here */}
        <Text>Your form content here...</Text>
      </View>
      
      <View style={styles.paginationContainer}>
        <Pagination
          currentStep={currentStep}
          totalSteps={passwordData.length}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 

    backgroundColor: colors.background,
    
  },
  scrollContent: {
    flexGrow: 1,
  
  
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    paddingBottom: 20,
  },
  paginationContainer: {
    width: '100%',
    alignItems:"center",
    paddingHorizontal: 16,
    paddingBottom: 34,

  },
});

export default ResetPassword;