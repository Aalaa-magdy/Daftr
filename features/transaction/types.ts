export type TransactionKind = 'expense' | 'income';

export const TRANSACTION_NEW_ID = 'new';

export type TransactionFormParams = {
  id: string;
  type?: TransactionKind;
};
