/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import deleteBook from '../../services/deleteBook'
import { BookContext } from '../../context/context'

const BookDetailScreen = ({ route }) => {
  const { book } = route.params
  const navigation = useNavigation()
  const { fetchData, books } = useContext(BookContext)
  const [currentBook, setCurrentBook] = useState(book)
  useEffect(() => {
    const findBook = books.find((b) => b.id === currentBook.id)
    if (findBook) {
      setCurrentBook(findBook)
    }
  }, [books, currentBook])

  const handleDelete = async () => {
    try {
      const success = await deleteBook(book.id)
      if (success) {
        Alert.alert('Book deleted successfully')
        navigation.goBack()
        fetchData()
      } else {
        Alert.alert('Error deleting book')
      }
    } catch (error) {
      console.error('Error deleting book', error)
    }
  }
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{currentBook.title}</Text>

      <Text>
        <Text style={styles.detailsTag}>Author: </Text>
        {currentBook.author}
      </Text>
      <Text>
        <Text style={styles.detailsTag}>Genre: </Text>
        {currentBook.genre}
      </Text>
      <Text>
        <Text style={styles.detailsTag}>Year: </Text>
        {currentBook.year}
      </Text>
      <Text>
        <Text style={styles.detailsTag}>Rating: </Text>
        {currentBook.rating}/5
      </Text>
      <Text style={styles.centerDescription}>
        <Text style={styles.detailsTag}>Summary: </Text>
        {currentBook.summary}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('EditScreen', { currentBook })}>
          <Text style={styles.editButton}>✏️ Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
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
