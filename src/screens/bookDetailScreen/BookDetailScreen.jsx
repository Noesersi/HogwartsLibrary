import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import deleteBook from '../../services/deleteBook';
import { BookContext } from '../../context/context';
import RenderHTML from 'react-native-render-html';


const BookDetailScreen = ({ route }) => {
  const { book } = route.params;
  const navigation = useNavigation();
  const { fetchData, books } = useContext(BookContext);
  const [currentBook, setCurrentBook] = useState(book);
  console.log(currentBook.id)

  useEffect(() => {
    if (book.id) {
      const findBook = books.find((b) => b.id === book.id);
      if (findBook) {
        setCurrentBook(findBook);
      }
    } else {
      setCurrentBook(book);
    }
  }, [books, book]);

  const handleDelete = async () => {
    try {
      const success = await deleteBook(currentBook.id);
      if (success) {
        Alert.alert('Book deleted successfully');
        navigation.goBack();
        fetchData();
      } else {
        Alert.alert('Error deleting book');
      }
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };

  const getYear = () => {
    return currentBook.publishedDate || currentBook.year || null;
  };

  return (
    <ImageBackground
      source={require('../../../assets/grunge-brick-wall-background.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container} >
        {currentBook.imageUrl ? (
          <Image
            source={{
              uri: currentBook.imageUrl,
            }}
            style={styles.image}
          />
        ) : (
          <Image
            source={
              require('../../../assets/libroViejo.png')
            }
            style={styles.image}
          />
        )}

        <Text style={styles.title} allowFontScaling={false} numberOfLines={2} ellipsizeMode="tail" >{currentBook.title}</Text>

        <Text style={styles.text}>
          <Text style={styles.detailsTag}>Author: </Text>
          {currentBook.author}
        </Text>

        {currentBook.genre && (
          <View>
            <Text style={styles.detailsTag}>Genres: </Text>
            <Text style={styles.text}>
              {currentBook.genre}
            </Text>
          </View>
        )}


        {getYear() && (
          <Text style={styles.text}>
            <Text style={styles.detailsTag}>Year: </Text>
            {getYear()}
          </Text>
        )}

        {currentBook.rating && (
          <Text style={styles.text}>
            <Text style={styles.detailsTag}>Rating: </Text>
            {currentBook.rating}/5
          </Text>
        )}
        {currentBook.pageCount && (
          <Text style={styles.text}>
            <Text style={styles.detailsTag}>Pages: </Text>
            {currentBook.pageCount}
          </Text>
        )}
        <Text style={styles.detailsTag}>Summary: </Text>
        <View style={styles.summaryContainer}>
          <ScrollView>
            <Text style={styles.centerDescription}>
            </Text>

            <RenderHTML
              contentWidth={parseInt(styles.summaryContainer.width)}
              source={{ html: `<p>${currentBook.summary || 'No description available'}</p>` }}
              baseStyle={{
                color: '#A8DADC',
                fontSize: 14,
                lineHeight: 22,
                fontWeight: 'bold',
                marginHorizontal: 4
              }}
            />
          </ScrollView>
        </View>

        <View style={styles.buttons}>
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditScreen', { currentBook })}
              >
                <Text style={styles.buttonStyles}>✏️ Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleDelete}>
                <Text style={styles.buttonStyles}>❌ Delete</Text>
              </TouchableOpacity>
            </>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.buttonStyles}>🔙 Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default BookDetailScreen;
