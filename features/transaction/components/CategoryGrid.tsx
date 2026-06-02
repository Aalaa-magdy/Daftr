import { colors } from '@/theme/colors';
import Add01Icon from '@hugeicons/core-free-icons/Add01Icon';
import PencilEdit02Icon from '@hugeicons/core-free-icons/PencilEdit02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  EXPENSE_CATEGORIES,
  type CategoryDialogueMode,
} from '../data/form-options';
import CategoryDialogue from './CategoryDialogue';

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const CategoryGrid = ({ selectedId, onSelect }: Props) => {
  const [dialogueVisible, setDialogueVisible] = useState(false);
  const [dialogueMode, setDialogueMode] = useState<CategoryDialogueMode>('add');

  const selectedCategory = useMemo(
    () => EXPENSE_CATEGORIES.find((category) => category.id === selectedId) ?? null,
    [selectedId]
  );

  const openDialogue = (mode: CategoryDialogueMode) => {
    setDialogueMode(mode);
    setDialogueVisible(true);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.label}>
          Category
          <Text style={styles.star}> *</Text>
        </Text>
        <TouchableOpacity
          style={[styles.editButton, !selectedCategory && styles.editButtonDisabled]}
          activeOpacity={0.85}
          disabled={!selectedCategory}
          onPress={() => openDialogue('edit')}
        >
          <HugeiconsIcon icon={PencilEdit02Icon} size={16} color={colors.primary} />
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

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
      </View>

      <TouchableOpacity
        style={styles.addChip}
        activeOpacity={0.8}
        onPress={() => openDialogue('add')}
      >
        <HugeiconsIcon icon={Add01Icon} size={18} color={colors.primary} />
        <Text style={styles.addChipText}>Add Category</Text>
      </TouchableOpacity>

      <CategoryDialogue
        visible={dialogueVisible}
        mode={dialogueMode}
        category={dialogueMode === 'edit' ? selectedCategory : null}
        onClose={() => setDialogueVisible(false)}
        onSave={() => {
          // TODO: persist category create/update
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Changa_400Regular',
    color: colors.black,
    fontSize: 16,
    lineHeight: 20,
  },
  star: {
    color: colors.red,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  editButtonDisabled: {
    opacity: 0.5,
  },
  editText: {
    fontFamily: 'Changa_500Medium',
    fontSize: 14,
    lineHeight: 18,
    color: colors.primary,
  },
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
    alignSelf: 'flex-start',
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
