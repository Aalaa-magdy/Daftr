import Header from '@/components/ui/Header'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const SetSalary = () => {
  return (
    <View style={styles.container}>
        <Header title={"Let’s set your monthly salary"} subtitle="Add your salary and payday to automatically track your monthly spending cycle." />
    </View>
  )
}
const styles = StyleSheet.create({
 container:{
    flex: 1,
 }
})
export default SetSalary