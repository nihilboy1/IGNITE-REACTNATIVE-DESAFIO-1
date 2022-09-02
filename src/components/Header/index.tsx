import { Image, View } from 'react-native'
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
    </View>
  )
}
