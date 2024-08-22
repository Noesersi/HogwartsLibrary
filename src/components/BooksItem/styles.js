import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    borderWidth: 1,
    padding: 3,
    borderColor: 'white'
  },
  image: {
    width: 80,
    height: 110,
    objectFit: 'cover',
    marginRight: 15
  },
  detailsContainer: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'gray'

  },
  author: {
    fontSize: 14,
    color: 'gray'
  },
  rating: {
    marginTop: 'auto',
    color: 'gray'
  }
})
