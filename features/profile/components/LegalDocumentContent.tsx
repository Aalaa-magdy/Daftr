import { colors } from '@/theme/colors';
import { StyleSheet, Text, View } from 'react-native';
import type { LegalDocument } from '../data/legal-documents';

interface Props {
  document: LegalDocument;
}

const LegalDocumentContent = ({ document }: Props) => (
  <View style={styles.card}>
    <Text style={styles.documentTitle}>{document.documentTitle}</Text>
    <Text style={styles.intro}>{document.intro}</Text>

    {document.sections.map((section) => (
      <View key={section.number} style={styles.section}>
        <Text style={styles.sectionTitle}>
          {section.number}. {section.title}
        </Text>

        {section.intro ? (
          <Text style={styles.sectionIntro}>{section.intro}</Text>
        ) : null}

        {section.bullets.map((bullet) => (
          <View key={bullet} style={styles.bulletRow}>
            <Text style={styles.bulletMarker}>•</Text>
            <Text style={styles.bulletText}>{bullet}</Text>
          </View>
        ))}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 16,
  },
  documentTitle: {
    fontFamily: 'Changa_500Medium',
    fontSize: 18,
    lineHeight: 26,
    color: colors.black,
  },
  intro: {
    fontFamily: 'Changa_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: colors.textSecondary,
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    fontFamily: 'Changa_500Medium',
    fontSize: 16,
    lineHeight: 24,
    color: colors.black,
  },
  sectionIntro: {
    fontFamily: 'Changa_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: colors.textSecondary,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    paddingLeft: 4,
  },
  bulletMarker: {
    fontFamily: 'Changa_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: colors.textSecondary,
  },
  bulletText: {
    flex: 1,
    fontFamily: 'Changa_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: colors.textSecondary,
  },
});

export default LegalDocumentContent;
