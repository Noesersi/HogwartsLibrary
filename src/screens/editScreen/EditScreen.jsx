import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { styles } from './styles'

const EditScreen = ({ route, navigation }) => {
  const { bookId } = route.params
  const [editedData, setEditedData] = useState({
    title: '',
    author: '',
    genre: '',
    year: '',
    summary: ''
  })

  useEffect(() => {
    const fetchData = async () => {
    }

    fetchData()
  }, [bookId])

  const handleSaveChanges = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Book</Text>
      <View style={styles.form}>
        <Text>Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={editedData.title}
          onChangeText={(text) => setEditedData({ ...editedData, title: text })}
        />

        <Text>Author:</Text>
        <TextInput
          style={styles.input}
          placeholder="Author"
          value={editedData.author}
          onChangeText={(text) =>
            setEditedData({ ...editedData, author: text })
          }
        />

        <Text>Genre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Genre"
          value={editedData.genre}
          onChangeText={(text) => setEditedData({ ...editedData, genre: text })}
        />

        <Text>Year:</Text>
        <TextInput
          style={styles.input}
          placeholder="Year"
          keyboardType="numeric"
          value={editedData.year}
          onChangeText={(text) => setEditedData({ ...editedData, year: text })}
        />

        <Text>Summary:</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="summary"
          multiline
          numberOfLines={4}
          value={editedData.summary}
          onChangeText={(text) =>
            setEditedData({ ...editedData, summary: text })
          }
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
