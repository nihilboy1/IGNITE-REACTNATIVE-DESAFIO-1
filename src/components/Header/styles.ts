import { StyleSheet } from 'react-native'

export const S = StyleSheet.create({
  headerContainer: {
    height: 130,
    marginTop: 30,
    borderColor: '#fffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 35
  },

  inputContainer: {
    flexDirection: 'row',
    marginTop: 35
  },

  textInput: {
    borderWidth: 1,
    paddingLeft: 15,
    padding: 12,
    fontSize: 18,
    marginRight: 5,
    flex: 1,
    color: '#D9D9D9',
    backgroundColor: '#262626',
    borderRadius: 5
  },

  addTaskButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 5,
    borderWidth: 1
  },

  imageBox: {
    width: 140,
    height: 40,
    marginTop: 50
  },

  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
})
