import Button from '@/components/ui/Button';
import PasswordInput from '@/components/ui/PasswordInput';
import ResetHeader from '@/features/reset-password/components/ResetHeader';
import { colors } from '@/theme/colors';
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from '@expo-google-fonts/changa';
import SquareLockPasswordIcon from '@hugeicons/core-free-icons/SquareLockPasswordIcon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const fieldIcon = (icon: IconSvgElement) => (
  <HugeiconsIcon icon={icon} size={22} />
);

const ChangePasswordScreen = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleUpdate = () => {
    router.replace({ pathname: '/profile', params: { passwordChanged: 'true' } });
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.content}>
        <ResetHeader
          title="Set new password"
          description="Set a new password for your account."
          icon={SquareLockPasswordIcon}
          onBackPress={() => router.back()}
          whiteBackground
        />

        <ScrollView
          style={styles.formScroll}
          contentContainerStyle={styles.formContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>
              Current Password <Text style={styles.star}>*</Text>
            </Text>
            <PasswordInput
              placeholder="........"
              icon={fieldIcon(SquareLockPasswordIcon)}
              containerStyle={styles.fieldInput}
            />
          </View>

          <View style={[styles.fieldGroup, styles.fieldGroupSpaced]}>
            <Text style={styles.label}>
              New Password <Text style={styles.star}>*</Text>
            </Text>
            <PasswordInput
              placeholder="........"
              icon={fieldIcon(SquareLockPasswordIcon)}
              containerStyle={styles.fieldInput}
            />
          </View>

          <View style={[styles.fieldGroup, styles.fieldGroupSpaced]}>
            <Text style={styles.label}>
              Confirm New Password <Text style={styles.star}>*</Text>
            </Text>
            <PasswordInput
              placeholder="........"
              icon={fieldIcon(SquareLockPasswordIcon)}
              containerStyle={styles.fieldInput}
            />
          </View>

          <View style={styles.buttonWrap}>
            <Button title="Update password" onPress={handleUpdate} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  formScroll: {
    flex: 1,
  },
  formContent: {
    gap: 8,
    paddingBottom: 24,
  },
  fieldGroup: {
    gap: 8,
  },
  fieldGroupSpaced: {
    marginTop: 8,
  },
  fieldInput: {
    marginBottom: 0,
  },
  label: {
    fontFamily: 'Changa_400Regular',
    color: colors.black,
    fontSize: 16,
    lineHeight: 20,
  },
  star: {
    color: colors.red,
  },
  buttonWrap: {
    marginTop: 16,
    width: '100%',
  },
});

export default ChangePasswordScreen;
