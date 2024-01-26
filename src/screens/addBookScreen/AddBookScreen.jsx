/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native'
import { styles } from './styles'
import addBook from '../../services/addBook'
import { BookContext } from '../../context/context.js'
import { useNavigation } from '@react-navigation/native'

const AddBookScreen = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')
  const [summary, setSummary] = useState('')
  const [rating, setRating] = useState('')
  const { fetchData } = useContext(BookContext)
  const navigation = useNavigation()

  const handleAddBook = async () => {
    try {
      if (!title || !author || !genre || !year || !summary || !rating) {
        Alert.alert('Please fill in all fields.')
        return
      }

      if (isNaN(parseInt(year)) || isNaN(parseFloat(rating))) {
        Alert.alert('Year and Rating must be numbers.')
        return
      }
      if (rating > 5 || rating < 0) {
        Alert.alert('Rating must be between 0 and 5.')
        return
      }
      if (summary.length > 200) {
        Alert.alert('Summary must be no longer than 200 characters.')
        return
      }

      if (title.length > 50 || author.length > 50 || genre.length > 50) {
        Alert.alert('Title, Author, and Genre must be no longer than 50 characters.')
        return
      }

      const newBook = {
        title,
        author,
        genre,
        year: parseInt(year),
        summary,
        rating: parseFloat(rating)
      }

      const success = await addBook(newBook)

      if (success) {
        navigation.goBack()
        Alert.alert('Book added successfully')
        fetchData()
      } else {
        console.log(JSON.stringify(newBook))
        console.error('Error adding book')
      }
    } catch (error) {
      console.error('Error adding book', error)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Book</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Author</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter author"
            value={author}
            onChangeText={(text) => setAuthor(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Genre</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter genre"
            value={genre}
            onChangeText={(text) => setGenre(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Year</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter year"
            keyboardType="numeric"
            value={year}
            onChangeText={(text) => setYear(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Rating</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter rating from 0 to 5"
            keyboardType="numeric"
            value={rating}
            onChangeText={(text) => setRating(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Summary</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Enter summary"
            multiline
            numberOfLines={4}
            value={summary}
            onChangeText={(text) => setSummary(text)}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleAddBook}>
        <Text style={styles.addButton}>Done</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default AddBookScreen
