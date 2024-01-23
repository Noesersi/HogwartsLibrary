import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BooksItem = ({ book }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://previews.123rf.com/images/pakmor/pakmor0904/pakmor090400162/4722436-un-libro-con-una-impresi%C3%B3n-gen%C3%A9rica-azul-sobre-fondo-blanco.jpg' }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginVertical: 10,
    paddingHorizontal: 20, 
    width: '100%',
  },
  image: {
    width: 80,
    height: 120, 
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1, 
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, 
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },

})
export default BooksItem;
