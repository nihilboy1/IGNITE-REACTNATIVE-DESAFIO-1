import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import { S } from './styles'

export function Header() {
  return (
    <View style={S.headerContainer}>
      <View style={S.imageBox}>
        <Image
          style={S.logoImage}
          source={require('../../../assets/Logo.png')}
        />
      </View>
      <View style={S.inputContainer}>
        <TextInput
          style={S.textInput}
          placeholder="Adicione uma tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={S.addTaskButton}>
          <Image source={require('../../../assets/plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
