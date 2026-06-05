export type FaqItemData = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItemData[] = [
  {
    id: 'what-is-daftr',
    question: 'What is Daftr?',
    answer:
      'Daftr is a personal finance app that helps you track your income, expenses, and spending habits in a simple way.',
  },
  {
    id: 'add-expense',
    question: 'How do I add an expense?',
    answer:
      "Tap the '+' button from the home screen, enter the amount, choose a category, and save the expense.",
  },
  {
    id: 'edit-delete-expenses',
    question: 'Can I edit or delete expenses?',
    answer:
      'Yes, you can edit or delete any expense by tapping on its card. All your expenses are also available in the Transactions screen under the Expenses tab.',
  },
  {
    id: 'payday-feature',
    question: 'How does the payday feature work?',
    answer:
      'Your balance automatically resets every month based on the payday you selected during setup.',
  },
  {
    id: 'extra-income',
    question: 'Can I add extra income?',
    answer:
      'Yes, you can add additional income sources like freelance work, bonuses, or any custom income.',
  },
  {
    id: 'data-saved',
    question: 'Is my data saved?',
    answer:
      'If you use Daftr as a guest, your data is stored only on your device. If you delete the app or log out, all guest data will be permanently removed. To keep your data safe and synced, you need to create an account or sign in.',
  },
];
