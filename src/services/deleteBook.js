const BASE_URL = 'http://10.0.2.2:1234/api'

const deleteBook = async (bookId) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${bookId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Error deleting book')
    }

    return true
  } catch (error) {
    console.error('Error deleting book', error)
    return false
  }
}

export default deleteBook
