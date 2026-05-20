import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import PasswordInput from '@/components/ui/PasswordInput';
import TextLinkButton from '@/components/ui/TextLinkButton';
import { colors } from '@/theme/colors';
import Mail01Icon from '@hugeicons/core-free-icons/Mail01Icon';
import SquareLockPasswordIcon from '@hugeicons/core-free-icons/SquareLockPasswordIcon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { PasswordDataType } from '../data/passwordData';
import ResetHeader from './ResetHeader';
import VerificationCodeInput from './VerificationCodeInput';

interface Props {
  item: PasswordDataType;
  width: number;
  onBackPress?: () => void;
  onNext?: () => void;
}

const fieldIcon = (icon: IconSvgElement) => (
  <HugeiconsIcon icon={icon} size={22} />
);

const ResetPasswordItem: React.FC<Props> = ({
  item,
  width,
  onBackPress,
  onNext,
}) => {
  const renderStepBody = () => {
    switch (item.type) {
      case 'forget':
        return (
          <>
            <View>
              <Text style={styles.label}>
                Email <Text style={styles.star}>*</Text>
              </Text>
              <Input
                placeholder="me@example.com"
                keyboardType="email-address"
                icon={fieldIcon(Mail01Icon)}
              />
            </View>
            <Button title="Reset Password" onPress={onNext} />
          </>
        );

      case 'check':
        return (
          <>
            <VerificationCodeInput />
            <Button title="Verify Email" onPress={onNext} />
            <View style={styles.resendRow}>
              <Text style={styles.resendMuted}>Didn't receive the email </Text>
              <TextLinkButton title="Resend" variant="inline" onPress={() => {}} />
            </View>
          </>
        );

      case 'verify':
        return (
          <>
            <View>
              <Text style={styles.label}>
                Password <Text style={styles.star}>*</Text>
              </Text>
              <PasswordInput
                placeholder="........"
                icon={fieldIcon(SquareLockPasswordIcon)}
              />
            </View>
            <View>
              <Text style={styles.label}>
                Confirm Password <Text style={styles.star}>*</Text>
              </Text>
              <PasswordInput
                placeholder="........"
                icon={fieldIcon(SquareLockPasswordIcon)}
              />
            </View>
            <Button title="Reset password" onPress={onNext} />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <View style={[styles.container, { width }]}>
      <ResetHeader
        title={item.title}
        description={item.subtitle}
        icon={item.icon}
        onBackPress={onBackPress}
        highlightText={item.type === 'check' ? item.email : undefined}
      />

      <ScrollView
        style={styles.formScroll}
        contentContainerStyle={styles.formContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {renderStepBody()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  formScroll: {
    flex: 1,
  },
  formContent: {
    gap: 16,
    paddingBottom: 24,
  },
  label: {
    fontFamily: 'Changa_400Regular',
    color: colors.black,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 6,
  },
  star: {
    color: 'red',
  },
  resendRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  resendMuted: {
    fontFamily: 'Changa_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: colors.captionMuted,
  },
});

export default ResetPasswordItem;
