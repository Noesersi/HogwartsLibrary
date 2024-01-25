import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const BooksItem = ({ book }) => {
  const navigation = useNavigation()

  const handleNavigateToBookDetail = () => {
    navigation.navigate('BookDetailScreen', { book })
  }

  return (
    <TouchableOpacity onPress={handleNavigateToBookDetail}>
      <View style={styles.container}>
      <Image source={{ uri: 'https://previews.123rf.com/images/pandavector/pandavector1703/pandavector170300058/73300898-icono-de-libro-violeta-en-estilo-negro-aislado-sobre-fondo-blanco-libros-s%C3%ADmbolo-stock-vector.jpg' }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
      <Text style={styles.rating}>
        {book.rating}/5
        <Text> ⭐</Text>
      </Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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

export default BooksItem
