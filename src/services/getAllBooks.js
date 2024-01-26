import { BASE_URL } from '../../env'

export const getAllBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/books`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching books:', error)
    throw error
  }
}
