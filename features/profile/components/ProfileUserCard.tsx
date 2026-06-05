import { colors } from '@/theme/colors';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PROFILE_USER } from '../data/profile-menu';

const ProfileUserCard = () => (
  <View style={styles.card}>
    <View style={styles.avatarWrap}>
      <Image source={PROFILE_USER.avatar} style={styles.avatar} />
    </View>
    <View style={styles.info}>
      <Text style={styles.name}>{PROFILE_USER.name}</Text>
      <Text style={styles.email}>{PROFILE_USER.email}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
  },
  avatarWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontFamily: 'Changa_500Medium',
    fontSize: 18,
    lineHeight: 24,
    color: colors.black,
  },
  email: {
    fontFamily: 'Changa_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: colors.textSecondary,
  },
});

export default ProfileUserCard;
