export type LegalSection = {
  number: number;
  title: string;
  intro?: string;
  bullets: string[];
};

export type LegalDocument = {
  headerTitle: string;
  documentTitle: string;
  intro: string;
  sections: LegalSection[];
};

export const TERMS_CONTENT: LegalDocument = {
  headerTitle: 'Terms & Conditions',
  documentTitle: 'Terms & Conditions – Daftr App',
  intro:
    'Welcome to Daftr. By using this application, you agree to these Terms & Conditions. Please read them carefully before using the app.',
  sections: [
    {
      number: 1,
      title: 'Usage',
      bullets: ['You may use the app only for personal financial tracking purposes.'],
    },
    {
      number: 2,
      title: 'Account Responsibility',
      bullets: ['You are responsible for keeping your account information secure.'],
    },
    {
      number: 3,
      title: 'Data Accuracy',
      bullets: [
        'Daftr helps organize your financial data, but users are responsible for the accuracy of entered information.',
      ],
    },
    {
      number: 5,
      title: 'Updates',
      bullets: [
        'We may update features or modify the app experience at any time to improve the service.',
      ],
    },
    {
      number: 6,
      title: 'Acceptance',
      bullets: ['By continuing to use the app, you agree to these terms.'],
    },
  ],
};

export const PRIVACY_CONTENT: LegalDocument = {
  headerTitle: 'Privacy Policy',
  documentTitle: 'Privacy Policy – Daftr App',
  intro:
    'At Daftr, we value your privacy. By using the app, you agree to the collection and use of your data to improve your financial tracking experience.',
  sections: [
    {
      number: 1,
      title: 'Information We Collect',
      bullets: ['Name', 'Email address', 'Income and expense data'],
    },
    {
      number: 2,
      title: 'How We Use Your Data',
      intro: 'Your data is used to:',
      bullets: [
        'Track expenses',
        'Generate statistics',
        'Improve your experience',
      ],
    },
    {
      number: 3,
      title: 'Data Security',
      bullets: [
        'We use secure methods to protect your personal information and financial records.',
      ],
    },
    {
      number: 5,
      title: 'Data Sharing',
      bullets: ['We do not sell or share your personal data with third parties.'],
    },
    {
      number: 6,
      title: 'User Control',
      bullets: [
        'You can edit or delete your financial data at any time within the app.',
      ],
    },
  ],
};
