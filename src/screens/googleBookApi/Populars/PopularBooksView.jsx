import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BooksItem from '../../../components/BooksItem/BooksItem';
import { TouchableOpacity } from 'react-native';

const PopularBooksView = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const [loadingPopularBooks, setLoadingPopularBooks] = useState(false);
  const [page, setPage] = useState(1);
  const [moreLoading, setMoreLoading] = useState(false);
  const navigation = useNavigation();

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

  const handleBookPress = async (bookId) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
      const data = await response.json();

      navigation.navigate('BookDetailScreen', {
        book: {
          title: data.volumeInfo.title,
          author: data.volumeInfo.authors?.join(', ') || 'Unknown Author',
          summary: data.volumeInfo.description || 'No description available',
          genre: data.volumeInfo.categories?.join(', ') || 'No genres available',
          rating: data.volumeInfo.averageRating || 'No rating available',
          year: data.volumeInfo.publishedDate || 'Unknown',
          imageUrl: data.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x193.png?text=No+Cover',
          pageCount: data.volumeInfo.pageCount || 'Unknown',
        },
      });
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  const renderBookItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleBookPress(item.id)}>

      <BooksItem
        book={{
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors?.join(', ') || 'Unknown Author',
          rating: item.volumeInfo.averageRating || '_',
          imageUrl: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x193.png?text=No+Cover',
        }}
        onPress={() => handleBookPress(item.id)}
      />
    </TouchableOpacity>
  );

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
});

export default PopularBooksView;
