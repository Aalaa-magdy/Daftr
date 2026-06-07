export type LanguageId = 'en' | 'ar';

export type LanguageOption = {
  id: LanguageId;
  labelKey: 'common.english' | 'common.arabic';
};

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { id: 'en', labelKey: 'common.english' },
  { id: 'ar', labelKey: 'common.arabic' },
];
