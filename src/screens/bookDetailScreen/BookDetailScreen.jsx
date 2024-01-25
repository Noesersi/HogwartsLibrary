import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

const BookDetailScreen = ({ route }) => {
  const { book } = route.params
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{book.title}</Text>

      <Text>
        <Text style={styles.detailsTag}>Author: </Text>
        {book.author}
      </Text>
      <Text>
        <Text style={styles.detailsTag}>Genre: </Text>
        {book.genre}
      </Text>
      <Text>
        <Text style={styles.detailsTag}>Year: </Text>
        {book.year}
      </Text>
      <Text>
        <Text style={styles.detailsTag}>Rating: </Text>
        {book.rating}/5
      </Text>
      <Text style={styles.centerDescription}>
        <Text style={styles.detailsTag}>Summary: </Text>
        {book.summary}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('EditScreen', { bookId: book.id })}>
          <Text style={styles.editButton}>✏️ Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.deleteButton}>❌ Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>🔙 Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BookDetailScreen
