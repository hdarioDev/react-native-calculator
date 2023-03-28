import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import CalculatorScreens from './src/screens/CalculatorScreens'
import { styles } from './src/theme/appTheme'

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
      <CalculatorScreens />
    </SafeAreaView >
  )
}