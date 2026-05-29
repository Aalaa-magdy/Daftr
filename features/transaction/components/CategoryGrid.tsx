import { colors } from '@/theme/colors';
import Add01Icon from '@hugeicons/core-free-icons/Add01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EXPENSE_CATEGORIES } from '../data/form-options';

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const CategoryGrid = ({ selectedId, onSelect }: Props) => (
  <View style={styles.grid}>
    {EXPENSE_CATEGORIES.map((category) => {
      const isSelected = selectedId === category.id;

      return (
        <TouchableOpacity
          key={category.id}
          style={[styles.chip, isSelected && styles.chipSelected]}
          onPress={() => onSelect(category.id)}
          activeOpacity={0.8}
        >
          <HugeiconsIcon icon={category.icon} size={18} color={category.color} />
          <Text style={[styles.chipText, { color: category.color }]}>
            {category.label}
          </Text>
        </TouchableOpacity>
      );
    })}

    <TouchableOpacity style={styles.addChip} activeOpacity={0.8}>
      <HugeiconsIcon icon={Add01Icon} size={18} color={colors.primary} />
      <Text style={styles.addChipText}>Add Category</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
  },
  chipSelected: {
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
  },
  chipText: {
    fontFamily: 'Changa_400Regular',
    fontSize: 14,
    lineHeight: 18,
  },
  addChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    borderStyle: 'dashed',
  },
  addChipText: {
    fontFamily: 'Changa_500Medium',
    fontSize: 14,
    lineHeight: 18,
    color: colors.primary,
  },
});

export default CategoryGrid;
