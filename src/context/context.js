import { createContext, useEffect, useState } from 'react'
import { getAllBooks } from '../services/getAllBooks'

const initialBookContext = {}

export const BookContext = createContext(initialBookContext)

export const BookProvider = ({ children }) => {
  const [books, setBooksData] = useState([])
  const fetchData = async () => {
    const data = await getAllBooks()
    setBooksData(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <BookContext.Provider value={{ books, fetchData }}>{children}</BookContext.Provider>
  )
}
