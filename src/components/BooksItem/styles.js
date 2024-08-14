import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
    width: '100%'
  },
  image: {
    width: 80,
    height: 90,
    objectFit: 'fill',
    marginRight: 15
  },
  detailsContainer: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  author: {
    fontSize: 14,
    color: 'gray'
  },
  rating: {
    marginTop: 'auto'
  }
})
