import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { styles } from './styles'

const BookForm = ({ title, initialData = {}, onSubmit, submitButtonLabel, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    year: '',
    rating: '',
    summary: '',
    ...initialData
  })

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    const { title, author, genre, year, rating, summary } = formData

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

    onSubmit({
      ...formData,
      year: parseInt(year),
      rating: parseFloat(rating),
    })
  }

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.form}>
          {['Title', 'Author', 'Genre', 'Year', 'Rating', 'Summary'].map((field) => (
            <View key={field} style={styles.inputContainer}>
              <Text style={styles.inputLabel}>{field}</Text>
              <TextInput
                style={[styles.input, field === 'Summary' ? styles.multilineInput : null]}
                placeholder={`Enter ${field.toLowerCase()}`}
                value={formData[field.toLowerCase()]}
                keyboardType={field === 'Year' || field === 'Rating' ? 'numeric' : 'default'}
                multiline={field === 'Summary'}
                numberOfLines={field === 'Summary' ? 4 : 1}
                onChangeText={(text) => handleInputChange(field.toLowerCase(), text)}
              />
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.addButton}>{submitButtonLabel}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.backButton}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
  )
}

export default BookForm
