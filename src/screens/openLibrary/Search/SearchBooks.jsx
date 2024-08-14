import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, ActivityIndicator, TouchableOpacity, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchOpenLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(false);
  const [page, setPage] = useState(1);
  const [moreLoading, setMoreLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const searchBooks = async () => {
    if (searchQuery.trim() === '') return;

    setLoadingBooks(true);
    try {
      const response = await fetch(`http://openlibrary.org/search.json?q=${searchQuery}&page=1&limit=20`);
      const data = await response.json();
      setBooks(data.docs);
      setPage(1);
      setSuggestions([]); 
      setSearchQuery('')
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
      const response = await fetch(`http://openlibrary.org/search.json?q=${searchQuery}&page=${nextPage}&limit=20`);
      const data = await response.json();
      setBooks([...books, ...data.docs]);
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
      const response = await fetch(`http://openlibrary.org/search.json?q=${query}&page=1&limit=5`);
      const data = await response.json();
      setSuggestions(data.docs);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const renderBookItem = ({ item }) => {
    const imageUrl = item.cover_i
      ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
      : 'https://via.placeholder.com/128x193.png?text=No+Cover';

    const authors = item.author_name ? item.author_name.slice(0, 3).join(', ') : 'Unknown Author';

    return (
      <View style={styles.bookItem}>
        <Image source={{ uri: imageUrl }} style={styles.coverImage} />
        <View style={styles.bookDetails}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{authors}</Text>
        </View>
      </View>
    );
  };

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSearchQuery(item.title);
      setSuggestions([]);
      searchBooks();
      Keyboard.dismiss(); 
    }}>
      <Text style={styles.suggestionItem}>{item.title}</Text>
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
          keyExtractor={(item) => item.key}
          renderItem={renderSuggestionItem}
          style={styles.suggestionsList}
        />
      )}
      {loadingBooks ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.key}
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

export default SearchOpenLibrary;
