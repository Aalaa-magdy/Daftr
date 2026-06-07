import LegalDocumentScreen from '@/features/profile/screens/LegalDocumentScreen';
import { PRIVACY_CONFIG } from '@/features/profile/data/legal-documents';

const PrivacyPolicyScreen = () => (
  <LegalDocumentScreen document={PRIVACY_CONFIG} />
);

export default PrivacyPolicyScreen;
