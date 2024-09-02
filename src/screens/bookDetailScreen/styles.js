import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    padding:20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    paddingBottom: 80,
    flexGrow: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    margin: 20,
  },
  detailsTag: {
    color: 'white',

    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  detailItem: {
    flex: 1,

    width: '90%',
    textAlign: 'left',
    marginBottom: 10,
  },
  centerDescription: {
    color: 'white',

    textAlign: 'center',
    marginHorizontal: 10,
  },
  image: {
    alignItems: 'center',
    width: 150,
    height: 185,
    marginBottom: 20, 
  },
  summaryContainer: {
    maxHeight: 150, 
    width: '90%',
    marginBottom: 20,
    borderWidth:1,
    borderColor: 'white',
    color: 'white',

    padding: 5

  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    gap: 3,
    marginTop: 20,
  },
  buttonStyles: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#A8DADC',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    textAlign: 'center',
  },
  text:{
    color: '#A8DADC',
    fontWeight: 'bold',
  }
});
