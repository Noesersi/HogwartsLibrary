import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, ActivityIndicator, TouchableOpacity, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { GOOGLE_BOOKS_API_KEY } from '../../../../env';

const SearchBooksView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(false);
  const [page, setPage] = useState(1);
  const [moreLoading, setMoreLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const searchInputRef = useRef(null);
  const navigation = useNavigation(); 

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const searchBooks = async () => {
    if (searchQuery.trim() === '') return;

    setLoadingBooks(true);
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${(page - 1) * 20}&maxResults=20&key=${GOOGLE_BOOKS_API_KEY}`);
      const data = await response.json();
      setBooks(page === 1 ? data.items : [...books, ...data.items]);
      setPage(1);
      setSuggestions([]);
      setSearchQuery('');
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingBooks(false);
    }
  };

  const fetchMoreBooks = async () => {
    setMoreLoading(true);
    try {
      const nextPage = page + 1;
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${(nextPage - 1) * 20}&maxResults=20&key=${GOOGLE_BOOKS_API_KEY}`);
      const data = await response.json();
      setBooks([...books, ...data.items]);
      setPage(nextPage);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setMoreLoading(false);
    }
  };

  const fetchSuggestions = async (query) => {
    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=5&key=${GOOGLE_BOOKS_API_KEY}`);
      const data = await response.json();
      setSuggestions(data.items);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const renderBookItem = ({ item }) => {
    const bookInfo = item.volumeInfo;
    const imageUrl = bookInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x193.png?text=No+Cover';
    const authors = bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown Author';

    const fetchBookDetails = async (bookId) => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${GOOGLE_BOOKS_API_KEY}`);
        const data = await response.json();
        console.log(data, "data");
        navigation.navigate('BookDetailScreen', {
          book: {
            title: data.volumeInfo.title,
            author: data.volumeInfo.authors?.join(', ') || 'Unknown Author',
            summary: data.volumeInfo.description || 'No description available',
            genre: data.volumeInfo.categories?.join(', ') || 'No genres available',
            rating: data.volumeInfo.averageRating || 'No rating available',
            year: data.volumeInfo.publishedDate || 'Unknown',
            imageUrl: data.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x193.png?text=No+Cover',
            pageCount : data.volumeInfo.pageCount || 'Unknown',
          },
        });
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    return (
      <TouchableOpacity onPress={() => fetchBookDetails(item.id)}>
        <View style={styles.bookItem}>
          <Image source={{ uri: imageUrl }} style={styles.coverImage} />
          <View style={styles.bookDetails}>
            <Text style={styles.title}>{bookInfo.title}</Text>
            <Text style={styles.author}>{authors}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSearchQuery(item.volumeInfo.title);
      setSuggestions([]);
      searchBooks();
      Keyboard.dismiss(); 
    }}>
      <Text style={styles.suggestionItem}>{item.volumeInfo.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search Books</Text>
      <View style={styles.searchContainer}>
        <TextInput
          ref={searchInputRef}
          style={styles.input}
          placeholder="Search for books"
          placeholderTextColor="#ccc"
          value={searchQuery}
          onChangeText={text => {
            setSearchQuery(text);
            fetchSuggestions(text);
          }}
          onSubmitEditing={searchBooks}
        />
        <TouchableOpacity onPress={searchBooks} style={styles.searchIcon}>
          <FontAwesome name="search" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.id}
          renderItem={renderSuggestionItem}
          style={styles.suggestionsList}
        />
      )}
      {loadingBooks ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={renderBookItem}
          style={styles.list}
          onEndReachedThreshold={0.1}
          onEndReached={fetchMoreBooks}
          ListFooterComponent={moreLoading && <ActivityIndicator size="large" color="#00ff00" />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
    paddingBottom:50
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#ffffff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#1e1e1e',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    color: '#ffffff',
  },
  searchIcon: {
    padding: 10,
  },
  suggestionsList: {
    maxHeight: 150,
    marginVertical: 10,
  },
  suggestionItem: {
    padding: 10,
    backgroundColor: '#1e1e1e',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    color: '#ffffff',
  },
  list: {
    marginVertical: 10,
  },
  bookItem: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
  },
  coverImage: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  bookDetails: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  author: {
    fontSize: 14,
    color: '#aaaaaa',
  },
});

export default SearchBooksView;
