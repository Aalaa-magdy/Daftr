import { colors } from '@/theme/colors';
import React, { useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';

const CODE_LENGTH = 4;

interface Props {
  value?: string;
  onChange?: (code: string) => void;
}

const VerificationCodeInput = ({ value = '', onChange }: Props) => {
  const inputsRef = useRef<(TextInput | null)[]>([]);
  const [digits, setDigits] = useState<string[]>(() =>
    Array.from({ length: CODE_LENGTH }, (_, i) => value[i] ?? '')
  );
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const updateDigits = (next: string[]) => {
    setDigits(next);
    onChange?.(next.join(''));
  };

  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/\D/g, '').slice(-1);
    const next = [...digits];
    next[index] = digit;
    updateDigits(next);

    if (digit && index < CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (event.nativeEvent.key === 'Backspace' && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.row}>
      {digits.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            inputsRef.current[index] = ref;
          }}
          style={[
            styles.cell,
            digit || focusedIndex === index ? styles.cellActive : null,
          ]}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(event) => handleKeyPress(event, index)}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() =>
            setFocusedIndex((current) => (current === index ? null : current))
          }
          keyboardType="number-pad"
          maxLength={1}
          selectTextOnFocus
          textAlign="center"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    width: '100%',
  },
  cell: {
    flex: 1,
    height: 76,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    fontSize: 20,
    fontFamily: 'Changa_500Medium',
    color: colors.black,
  },
  cellActive: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
});

export default VerificationCodeInput;
