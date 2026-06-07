import { colors } from '@/theme/colors';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDirection } from '@/hooks/useAppDirection';
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

/** Leading/trailing icons + placeholder (unfocused) — tweak only here. */
const INPUT_MUTED = '#A4A7AE';

function withInputMutedIconColor(node: React.ReactNode): React.ReactNode {
  if (node == null || !React.isValidElement(node)) return node;
  return React.cloneElement(node as React.ReactElement<{ color?: string }>, {
    color: INPUT_MUTED,
  });
}

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  multiline?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
  icon,
  rightIcon,
  onRightIconPress,
  containerStyle,
  multiline = false,
}) => {
  const { t } = useTranslation();
  const { isRTL, writingDirection } = useAppDirection();
  const [isFocused, setIsFocused] = useState(false);
  const hasText = Boolean(value && value.length > 0);

  /** TextInput uses physical alignment — it does not mirror like Text under direction: rtl. */
  const inputTextAlign = isRTL ? 'right' : 'left';

  /** Unfocused + empty: align typed `color` with placeholder so Android does not tint hint wrong vs icons. */
  const useMutedTextColor = !isFocused && !hasText;

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text
          style={[
            styles.label,
            { textAlign: inputTextAlign, writingDirection },
          ]}
        >
          {label}
        </Text>
      ) : null}

      <View
        style={[
          styles.inputWrapper,
          { direction: isRTL ? 'rtl' : 'ltr' },
          isFocused && styles.inputWrapperFocused,
          error && styles.inputWrapperError,
        ]}
      >
        {icon ? (
          <View style={styles.leadingIcon}>{withInputMutedIconColor(icon)}</View>
        ) : null}

        <TextInput
          style={[
            styles.input,
            multiline && styles.inputMultiline,
            useMutedTextColor ? styles.inputTextMuted : styles.inputTextTyped,
            icon ? styles.inputWithLeadingIcon : null,
            rightIcon ? styles.inputWithTrailingIcon : null,
            { textAlign: inputTextAlign, writingDirection },
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={INPUT_MUTED}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {rightIcon ? (
          <TouchableOpacity
            style={styles.trailingIcon}
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
            accessibilityRole="button"
            accessibilityLabel={t('accessibility.togglePasswordVisibility')}
          >
            {withInputMutedIconColor(rightIcon)}
          </TouchableOpacity>
        ) : null}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    width: '100%',
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 6,
    lineHeight: 22,
  },
  inputWrapper: {
    width: '100%',
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputWrapperFocused: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  inputWrapperError: {
    borderColor: 'red',
  },
  input: {
    flex: 1,
    minHeight: 48,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: Platform.OS === 'android' ? 10 : 12,
    paddingHorizontal: 16,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Changa_400Regular',
    color: colors.black,
    ...Platform.select({
      android: { includeFontPadding: false },
    }),
  },
  inputTextMuted: {
    color: INPUT_MUTED,
  },
  inputTextTyped: {
    color: colors.black,
  },
  inputWithLeadingIcon: {
    paddingStart: 8,
    paddingEnd: 12,
  },
  inputWithTrailingIcon: {
    paddingEnd: 8,
    paddingStart: 12,
  },
  inputMultiline: {
    minHeight: 100,
    paddingTop: 12,
    paddingBottom: 12,
    textAlignVertical: 'top',
  },
  leadingIcon: {
    paddingStart: 16,
    paddingEnd: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trailingIcon: {
    paddingEnd: 16,
    paddingStart: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 12,
    lineHeight: 18,
    color: 'red',
    marginTop: 4,
  },
});

export default Input;
