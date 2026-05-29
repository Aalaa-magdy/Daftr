import Button from '@/components/ui/Button';
import Header from '@/components/ui/Header';
import Input from '@/components/ui/Input';
import { colors } from '@/theme/colors';
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from '@expo-google-fonts/changa';
import MoneyBag01Icon from '@hugeicons/core-free-icons/MoneyBag01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTransactionFormMode } from '../hooks/useTransactionFormMode';


const TransactionFormScreen = () => {
  const router = useRouter();
  const { id, kind, isEdit, title } = useTransactionFormMode();
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleSubmit = () => {
    // TODO: create when isEdit is false, update when isEdit is true (id)
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>


      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
   
        <View style={styles.form}>
          <Input
            label="Amount"
            placeholder="0.00"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            icon={<HugeiconsIcon icon={MoneyBag01Icon} size={22} />}
          />
          <Input
            label="Note"
            placeholder="What was this for?"
            value={note}
            onChangeText={setNote}
          />
        </View>

        <View style={styles.buttonWrap}>
          <Button
            title={isEdit ? 'Save changes' : 'Add transaction'}
            onPress={handleSubmit}
            disabled={!amount.trim()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '90%',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  form: {
    gap: 8,
    marginTop: 8,
  },
  buttonWrap: {
    marginTop: 16,
  },
});

export default TransactionFormScreen;
