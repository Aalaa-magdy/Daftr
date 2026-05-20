import { StyleSheet, View } from 'react-native';
import ResetHeader from './ResetHeader';
import type { PasswordDataType } from '../data/passwordData';

interface Props {
  item: PasswordDataType;
  width: number;
  onBackPress?: () => void;
}

const ResetPasswordItem: React.FC<Props> = ({ item, width, onBackPress }) => {
  return (
    <View style={[styles.container, { width }]}>
      <ResetHeader
        title={item.title}
        description={item.subtitle}
        icon={item.icon}
        onBackPress={onBackPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default ResetPasswordItem;
