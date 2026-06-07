import { useTranslation } from 'react-i18next';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export function useAppDirection() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const directionStyle: StyleProp<ViewStyle> = {
    flex: 1,
    direction: isRTL ? 'rtl' : 'ltr',
  };

  // Root layout sets direction — use logical start ('left') so Arabic aligns to the right.
  const textAlign: TextStyle['textAlign'] = 'left';

  const writingDirection: TextStyle['writingDirection'] = isRTL ? 'rtl' : 'ltr';

  return { isRTL, directionStyle, textAlign, writingDirection };
}
