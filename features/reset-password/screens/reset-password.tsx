import { colors } from '@/theme/colors';
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from '@expo-google-fonts/changa';
import { useRouter } from 'expo-router';
import React, { useCallback, useRef, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Pagination from '../components/Pagination';
import ResetPasswordItem from '../components/ResetPasswordItem';
import passwordData, { type PasswordDataType } from '../data/passwordData';

const HORIZONTAL_PADDING = 20;

const ResetPassword = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const flatListRef = useRef<FlatList<PasswordDataType>>(null);
  const { width } = useWindowDimensions();
  const contentWidth = Math.max(width - HORIZONTAL_PADDING * 2, 0);

  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });
  const [currentStep, setCurrentStep] = useState(0);

  const handleScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const nextIndex = Math.round(offsetX / contentWidth);
      setCurrentStep(nextIndex);
    },
    [contentWidth]
  );

  const renderItem = useCallback(
    ({ item }: { item: PasswordDataType }) => (
      <ResetPasswordItem
        item={item}
        width={contentWidth}
        onBackPress={() => router.back()}
      />
    ),
    [contentWidth, router]
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.content}>
        <FlatList
          ref={flatListRef}
          data={passwordData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollEnd}
          getItemLayout={(_, index) => ({
            length: contentWidth,
            offset: contentWidth * index,
            index,
          })}
          style={styles.list}
        />
      </View>

      <View
        style={[styles.paginationContainer, { paddingBottom: insets.bottom + 16 }]}
      >
        <Pagination
          currentStep={currentStep}
          totalSteps={passwordData.length}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  list: {
    flex: 1,
  },
  paginationContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: HORIZONTAL_PADDING,
  },
});

export default ResetPassword;
