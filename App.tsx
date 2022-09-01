import { StatusBar, StyleSheet, View } from 'react-native'
import { Header } from './src/components/Header'
import { TasksData } from './src/components/TasksData'

export default function App() {
  return (
    <View style={S.mainContainer}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header />
      <TasksData />
    </View>
  )
}

const S = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#0D0D0D',
    height: '100%'
  }
})
