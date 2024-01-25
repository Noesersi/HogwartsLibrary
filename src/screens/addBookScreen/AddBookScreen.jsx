import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const AddBookScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')
  const [summary, setSummary] = useState('')

  const handleAddBook = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
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
    </View>
  )
}

export default AddBookScreen
