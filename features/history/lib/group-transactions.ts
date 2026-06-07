import i18n from '@/lib/i18n';
import type { HistoryTransaction } from '../data/mock-transactions';

function getDateLocale() {
  return i18n.language === 'ar' ? 'ar-EG' : 'en-GB';
}

export function formatHistoryDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleDateString(getDateLocale(), { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export type HistoryDateGroup = {
  dateKey: string;
  dateLabel: string;
  items: HistoryTransaction[];
};

export function groupTransactionsByDate(
  transactions: HistoryTransaction[],
): HistoryDateGroup[] {
  const groups = new Map<string, HistoryDateGroup>();

  for (const transaction of transactions) {
    const dateKey = transaction.date.toISOString().slice(0, 10);
    const existing = groups.get(dateKey);

    if (existing) {
      existing.items.push(transaction);
      continue;
    }

    groups.set(dateKey, {
      dateKey,
      dateLabel: formatHistoryDate(transaction.date),
      items: [transaction],
    });
  }

  return Array.from(groups.values()).sort((a, b) =>
    b.dateKey.localeCompare(a.dateKey),
  );
}
