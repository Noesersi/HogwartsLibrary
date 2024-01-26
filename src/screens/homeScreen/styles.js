import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#32cd32',
    borderRadius: 20,
    borderColor: 'green',
    color: 'white',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 2,
    fontWeight: 'bold'
  }
})
