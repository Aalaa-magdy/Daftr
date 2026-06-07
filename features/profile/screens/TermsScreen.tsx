import LegalDocumentScreen from '@/features/profile/screens/LegalDocumentScreen';
import { TERMS_CONFIG } from '@/features/profile/data/legal-documents';

const TermsScreen = () => <LegalDocumentScreen document={TERMS_CONFIG} />;

export default TermsScreen;
