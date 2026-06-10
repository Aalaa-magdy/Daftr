import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';

/** Shared top header spacing for main tab screens. */
export const screenLayout = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: 'Changa_500Medium',
    fontSize: 22,
    lineHeight: 28,
    color: colors.black,
  },
  scrollContent: {
    paddingBottom: 96,
  },
});
