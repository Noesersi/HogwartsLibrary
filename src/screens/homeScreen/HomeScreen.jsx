/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import { getBooksData } from '../../services/dataLoader.js'
import BooksItem from '../../components/BooksItem.jsx'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

export default function HomeScreen () {
  const [booksData, setBooksData] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBooksData()
        setBooksData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const handleAddBook = () => {
    navigation.navigate('AddBook')
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.title}>Hogwarts Library</Text>
              <TouchableOpacity onPress={() => handleAddBook()}>
                <Text style={styles.addButton}>Add Book</Text>
              </TouchableOpacity>
            </View>
          }
          data={booksData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <BooksItem book={item} />}
        />
      </SafeAreaView>
    </View>
  )
}
