import { createContext, useEffect, useState } from 'react'
import { getAllBooks } from '../services/getAllBooks'

const initialBookContext = {
  books: [],
  loading: false,
  error: null,
  fetchData: async () => {}
}

export const BookContext = createContext(initialBookContext)

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getAllBooks()
      setBooks(data)
    } catch (err) {
      setError('Failed to fetch books. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <BookContext.Provider value={{ books, loading, error, fetchData }}>
      {children}
    </BookContext.Provider>
  )
}
