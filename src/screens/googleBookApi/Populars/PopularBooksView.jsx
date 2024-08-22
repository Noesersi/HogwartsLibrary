import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';

const PopularBooksView = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const [loadingPopularBooks, setLoadingPopularBooks] = useState(false);
  const [page, setPage] = useState(1);
  const [moreLoading, setMoreLoading] = useState(false);

  const fetchPopularBooks = async () => {
    setLoadingPopularBooks(true);
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=best+books&startIndex=0&maxResults=20`);
      const data = await response.json();
      setPopularBooks(data.items || []);
      setPage(1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingPopularBooks(false);
    }
  };

  useEffect(() => {
    fetchPopularBooks();
  }, []);

  const fetchMorePopularBooks = async () => {
    setMoreLoading(true);
    try {
      const nextPage = page + 1;
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=best+books&startIndex=${(nextPage - 1) * 20}&maxResults=20`);
      const data = await response.json();
      setPopularBooks([...popularBooks, ...(data.items || [])]);
      setPage(nextPage);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setMoreLoading(false);
    }
  };

  const renderBookItem = ({ item }) => {
    const imageUrl = item.volumeInfo.imageLinks?.thumbnail
      ? item.volumeInfo.imageLinks.thumbnail
      : 'https://via.placeholder.com/128x193.png?text=No+Cover';

    const authors = item.volumeInfo.authors ? item.volumeInfo.authors.slice(0, 3).join(', ') : 'Unknown Author';

    return (
      <View style={styles.bookItem}>
        <Image source={{ uri: imageUrl }} style={styles.coverImage} />
        <View style={styles.bookDetails}>
          <Text style={styles.title}>{item.volumeInfo.title}</Text>
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
          keyExtractor={(item) => item.id}
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
    paddingBottom: 50,
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

export default PopularBooksView;
