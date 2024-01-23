import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { getBooksData } from "../services/dataLoader.js";
import BooksItem from "../components/BooksItem.jsx";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [booksData, setBooksData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBooksData();
        setBooksData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddBook = () => {
    navigation.navigate('AddBook');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hogwarts Library</Text>
        <TouchableOpacity onPress={() => handleAddBook()}>
          <Text style={styles.addButton}>Add Book</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={booksData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BooksItem book={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "Roboto",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#32cd32",
    borderRadius: 20,
    borderColor: 'green',
    color: "white",
    
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 2,
    fontWeight: 'bold',
  },
});
