export interface OnboardingItemType {
  id: number;
  titleKey: string;
  descriptionKey: string;
  buttonTextKey?: string;
}

/** Order matches design: three intro slides, then auth / welcome slide. */
export const onboardingData: OnboardingItemType[] = [
  {
    id: 1,
    titleKey: 'onboarding.slide1Title',
    descriptionKey: 'onboarding.slide1Description',
    buttonTextKey: 'onboarding.tapToContinue',
  },
  {
    id: 2,
    titleKey: 'onboarding.slide2Title',
    descriptionKey: 'onboarding.slide2Description',
    buttonTextKey: 'onboarding.tapToContinue',
  },
  {
    id: 3,
    titleKey: 'onboarding.slide3Title',
    descriptionKey: 'onboarding.slide3Description',
    buttonTextKey: 'onboarding.getStarted',
  },
];

export const ONBOARDING_INTRO_STEPS = 3;
