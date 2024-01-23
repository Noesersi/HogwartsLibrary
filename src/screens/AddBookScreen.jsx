import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddBookScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleAddBook = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Book</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={author}
          onChangeText={(text) => setAuthor(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          value={genre}
          onChangeText={(text) => setGenre(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Año"
          keyboardType="numeric"
          value={year}
          onChangeText={(text) => setYear(text)}
        />
      </View>
      <TouchableOpacity onPress={handleAddBook}>
        <Text style={styles.addButton}>Done</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  addButton: {
    backgroundColor: '#32cd32',
    borderRadius: 20,
    borderColor: 'green',
    color: 'white',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    fontWeight: 'bold',
  },
  backButton: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    color: 'white',
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    elevation: 2,
    fontWeight: 'bold',
  }
});

export default AddBookScreen;
