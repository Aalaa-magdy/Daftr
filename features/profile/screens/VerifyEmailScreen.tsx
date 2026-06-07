import Button from '@/components/ui/Button';
import TextLinkButton from '@/components/ui/TextLinkButton';
import ResetHeader from '@/features/reset-password/components/ResetHeader';
import VerificationCodeInput from '@/features/reset-password/components/VerificationCodeInput';
import { colors } from '@/theme/colors';
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from '@expo-google-fonts/changa';
import NewReleasesIcon from '@hugeicons/core-free-icons/NewReleasesIcon';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PROFILE_USER } from '../data/profile-menu';

const VerifyEmailScreen = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { email } = useLocalSearchParams<{ email?: string }>();
  const displayEmail = email ?? PROFILE_USER.email;

  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.content}>
        <ResetHeader
          title={t('resetPassword.checkEmailTitle')}
          description={t('resetPassword.checkEmailSubtitle')}
          icon={NewReleasesIcon}
          onBackPress={() => router.back()}
          highlightText={displayEmail}
          whiteBackground
        />

        <ScrollView
          style={styles.formScroll}
          contentContainerStyle={styles.formContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <VerificationCodeInput />
          <View style={styles.buttonWrap}>
            <Button title={t('profile.verifyEmail')} onPress={() => router.back()} />
          </View>
          <View style={styles.resendRow}>
            <Text style={styles.resendMuted}>{t('resetPassword.didntReceiveEmail')} </Text>
            <TextLinkButton title={t('common.resend')} variant="inline" onPress={() => {}} />
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
  buttonWrap: {
    marginTop: 16,
    width: '100%',
  },
  resendRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  resendMuted: {
    fontFamily: 'Changa_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: colors.captionMuted,
  },
});

export default VerifyEmailScreen;
