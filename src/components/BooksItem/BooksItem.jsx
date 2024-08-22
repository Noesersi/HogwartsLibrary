import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

const BooksItem = ({ book }) => {
  const imageUrl = book.imageUrl 
    ? { uri: book.imageUrl } 
    : require('../../../assets/libroViejo.png');

  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
      <Text style={styles.rating}>
        {book.rating}/5
        <Text> ⭐</Text>
      </Text>
    </View>
  );
};

export default BooksItem;
