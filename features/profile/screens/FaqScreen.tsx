import TransactionHeader from '@/features/transaction/components/TransactionHeader';
import { colors } from '@/theme/colors';
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from '@expo-google-fonts/changa';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FaqItem from '../components/FaqItem';
import { FAQ_ITEMS } from '../data/faq-items';

const FaqScreen = () => {
  const router = useRouter();
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const toggleItem = (id: string) => {
    setExpandedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TransactionHeader
          title="Frequently Asked Questions"
          onBack={() => router.back()}
        />

        <Text style={styles.subtitle}>
          Find answers to the most frequently asked questions about the app.
        </Text>

        <View style={styles.list}>
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={item.id}
              item={item}
              expanded={expandedIds.has(item.id)}
              onToggle={() => toggleItem(item.id)}
              showDivider={index < FAQ_ITEMS.length - 1}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  scroll: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 10,
    paddingBottom: 32,
  },
  subtitle: {
    fontFamily: 'Changa_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: colors.textSecondary,
    paddingHorizontal: 4,
    marginBottom: 16,
  },
  list: {
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    paddingBottom: 16,
  },
});

export default FaqScreen;
