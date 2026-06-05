import LegalDocumentScreen from '@/features/profile/screens/LegalDocumentScreen';
import { PRIVACY_CONTENT } from '@/features/profile/data/legal-documents';

const PrivacyPolicyScreen = () => (
  <LegalDocumentScreen document={PRIVACY_CONTENT} />
);

export default PrivacyPolicyScreen;
