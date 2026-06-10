import Button from '@/components/ui/Button';
import DatePickerDialogue from '@/components/ui/DatePickerDialogue';
import Header from '@/components/ui/Header';
import Input from '@/components/ui/Input';
import { colors } from '@/theme/colors';
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from '@expo-google-fonts/changa';
import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import MoneyBag01Icon from '@hugeicons/core-free-icons/MoneyBag01Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import React, { useMemo, useState } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

const patternSource = require('@/assets/images/background-pattern-decorative.png');

const fieldIcon = (icon: IconSvgElement) => (
  <HugeiconsIcon icon={icon} size={22} />
);

function formatPayday(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const SetSalary = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });

  const [salary, setSalary] = useState('');
  const [payday, setPayday] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const paydayDisplay = payday ? formatPayday(payday) : '';

  const isFormComplete = useMemo(
    () => salary.trim().length > 0 && payday !== null,
    [salary, payday],
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ImageBackground
          source={patternSource}
          style={styles.backgroundImage}
          resizeMode="cover"
        />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Header
            title={t('setSalary.title')}
            subtitle={t('setSalary.subtitle')}
          />

          <View style={styles.form}>
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>
                {t('setSalary.monthlySalary')}{' '}
                <Text style={styles.star}>{t('common.required')}</Text>
              </Text>
              <Input
                placeholder={t('common.amountPlaceholder')}
                keyboardType="numeric"
                value={salary}
                onChangeText={setSalary}
                icon={fieldIcon(MoneyBag01Icon)}
                containerStyle={styles.fieldInput}
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>
                {t('setSalary.payday')}{' '}
                <Text style={styles.star}>{t('common.required')}</Text>
              </Text>
              <Pressable
                onPress={() => setShowDatePicker(true)}
                accessibilityRole="button"
                accessibilityLabel={t('setSalary.payday')}
              >
                <View pointerEvents="none">
                  <Input
                    placeholder={t('common.datePlaceholder')}
                    value={paydayDisplay}
                    editable={false}
                    icon={fieldIcon(Calendar03Icon)}
                    containerStyle={styles.fieldInput}
                  />
                </View>
              </Pressable>
              <Text style={styles.helperText}>
                {t('setSalary.paydayHelper')}
              </Text>
            </View>

            <View style={styles.buttonWrap}>
              <Button
                title={t('common.continue')}
                disabled={!isFormComplete}
                onPress={() => {
                  if (!isFormComplete) return;
                  router.push('/home');
                  // TODO: persist salary + payday and navigate onward
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <DatePickerDialogue
        visible={showDatePicker}
        value={payday}
        topOffset={200}
        useOverlay
        onClose={() => setShowDatePicker(false)}
        onChange={setPayday}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    height: '60%',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 14,
    paddingTop: 18,
    paddingBottom: 32,
    gap: 8,
  },
  form: {
    gap: 8,
    marginTop: 8,
  },
  fieldGroup: {
    gap: 8,
  },
  fieldInput: {
    marginBottom: 0,
  },
  label: {
    fontFamily: 'Changa_400Regular',
    color: colors.black,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 4,
    marginTop: 8,
  },
  star: {
    color: 'red',
  },
  helperText: {
    fontFamily: 'Changa_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: colors.textGray,
  },
  buttonWrap: {
    marginTop: 16,
    width: '100%',
  },
});

export default SetSalary;
