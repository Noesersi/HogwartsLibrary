import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  form: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  addButton: {
    backgroundColor: '#32cd32',
    borderRadius: 20,
    borderColor: 'green',
    color: 'white',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    fontWeight: 'bold'
  },
  backButton: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    color: 'white',
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    elevation: 2,
    fontWeight: 'bold'
  },
  multilineInput: {
    height: 120
  }
})
