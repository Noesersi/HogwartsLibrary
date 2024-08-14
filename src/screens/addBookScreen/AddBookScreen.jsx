import React, { useContext } from 'react'
import BookForm from '../../components/BookFormulary/BookFormulary.jsx'
import addBook from '../../services/addBook'
import { BookContext } from '../../context/context.jsx'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

const AddBookScreen = () => {
  const { fetchData } = useContext(BookContext)
  const navigation = useNavigation()

  const handleAddBook = async (newBook) => {
    const success = await addBook(newBook)

    if (success) {
      navigation.goBack()
      Alert.alert('Book added successfully')
      fetchData()
    } else {
      console.error('Error adding book')
    }
  }

  return (
    <BookForm
      title="Add Book" 
      onSubmit={handleAddBook}
      submitButtonLabel="Add Book"
      onCancel={() => navigation.goBack()}
    />
  )
}

export default AddBookScreen
