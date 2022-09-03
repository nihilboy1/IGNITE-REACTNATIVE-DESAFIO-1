import { Image, Text, TouchableOpacity, View } from 'react-native'
import { S } from './styles'

interface TaskProps {
  id: string
  content: string
  available: boolean
  changeCheckedState: (value: string) => void
  handleRemoveTask: (value: string) => void
}

export function Task({
  id,
  content,
  available,
  changeCheckedState,
  handleRemoveTask
}: TaskProps) {
  return (
    <View style={S.container}>
      <View style={S.imageBox}>
        <TouchableOpacity onPress={() => changeCheckedState(id)}>
          {!available ? (
            <Image
              style={S.image}
              source={require('../../../assets/checkedCircle.png')}
            />
          ) : (
            <Image
              style={S.image}
              source={require('../../../assets/circle.png')}
            />
          )}
        </TouchableOpacity>
      </View>
      <Text
        style={[
          S.text,
          { textDecorationLine: `${available ? 'none' : 'line-through'}`, color: `${available ? '#ffff' : '#ffffff5a'}` }
        ]}
      >
        {content}
      </Text>
      <View style={S.imageBox}>
        <TouchableOpacity onPress={() => handleRemoveTask(id)}>
          <Image
            style={S.image}
            source={require('../../../assets/trash.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
