import React, { useContext } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import BooksItem from '../../components/BooksItem/BooksItem.jsx';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { BookContext } from '../../context/context.jsx';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { books, loading, error, fetchData } = useContext(BookContext);

  const handleAddBook = () => {
    navigation.navigate('AddBook');
  };

  const handleRetry = () => {
    fetchData();
  };

  const handleBookPress = (book) => {
    navigation.navigate('BookDetailScreen', {
      book: {
        title: book.title,
        author: book.author || 'Unknown Author',
        summary: book.summary || 'No description available',
        genre: book.genre || 'No genres available',
        rating: book.rating || 'No rating available',
        year: book.year || 'Unknown',
        imageUrl: book.imageUrl,
        pageCount: book.pageCount || 'Unknown',
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🕸️ Hogwarts Library</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddBook}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error || books.length === 0 ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>
            {error ? 'Failed to retrieve books.' : 'No books available.'}
          </Text>
          <TouchableOpacity onPress={handleRetry} style={styles.retryButton}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleBookPress(item)}>
              <BooksItem book={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
