export type LegalSectionConfig = {
  number: number;
  titleKey: string;
  introKey?: string;
  bulletKeys: string[];
};

export type LegalDocumentConfig = {
  headerTitleKey: string;
  documentTitleKey: string;
  introKey: string;
  sections: LegalSectionConfig[];
};

export const TERMS_CONFIG: LegalDocumentConfig = {
  headerTitleKey: 'profile.terms.headerTitle',
  documentTitleKey: 'profile.terms.documentTitle',
  introKey: 'profile.terms.intro',
  sections: [
    {
      number: 1,
      titleKey: 'profile.terms.sections.usage.title',
      bulletKeys: ['profile.terms.sections.usage.bullet'],
    },
    {
      number: 2,
      titleKey: 'profile.terms.sections.accountResponsibility.title',
      bulletKeys: ['profile.terms.sections.accountResponsibility.bullet'],
    },
    {
      number: 3,
      titleKey: 'profile.terms.sections.dataAccuracy.title',
      bulletKeys: ['profile.terms.sections.dataAccuracy.bullet'],
    },
    {
      number: 5,
      titleKey: 'profile.terms.sections.updates.title',
      bulletKeys: ['profile.terms.sections.updates.bullet'],
    },
    {
      number: 6,
      titleKey: 'profile.terms.sections.acceptance.title',
      bulletKeys: ['profile.terms.sections.acceptance.bullet'],
    },
  ],
};

export const PRIVACY_CONFIG: LegalDocumentConfig = {
  headerTitleKey: 'profile.privacy.headerTitle',
  documentTitleKey: 'profile.privacy.documentTitle',
  introKey: 'profile.privacy.intro',
  sections: [
    {
      number: 1,
      titleKey: 'profile.privacy.sections.informationWeCollect.title',
      bulletKeys: [
        'profile.privacy.sections.informationWeCollect.bullets.name',
        'profile.privacy.sections.informationWeCollect.bullets.email',
        'profile.privacy.sections.informationWeCollect.bullets.financialData',
      ],
    },
    {
      number: 2,
      titleKey: 'profile.privacy.sections.howWeUseYourData.title',
      introKey: 'profile.privacy.sections.howWeUseYourData.intro',
      bulletKeys: [
        'profile.privacy.sections.howWeUseYourData.bullets.trackExpenses',
        'profile.privacy.sections.howWeUseYourData.bullets.generateStatistics',
        'profile.privacy.sections.howWeUseYourData.bullets.improveExperience',
      ],
    },
    {
      number: 3,
      titleKey: 'profile.privacy.sections.dataSecurity.title',
      bulletKeys: ['profile.privacy.sections.dataSecurity.bullet'],
    },
    {
      number: 5,
      titleKey: 'profile.privacy.sections.dataSharing.title',
      bulletKeys: ['profile.privacy.sections.dataSharing.bullet'],
    },
    {
      number: 6,
      titleKey: 'profile.privacy.sections.userControl.title',
      bulletKeys: ['profile.privacy.sections.userControl.bullet'],
    },
  ],
};
