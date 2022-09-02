import { Image, Text, View } from 'react-native'
import { S } from './style'

export function NoTasks() {
  return (
    <View style={S.container}>
      <View>
        <Image source={require('../../../assets/clipboard.png')} />
      </View>
      <Text style={S.textBold}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={S.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}
