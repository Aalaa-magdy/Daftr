import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import ArrowRight02Icon from '@hugeicons/core-free-icons/ArrowRight02Icon';
import type { IconSvgElement } from '@hugeicons/react-native';
import { useAppDirection } from './useAppDirection';

export function useDirectionalIcons() {
  const { isRTL } = useAppDirection();

  const backIcon: IconSvgElement = isRTL ? ArrowRight02Icon : ArrowLeft02Icon;
  const previousIcon: IconSvgElement = isRTL ? ArrowRight02Icon : ArrowLeft02Icon;
  const nextIcon: IconSvgElement = isRTL ? ArrowLeft02Icon : ArrowRight02Icon;
  const chevronIcon: IconSvgElement = isRTL ? ArrowLeft02Icon : ArrowRight01Icon;

  return { isRTL, backIcon, previousIcon, nextIcon, chevronIcon };
}
