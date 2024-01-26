/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import BooksItem from '../../components/BooksItem.jsx'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { BookContext } from '../../context/context.js'

export default function HomeScreen () {
  const navigation = useNavigation()
  const { books } = useContext(BookContext)

  const handleAddBook = () => {
    navigation.navigate('AddBook')
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.title}>🕸️ Hogwarts Library</Text>
              <TouchableOpacity onPress={() => handleAddBook()}>
                <Text style={styles.addButton}>Add</Text>
              </TouchableOpacity>
            </View>
          }
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <BooksItem book={item} />}
        />
      </SafeAreaView>
    </View>
  )
}
