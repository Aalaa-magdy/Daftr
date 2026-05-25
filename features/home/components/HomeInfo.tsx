import ProgressBar from "@/components/ui/ProgressBar"
import { colors } from "@/theme/colors"
import { View } from "react-native"

const HomeInfo = () => {
  return (
    <View>
         <ProgressBar progress={0.5} color={colors.primary}  />
    </View>
  )
}

export default HomeInfo