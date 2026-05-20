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
          <View style={styles.stepBody}>
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>
                Email <Text style={styles.star}>*</Text>
              </Text>
              <Input
                placeholder="me@example.com"
                keyboardType="email-address"
                icon={fieldIcon(Mail01Icon)}
                containerStyle={styles.fieldInput}
              />
            </View>
            <View style={styles.buttonWrap}>
              <Button title="Reset Password" onPress={onNext} />
            </View>
          </View>
        );

      case 'check':
        return (
          <View style={styles.stepBody}>
            <VerificationCodeInput />
            <View style={styles.buttonWrap}>
              <Button title="Verify Email" onPress={onNext} />
            </View>
            <View style={styles.resendRow}>
              <Text style={styles.resendMuted}>Didn't receive the email </Text>
              <TextLinkButton title="Resend" variant="inline" onPress={() => {}} />
            </View>
          </View>
        );

      case 'verify':
        return (
          <View style={styles.stepBody}>
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>
                Password <Text style={styles.star}>*</Text>
              </Text>
              <PasswordInput
                placeholder="........"
                icon={fieldIcon(SquareLockPasswordIcon)}
                containerStyle={styles.fieldInput}
              />
            </View>
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>
                Confirm Password <Text style={styles.star}>*</Text>
              </Text>
              <PasswordInput
                placeholder="........"
                icon={fieldIcon(SquareLockPasswordIcon)}
                containerStyle={styles.fieldInput}
              />
            </View>
            <View style={styles.buttonWrap}>
              <Button title="Reset password" onPress={onNext} />
            </View>
          </View>
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
    gap: 16,
  },
  formScroll: {
    flex: 1,
  },
  formContent: {
    gap: 8,
    paddingBottom: 24,
  },
  stepBody: {
    gap: 8,
  },
  fieldGroup: {
    gap: 8,
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
    color: 'red',
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

export default ResetPasswordItem;
