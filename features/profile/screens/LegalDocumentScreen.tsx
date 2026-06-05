import TransactionHeader from '@/features/transaction/components/TransactionHeader';
import { colors } from '@/theme/colors';
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from '@expo-google-fonts/changa';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LegalDocumentContent from '../components/LegalDocumentContent';
import type { LegalDocument } from '../data/legal-documents';

interface Props {
  document: LegalDocument;
}

const LegalDocumentScreen = ({ document }: Props) => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TransactionHeader
          title={document.headerTitle}
          onBack={() => router.back()}
        />

        <LegalDocumentContent document={document} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingBottom: 32,
  },
});

export default LegalDocumentScreen;
