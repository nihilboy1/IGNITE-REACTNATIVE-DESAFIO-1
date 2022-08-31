import { StyleSheet, View } from 'react-native'
import { Header } from './src/components/Header'

export default function App() {
  return (
    <View style={S.mainContainer}>
      <Header />
    </View>
  )
}

const S = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#0D0D0D',
    height: '100%'
  }
})
