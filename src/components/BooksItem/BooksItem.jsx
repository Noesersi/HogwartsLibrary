/* eslint-disable no-unused-vars */
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

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

export default BooksItem
