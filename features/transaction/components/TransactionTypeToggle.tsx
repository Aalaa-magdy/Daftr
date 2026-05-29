import { colors } from '@/theme/colors';
import type { TransactionKind } from '../types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  value: TransactionKind;
  onChange: (kind: TransactionKind) => void;
}

const TransactionTypeToggle = ({ value, onChange }: Props) => (
  <View style={styles.track}>
    <TouchableOpacity
      style={[styles.tab, value === 'expense' && styles.tabActive]}
      onPress={() => onChange('expense')}
      activeOpacity={0.85}
    >
      <Text style={[styles.tabText, value === 'expense' && styles.tabTextActive]}>
        Expense
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.tab, value === 'income' && styles.tabActive]}
      onPress={() => onChange('income')}
      activeOpacity={0.85}
    >
      <Text style={[styles.tabText, value === 'income' && styles.tabTextActive]}>
        Income
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  track: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontFamily: 'Changa_500Medium',
    fontSize: 16,
    lineHeight: 20,
    color: colors.textSecondary,
  },
  tabTextActive: {
    color: colors.white,
  },
});

export default TransactionTypeToggle;
