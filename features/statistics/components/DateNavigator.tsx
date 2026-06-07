import { colors } from '@/theme/colors';
import { useDirectionalIcons } from '@/hooks/useDirectionalIcons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  label: string;
}

const DateNavigator = ({ label }: Props) => {
  const { t } = useTranslation();
  const { previousIcon, nextIcon } = useDirectionalIcons();

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={t('statistics.previousPeriod')}
      >
        <HugeiconsIcon icon={previousIcon} size={20} color={colors.textSecondary} />
      </TouchableOpacity>

      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={t('statistics.nextPeriod')}
      >
        <HugeiconsIcon icon={nextIcon} size={20} color={colors.textSecondary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  button: {
    padding: 8,
  },
  label: {
    fontFamily: 'Changa_500Medium',
    fontSize: 16,
    lineHeight: 22,
    color: colors.textGray,
  },
});

export default DateNavigator;
