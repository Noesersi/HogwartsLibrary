import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator, Button } from 'react-native';

const GetPopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const [loadingPopularBooks, setLoadingPopularBooks] = useState(false);
  const [page, setPage] = useState(1);
  const [moreLoading, setMoreLoading] = useState(false);

  const fetchPopularBooks = async () => {
    setLoadingPopularBooks(true);
    try {
      const response = await fetch('http://openlibrary.org/search.json?q=best+books&page=1&limit=20');
      const data = await response.json();
      setPopularBooks(data.docs);
      setPage(1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingPopularBooks(false);
    }
  };

  useEffect(() => {
    fetchPopularBooks()
  }, [])

  const fetchMorePopularBooks = async () => {
    setMoreLoading(true);
    try {
      const nextPage = page + 1;
      const response = await fetch(`http://openlibrary.org/search.json?q=best+books&page=${nextPage}&limit=20`);
      const data = await response.json();
      setPopularBooks([...popularBooks, ...data.docs]);
      setPage(nextPage);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setMoreLoading(false);
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

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Books</Text>
      {loadingPopularBooks ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={popularBooks}
          keyExtractor={(item) => item.key}
          renderItem={renderBookItem}
          style={styles.list}
          onEndReachedThreshold={0.1}
          onEndReached={fetchMorePopularBooks}
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
    paddingBottom: 50
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
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

export default GetPopularBooks;
