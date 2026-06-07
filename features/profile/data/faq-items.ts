export type FaqItemData = {
  id: string;
  questionKey: string;
  answerKey: string;
};

export const FAQ_ITEMS: FaqItemData[] = [
  {
    id: 'what-is-daftr',
    questionKey: 'profile.faq.whatIsDaftr.question',
    answerKey: 'profile.faq.whatIsDaftr.answer',
  },
  {
    id: 'add-expense',
    questionKey: 'profile.faq.addExpense.question',
    answerKey: 'profile.faq.addExpense.answer',
  },
  {
    id: 'edit-delete-expenses',
    questionKey: 'profile.faq.editDeleteExpenses.question',
    answerKey: 'profile.faq.editDeleteExpenses.answer',
  },
  {
    id: 'payday-feature',
    questionKey: 'profile.faq.paydayFeature.question',
    answerKey: 'profile.faq.paydayFeature.answer',
  },
  {
    id: 'extra-income',
    questionKey: 'profile.faq.extraIncome.question',
    answerKey: 'profile.faq.extraIncome.answer',
  },
  {
    id: 'data-saved',
    questionKey: 'profile.faq.dataSaved.question',
    answerKey: 'profile.faq.dataSaved.answer',
  },
];
