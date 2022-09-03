import { StyleSheet } from 'react-native'

export const S = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    padding: 20,
    paddingHorizontal: 30,
    marginHorizontal: 40,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },

  text: {
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#FFFF',
    maxWidth: 300,
  },

  imageBox: {
    width: 21,
    height: 21
  },

  image: {
    width: '100%',
    height: '100%'
  }
})



