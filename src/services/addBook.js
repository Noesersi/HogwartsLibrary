import { BASE_URL } from '../../env'

const addBook = async (newBook) => {
  try {
    const response = await fetch(`${BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })

    if (response.ok) {
      return true
    } else {
      console.error('Error adding book:', response.status)
      return false
    }
  } catch (error) {
    console.error('Error adding book:', error)
    return false
  }
}

export default addBook
