import { colors } from '@/theme/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  /** 0–1 fill amount */
  progress: number;
  color?: string;
  trackColor?: string;
}

const ProgressBar = ({
  progress,
  color = colors.primary,
  trackColor = colors.progressInactive,
}: Props) => {
  const fill = Math.min(1, Math.max(0, progress));

  return (
    <View style={[styles.track, { backgroundColor: trackColor }]}>
      <View
        style={[
          styles.fill,
          { width: `${fill * 100}%`, backgroundColor: color },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    width: '100%',
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 2,
  },
});

export default ProgressBar;
