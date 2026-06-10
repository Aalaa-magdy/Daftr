import Navbar from '@/features/home/components/Navbar';
import { useNavbarNavigation } from '@/features/home/hooks/useNavbarNavigation';
import { colors } from '@/theme/colors';
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from '@expo-google-fonts/changa';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { screenLayout } from '@/theme/screen-layout';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryBreakdown from '../components/CategoryBreakdown';
import DateNavigator from '../components/DateNavigator';
import PeriodToggle from '../components/PeriodToggle';
import SummaryCards from '../components/SummaryCards';
import TrendBarChart from '../components/TrendBarChart';
import {
  STATISTICS_BY_PERIOD,
  type StatisticsPeriod,
} from '../data/mock-statistics';
import { formatTrendLabel } from '../lib/format-trend-label';

const Statistics = () => {
  const { t } = useTranslation();
  const { onTabPress, onAddPress } = useNavbarNavigation('statistics');
  const [period, setPeriod] = useState<StatisticsPeriod>('month');
  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });

  const stats = useMemo(() => STATISTICS_BY_PERIOD[period], [period]);

  const trendData = useMemo(
    () =>
      stats.trend.map((point) => ({
        ...point,
        label: formatTrendLabel(point, t),
      })),
    [stats.trend, t],
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={screenLayout.header}>
        <Text style={screenLayout.title}>{t('statistics.title')}</Text>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <PeriodToggle value={period} onChange={setPeriod} />

        <DateNavigator label={stats.dateLabel} />

        <SummaryCards
          totalSpent={stats.totalSpent}
          totalIncome={stats.totalIncome}
        />

        <CategoryBreakdown
          categories={stats.categories}
          totalSpent={stats.totalSpent}
        />

        <TrendBarChart
          title={t(stats.titleKey)}
          subtitle={stats.trendSubtitle}
          maxValue={stats.trendMax}
          data={trendData}
          isWeeklyChart={period === 'week'}
          isMonthlyChart={period === 'month'}
        />
      </ScrollView>

      <Navbar
        activeTab="statistics"
        onTabPress={onTabPress}
        onAddPress={onAddPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 96,
    gap: 16,
  },
});

export default Statistics;
