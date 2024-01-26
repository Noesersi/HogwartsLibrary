const BASE_URL = 'http://10.0.2.2:1234/api'

const editBook = async (bookId, newData) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })

    if (!response.ok) {
      throw new Error('Error editing book')
    }

    return await response.json()
  } catch (error) {
    console.error('Error editing book:', error)
    throw error
  }
}

export default editBook
