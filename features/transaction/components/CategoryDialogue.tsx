import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { colors } from '@/theme/colors';
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from '@expo-google-fonts/changa';
import GridViewIcon from '@hugeicons/core-free-icons/GridViewIcon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { useEffect, useMemo, useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CATEGORY_COLOR_OPTIONS,
  type CategoryDialogueMode,
  type ExpenseCategory,
} from '../data/form-options';
import FormField from './FormField';

interface Props {
  visible: boolean;
  mode: CategoryDialogueMode;
  category?: ExpenseCategory | null;
  onClose: () => void;
  onSave?: (payload: {
    name: string;
    color: string;
    icon: IconSvgElement;
  }) => void;
}

const CategoryDialogue = ({
  visible,
  mode,
  category,
  onClose,
  onSave,
}: Props) => {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState<string>(
    CATEGORY_COLOR_OPTIONS[0]
  );
  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });

  const isEdit = mode === 'edit';
  const title = isEdit ? 'Edit Category' : 'Add Category';
  const nameIcon = category?.icon ?? GridViewIcon;

  useEffect(() => {
    if (!visible) return;

    if (isEdit && category) {
      setName(category.label);
      setSelectedColor(category.color);
      return;
    }

    setName('');
    setSelectedColor(CATEGORY_COLOR_OPTIONS[0]);
  }, [visible, isEdit, category]);

  const canSave = useMemo(() => name.trim().length > 0, [name]);

  if (!fontsLoaded) {
    return null;
  }

  const handleSave = () => {
    if (!canSave) return;
    onSave?.({
      name: name.trim(),
      color: selectedColor,
      icon: category?.icon ?? GridViewIcon,
    });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.root}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={styles.sheet}>
          <View style={styles.handle} />

          <Text style={styles.title}>{title}</Text>

          <FormField label="Category Name" required>
            <Input
              placeholder="Enter category name"
              value={name}
              onChangeText={setName}
              icon={
                <HugeiconsIcon
                  icon={nameIcon}
                  size={22}
                  color={isEdit && category ? category.color : colors.captionMuted}
                />
              }
              containerStyle={styles.fieldInput}
            />
          </FormField>

          <FormField label="Icon" required>
            <TouchableOpacity activeOpacity={0.85}>
              <View pointerEvents="none">
                <Input
                  placeholder="Choose Icon"
                  value=""
                  icon={<HugeiconsIcon icon={GridViewIcon} size={22} />}
                  containerStyle={styles.fieldInput}
                />
              </View>
            </TouchableOpacity>
          </FormField>

          <FormField label="Color" required>
            <View style={styles.colors}>
              {CATEGORY_COLOR_OPTIONS.map((color) => {
                const isSelected = selectedColor === color;

                return (
                  <TouchableOpacity
                    key={color}
                    style={[
                      styles.colorSwatch,
                      { backgroundColor: color },
                      isSelected && styles.colorSwatchSelected,
                    ]}
                    onPress={() => setSelectedColor(color)}
                    activeOpacity={0.85}
                  />
                );
              })}
            </View>
          </FormField>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.cancelButton}
              activeOpacity={0.85}
              onPress={onClose}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <View style={styles.saveWrap}>
              <Button
                title="Save"
                onPress={handleSave}
                disabled={!canSave}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(8, 27, 10, 0.25)',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 28,
    paddingTop: 12,
    gap: 12,
  },
  handle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Changa_500Medium',
    fontSize: 18,
    lineHeight: 24,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 4,
  },
  fieldInput: {
    marginBottom: 0,
  },
  colors: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  colorSwatch: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  colorSwatchSelected: {
    borderWidth: 2,
    borderColor: colors.black,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  cancelText: {
    fontFamily: 'Changa_500Medium',
    fontSize: 16,
    lineHeight: 20,
    color: colors.primary,
  },
  saveWrap: {
    flex: 1,
  },
});

export default CategoryDialogue;
