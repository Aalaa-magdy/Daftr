import { colors } from '@/theme/colors';
import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from '@expo-google-fonts/changa';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const patternSource = require('@/assets/images/background-pattern-decorative.png');

interface Props {
  title: string;
  description: string;
  icon: IconSvgElement;
  onBackPress?: () => void;
}

const ResetHeader = ({ title, description, icon, onBackPress }: Props) => {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.root}>
      <ImageBackground
        source={patternSource}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {onBackPress ? (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={[styles.backButton, { top: Math.max(insets.top, 8) }]}
          onPress={onBackPress}
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <HugeiconsIcon
            icon={ArrowLeft02Icon}
            size={28}
            color={colors.textGray}
          />
        </TouchableOpacity>
      ) : null}

      <View style={styles.centerContent}>
        <View style={styles.iconContainer}>
          <HugeiconsIcon icon={icon} size={32} color={colors.primary} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.background,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '55%',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    zIndex: 10,
    paddingLeft: 4,
    paddingVertical: 8,
  },
  centerContent: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 24,
    gap: 12,
  },
  iconContainer: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    lineHeight: 36,
    fontFamily: 'Changa_500Medium',
    color: colors.black,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Changa_400Regular',
    color: colors.textGray,
    textAlign: 'center',
  },
});

export default ResetHeader;
