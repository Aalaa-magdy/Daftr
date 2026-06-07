import GameController03Icon from '@hugeicons/core-free-icons/GameController03Icon';
import type { IconSvgElement } from '@hugeicons/react-native';

export type StatisticsPeriod = 'week' | 'month' | 'year';

export type TrendVariant = 'past' | 'active' | 'placeholder';

export type TrendPoint = {
  label?: string;
  labelKey?: string;
  labelParams?: Record<string, string | number>;
  value: number;
  variant: TrendVariant;
};

export type CategoryStat = {
  categoryId: string;
  amount: number;
  percentage: number;
  labelKey?: string;
  icon?: IconSvgElement;
  color?: string;
};

export type PeriodStatistics = {
  dateLabel: string;
  totalSpent: number;
  totalIncome: number;
  categories: CategoryStat[];
  titleKey: string;
  trendSubtitle: string;
  trendMax: number;
  trend: TrendPoint[];
};

export const STATISTICS_BY_PERIOD: Record<StatisticsPeriod, PeriodStatistics> = {
  week: {
    dateLabel: 'May 24 – May 30',
    totalSpent: 4500,
    totalIncome: 0,
    categories: [
      { categoryId: 'shopping', amount: 3000, percentage: 66.7 },
      { categoryId: 'education', amount: 1500, percentage: 33.3 },
    ],
    titleKey: 'statistics.weeklyTrend',
    trendSubtitle: 'May 24 – May 30',
    trendMax: 8000,
    trend: [
      { labelKey: 'statistics.weekLabel', labelParams: { number: 1 }, value: 5200, variant: 'past' },
      { labelKey: 'statistics.weekLabel', labelParams: { number: 2 }, value: 6100, variant: 'past' },
      { labelKey: 'statistics.weekLabel', labelParams: { number: 3 }, value: 4800, variant: 'past' },
      { labelKey: 'statistics.weekLabel', labelParams: { number: 4 }, value: 4500, variant: 'active' },
    ],
  },
  month: {
    dateLabel: 'May 2026',
    totalSpent: 8800,
    totalIncome: 34500,
    categories: [
      { categoryId: 'shopping', amount: 3000, percentage: 34 },
      { categoryId: 'self-care', amount: 1800, percentage: 20.5 },
      { categoryId: 'food', amount: 1500, percentage: 17 },
      { categoryId: 'bills', amount: 1000, percentage: 11.4 },
      { categoryId: 'education', amount: 800, percentage: 9.1 },
      { categoryId: 'health', amount: 500, percentage: 5.7 },
      {
        categoryId: 'gaming',
        labelKey: 'statistics.gaming',
        icon: GameController03Icon,
        color: '#717680',
        amount: 200,
        percentage: 2.3,
      },
    ],
    titleKey: 'statistics.monthlyTrend',
    trendSubtitle: 'May 2026',
    trendMax: 12000,
    trend: [
      { labelKey: 'statistics.months.jan', value: 4200, variant: 'past' },
      { labelKey: 'statistics.months.feb', value: 5100, variant: 'past' },
      { labelKey: 'statistics.months.mar', value: 6800, variant: 'past' },
      { labelKey: 'statistics.months.apr', value: 7200, variant: 'past' },
      { labelKey: 'statistics.months.may', value: 8800, variant: 'active' },
      { labelKey: 'statistics.months.jun', value: 0, variant: 'placeholder' },
      { labelKey: 'statistics.months.jul', value: 0, variant: 'placeholder' },
      { labelKey: 'statistics.months.aug', value: 0, variant: 'placeholder' },
      { labelKey: 'statistics.months.sep', value: 0, variant: 'placeholder' },
      { labelKey: 'statistics.months.oct', value: 0, variant: 'placeholder' },
      { labelKey: 'statistics.months.nov', value: 0, variant: 'placeholder' },
      { labelKey: 'statistics.months.dec', value: 0, variant: 'placeholder' },
    ],
  },
  year: {
    dateLabel: '2026',
    totalSpent: 48800,
    totalIncome: 74500,
    categories: [
      { categoryId: 'shopping', amount: 15000, percentage: 30.7 },
      { categoryId: 'food', amount: 10000, percentage: 20.5 },
      { categoryId: 'self-care', amount: 9000, percentage: 18.4 },
      { categoryId: 'bills', amount: 6000, percentage: 12.3 },
      { categoryId: 'education', amount: 5000, percentage: 10.2 },
      { categoryId: 'health', amount: 2700, percentage: 5.5 },
      {
        categoryId: 'gaming',
        labelKey: 'statistics.gaming',
        icon: GameController03Icon,
        color: '#717680',
        amount: 1100,
        percentage: 2.3,
      },
    ],
    titleKey: 'statistics.yearlyTrend',
    trendSubtitle: '2026',
    trendMax: 120000,
    trend: [
      { label: '2026', value: 48800, variant: 'active' },
      { label: '2027', value: 0, variant: 'placeholder' },
      { label: '2028', value: 0, variant: 'placeholder' },
      { label: '2029', value: 0, variant: 'placeholder' },
      { label: '2030', value: 0, variant: 'placeholder' },
    ],
  },
};
