import { colors } from '@/theme/colors';
import { useDirectionalIcons } from '@/hooks/useDirectionalIcons';
import ArrowDown01Icon from '@hugeicons/core-free-icons/ArrowDown01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const WEEKDAY_KEYS = [
  'datePicker.weekdays.sun',
  'datePicker.weekdays.mon',
  'datePicker.weekdays.tue',
  'datePicker.weekdays.wed',
  'datePicker.weekdays.thu',
  'datePicker.weekdays.fri',
  'datePicker.weekdays.sat',
] as const;

const MONTH_KEYS = [
  'datePicker.months.january',
  'datePicker.months.february',
  'datePicker.months.march',
  'datePicker.months.april',
  'datePicker.months.may',
  'datePicker.months.june',
  'datePicker.months.july',
  'datePicker.months.august',
  'datePicker.months.september',
  'datePicker.months.october',
  'datePicker.months.november',
  'datePicker.months.december',
] as const;

const DAY_CELL = 32;
const DAY_INNER = 28;

interface Props {
  value: Date | null;
  onChange: (date: Date) => void;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function buildCalendarDays(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];

  for (let i = 0; i < firstDay; i += 1) {
    cells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day);
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

const DatePicker = ({ value, onChange }: Props) => {
  const { t } = useTranslation();
  const { previousIcon, nextIcon } = useDirectionalIcons();
  const today = useMemo(() => new Date(), []);
  const initial = value ?? today;

  const [viewYear, setViewYear] = useState(initial.getFullYear());
  const [viewMonth, setViewMonth] = useState(initial.getMonth());
  const [showMonthMenu, setShowMonthMenu] = useState(false);

  const calendarDays = useMemo(
    () => buildCalendarDays(viewYear, viewMonth),
    [viewYear, viewMonth]
  );

  const goToPreviousMonth = () => {
    setShowMonthMenu(false);
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
      return;
    }
    setViewMonth((m) => m - 1);
  };

  const goToNextMonth = () => {
    setShowMonthMenu(false);
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
      return;
    }
    setViewMonth((m) => m + 1);
  };

  const handleSelectMonth = (monthIndex: number) => {
    setViewMonth(monthIndex);
    setShowMonthMenu(false);
  };

  const handleSelectDay = (day: number) => {
    onChange(new Date(viewYear, viewMonth, day));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.monthYearWrap}>
          <TouchableOpacity
            style={styles.monthYearButton}
            activeOpacity={0.7}
            onPress={() => setShowMonthMenu((open) => !open)}
            accessibilityRole="button"
            accessibilityLabel={t('datePicker.chooseMonth')}
          >
            <Text style={styles.monthYearText}>
              {t(MONTH_KEYS[viewMonth])} {viewYear}
            </Text>
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              size={14}
              color={colors.black}
            />
          </TouchableOpacity>

          {showMonthMenu ? (
            <View style={styles.monthMenu}>
              <ScrollView
                style={styles.monthMenuScroll}
                nestedScrollEnabled
                keyboardShouldPersistTaps="handled"
              >
                {MONTH_KEYS.map((key, index) => (
                  <TouchableOpacity
                    key={key}
                    style={[
                      styles.monthOption,
                      index === viewMonth && styles.monthOptionActive,
                    ]}
                    onPress={() => handleSelectMonth(index)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.monthOptionText,
                        index === viewMonth && styles.monthOptionTextActive,
                      ]}
                    >
                      {t(key)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          ) : null}
        </View>

        <View style={styles.navRow}>
          <TouchableOpacity
            onPress={goToPreviousMonth}
            style={styles.navButton}
            accessibilityRole="button"
            accessibilityLabel={t('datePicker.previousMonth')}
          >
            <HugeiconsIcon
              icon={previousIcon}
              size={18}
              color={colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToNextMonth}
            style={styles.navButton}
            accessibilityRole="button"
            accessibilityLabel={t('datePicker.nextMonth')}
          >
            <HugeiconsIcon
              icon={nextIcon}
              size={18}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.weekRow}>
        {WEEKDAY_KEYS.map((key, index) => (
          <Text key={`${key}-${index}`} style={styles.weekday}>
            {t(key)}
          </Text>
        ))}
      </View>

      <View style={styles.grid}>
        {calendarDays.map((day, index) => {
          if (day === null) {
            return <View key={`empty-${index}`} style={styles.dayCell} />;
          }

          const cellDate = new Date(viewYear, viewMonth, day);
          const selected = value ? isSameDay(cellDate, value) : false;
          const isToday = isSameDay(cellDate, today);

          return (
            <TouchableOpacity
              key={`day-${day}-${index}`}
              style={styles.dayCell}
              onPress={() => handleSelectDay(day)}
              activeOpacity={0.7}
              accessibilityRole="button"
            >
              <View
                style={[
                  styles.dayInner,
                  selected && styles.daySelected,
                  !selected && isToday && styles.dayToday,
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    selected && styles.dayTextSelected,
                  ]}
                >
                  {day}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  monthYearWrap: {
    position: 'relative',
    zIndex: 2,
  },
  monthYearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  monthYearText: {
    fontFamily: 'Changa_500Medium',
    fontSize: 14,
    lineHeight: 20,
    color: colors.black,
  },
  monthMenu: {
    position: 'absolute',
    top: 28,
    left: 0,
    minWidth: 140,
    maxHeight: 200,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  monthMenuScroll: {
    maxHeight: 200,
  },
  monthOption: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  monthOptionActive: {
    backgroundColor: colors.secondary,
  },
  monthOptionText: {
    fontFamily: 'Changa_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: colors.black,
  },
  monthOptionTextActive: {
    fontFamily: 'Changa_500Medium',
    color: colors.primary,
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  navButton: {
    padding: 2,
  },
  weekRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  weekday: {
    width: `${100 / 7}%`,
    textAlign: 'center',
    fontFamily: 'Changa_400Regular',
    fontSize: 12,
    lineHeight: 16,
    color: colors.textGray,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: `${100 / 7}%`,
    height: DAY_CELL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayInner: {
    width: DAY_INNER,
    height: DAY_INNER,
    borderRadius: DAY_INNER / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  daySelected: {
    backgroundColor: colors.primary,
  },
  dayToday: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  dayText: {
    fontFamily: 'Changa_400Regular',
    fontSize: 13,
    lineHeight: 18,
    color: colors.black,
  },
  dayTextSelected: {
    fontFamily: 'Changa_500Medium',
    color: colors.white,
  },
});

export default DatePicker;
