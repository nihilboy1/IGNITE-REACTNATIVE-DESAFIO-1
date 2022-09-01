import { StyleSheet } from 'react-native'

export const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    paddingBottom: 20,
    marginTop: 60,
    borderBottomWidth: 1,
    borderColor: '#262626'
  },

  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textInputCreated: {
    fontWeight: 'bold',
    color: '#4EA8DE',
    fontSize: 18
  },

  textInputCompleted: {
    fontWeight: 'bold',
    color: '#8284FA',
    fontSize: 18
  },

  numberText: {
    backgroundColor: '#262626',
    color: '#FFFF',
    paddingHorizontal: 8,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5
  }
})
