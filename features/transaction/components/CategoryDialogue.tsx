import { colors } from '@/theme/colors';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CategoryDialogue = () => {
  return (
    <View style={styles.dialogue}>
        <Text>Category Dialogue</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    dialogue: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 20,
        width: '80%',
        height: '80%',
    },
});

export default CategoryDialogue