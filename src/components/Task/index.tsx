import { Image, Text, TouchableOpacity, View } from 'react-native'
import { S } from './styles'

interface TaskProps {
  id?: string
  content: string
  available: boolean
}

export function Task({ id, content, available }: TaskProps) {
  return (
    <View style={S.container}>
      <View style={S.imageBox}>
        <TouchableOpacity>
          {available ? (
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
      <Text style={S.text}>{content}</Text>
      <View style={S.imageBox}>
        <TouchableOpacity>
          <Image
            style={S.image}
            source={require('../../../assets/trash.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
