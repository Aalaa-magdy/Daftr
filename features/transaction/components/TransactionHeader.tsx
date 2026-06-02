import { colors } from '@/theme/colors';
import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import Delete02Icon from '@hugeicons/core-free-icons/Delete02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  title: string;
  onBack: () => void;
  onDelete?: () => void;
}

const TransactionHeader = ({ title, onBack, onDelete }: Props) => (
  <View style={styles.header}>
    <TouchableOpacity
      onPress={onBack}
      hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
      accessibilityRole="button"
      accessibilityLabel="Go back"
    >
      <HugeiconsIcon icon={ArrowLeft02Icon} size={32} color={colors.textGray} />
    </TouchableOpacity>

    <Text style={styles.title}>{title}</Text>

    {onDelete ? (
      <TouchableOpacity
        onPress={onDelete}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        accessibilityRole="button"
        accessibilityLabel="Delete transaction"
      >
        <HugeiconsIcon icon={Delete02Icon} size={24} color={colors.red} />
      </TouchableOpacity>
    ) : (
      <View style={styles.spacer} />
    )}
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 16,
    flexDirection: 'row',
    gap:12,
    paddingHorizontal: 4,
    paddingVertical: 12,
    marginBottom: 16,
  },
  title: {
    flex: 1,
    fontFamily: 'Changa_500Medium',
    fontSize: 20,
    lineHeight: 28,
    color: colors.black,
  },
  spacer: {
    width: 24,
  },
});

export default TransactionHeader;
