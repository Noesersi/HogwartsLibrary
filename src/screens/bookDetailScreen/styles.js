import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    padding:20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    margin: 20,
  },
  detailsTag: {
    fontWeight: 'bold',
  },
  detailItem: {
    flex: 1,
    width: '90%',
    textAlign: 'left',
    marginBottom: 10,
  },
  centerDescription: {
    textAlign: 'center',
    marginHorizontal: 10,
  },
  image: {
    alignItems: 'center',
    width: 100,
    height: 150,
    marginBottom: 20, 
  },
  summaryContainer: {
    maxHeight: 150, 
    width: '90%',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    gap: 3,
    marginTop: 20,
  },
  editButton: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    textAlign: 'center',
  },
  deleteButton: {
    color: 'white',
    backgroundColor: 'black',
    fontWeight: 'bold',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    textAlign: 'center',
  },
  backButton: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
  },
});
