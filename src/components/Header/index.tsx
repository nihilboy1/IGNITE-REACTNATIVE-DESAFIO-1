import { Image, StyleSheet, View } from 'react-native'

export function Header() {
  return (
    <View style={S.headerContainer}>
      <Image style={S.logoImage} source={require('../../../assets/Logo.png')} />
    </View>
  )
}

const S = StyleSheet.create({
  headerContainer: {
    height: 180,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#fffff",
    alignItems: "center",
  },

 
})
