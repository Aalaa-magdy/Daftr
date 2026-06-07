export function formatSummaryAmount(
  amount: number,
  kind: 'spent' | 'income',
  currency: string,
): string {
  const formatted = Math.abs(amount).toLocaleString('en-US');
  const sign = kind === 'income' ? '+' : '-';
  return `${sign}${formatted} ${currency}`;
}

export function formatCompactAmount(amount: number, currency: string): string {
  const abs = Math.abs(amount);

  if (abs >= 1000) {
    const thousands = abs / 1000;
    const compact =
      thousands % 1 === 0
        ? `${thousands}k`
        : `${thousands.toFixed(1).replace(/\.0$/, '')}K`;
    return `${compact} ${currency}`;
  }

  return `${abs.toLocaleString('en-US')} ${currency}`;
}

export function formatPercentage(value: number): string {
  return `${value % 1 === 0 ? value : value.toFixed(1)}%`;
}
