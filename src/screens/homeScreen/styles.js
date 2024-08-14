import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30
  },
  header: {
    paddingTop: 30,
    gap: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderWidth: 1,
  },
  addButton: {
    borderRadius: 20,
    marginHorizontal: 'auto',
    marginTop: 10,
    backgroundColor: '#32cd32',
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 9,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  contentContainer: {
    padding:15,
    paddingBottom:80
    
  }, 
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
})
