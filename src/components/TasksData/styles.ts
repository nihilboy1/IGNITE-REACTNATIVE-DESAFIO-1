import { StyleSheet } from 'react-native'

export const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    paddingBottom: 20,
    marginTop: 30,
    borderBottomWidth: 1,
    borderColor: '#262626'
  },

  inputContainer: {
    flexDirection: 'row',
    marginTop: -30,
    marginHorizontal: 35
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
