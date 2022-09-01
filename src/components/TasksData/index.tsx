import { Text, View } from 'react-native'
import { S } from './styles'

export function TasksData() {
  return (
    <View style={S.container}>
      <View style={S.dataContainer}>
        <Text style={S.textInputCreated}>Criadas</Text>
        <Text style={S.numberText}>0</Text>
      </View>
      <View style={S.dataContainer}>
        <Text style={S.textInputCompleted}>Concluídas</Text>
        <Text style={S.numberText}>0</Text>
      </View>
    </View>
  )
}
