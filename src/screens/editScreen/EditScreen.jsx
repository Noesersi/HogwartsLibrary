/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native'
import { styles } from './styles'
import editBook from '../../services/editBook'
import { BookContext } from '../../context/context.js'

const EditScreen = ({ route, navigation }) => {
  const { fetchData } = useContext(BookContext)

  const { book } = route.params
  const [editedData, setEditedData] = useState({
    title: book.title || '',
    author: book.author || '',
    genre: book.genre || '',
    year: book.year ? String(book.year) : '',
    rating: book.rating ? String(book.rating) : '',
    summary: book.summary || ''
  })

  const handleSaveChanges = async () => {
    try {
      await editBook(book.id, editedData)
      Alert.alert('Book updated successfully')
      fetchData()
      navigation.navigate('BookDetailScreen', { book })
    } catch (error) {
      console.error('Error saving changes:', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Book</Text>
      <View style={styles.form}>
        <Text>Title:</Text>
        <TextInput
          style={styles.input}
          value={editedData.title}
          onChangeText={(text) => setEditedData({ ...editedData, title: text })}
        />

        <Text>Author:</Text>
        <TextInput
          style={styles.input}
          value={editedData.author}
          onChangeText={(text) => setEditedData({ ...editedData, author: text })}
        />

        <Text>Genre:</Text>
        <TextInput
          style={styles.input}
          value={editedData.genre}
          onChangeText={(text) => setEditedData({ ...editedData, genre: text })}
        />

        <Text>Year:</Text>
        <TextInput
          style={styles.input}
          value={editedData.year}
          keyboardType="numeric"
          onChangeText={(text) => setEditedData({ ...editedData, year: text })}
        />

        <Text>Rating:</Text>
        <TextInput
          style={styles.input}
          value={editedData.rating}
          keyboardType="numeric"
          onChangeText={(text) => setEditedData({ ...editedData, rating: text })}
        />

        <Text>Summary:</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={editedData.summary}
          multiline
          numberOfLines={4}
          onChangeText={(text) => setEditedData({ ...editedData, summary: text })}
        />
      </View>

      <TouchableOpacity onPress={handleSaveChanges}>
        <Text style={styles.addButton}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EditScreen
