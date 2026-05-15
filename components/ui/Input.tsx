import { colors } from '@/theme/colors';
import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter your name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
         width: '100%',
            backgroundColor: colors.white,
            borderRadius: 8,
            paddingVertical: 14,
            paddingHorizontal: 24,
            alignItems: 'center',
            justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
});

export default Input 
