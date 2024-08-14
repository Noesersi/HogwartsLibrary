import React, { useContext } from 'react'
import BookForm from '../../components/BookFormulary/BookFormulary.jsx'
import editBook from '../../services/editBook'
import { BookContext } from '../../context/context.jsx'
import { Alert } from 'react-native'

const EditScreen = ({ route, navigation }) => {
  const { fetchData } = useContext(BookContext)
  const { currentBook } = route.params

  const handleSaveChanges = async (editedData) => {
    try {
      await editBook(currentBook.id, editedData)
      Alert.alert('Book updated successfully')
      fetchData()
      navigation.navigate('BookDetailScreen', { currentBook })
    } catch (error) {
      console.error('Error saving changes:', error)
    }
  }

  return (
    <BookForm
      title="Edit Book" 
      initialData={currentBook}
      onSubmit={handleSaveChanges}
      submitButtonLabel="Save Changes"
      onCancel={() => navigation.goBack()}
    />
  )
}

export default EditScreen
