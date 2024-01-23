import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { getBooksData } from "../services/dataLoader.js";
import BooksItem from "../components/BooksItem.jsx";

export default function HomeScreen() {
  const [booksData, setBooksData] = useState([]);

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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hogwarts Library</Text>
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    color: "darkblue",
    fontSize: 30,
    fontFamily: "Roboto",
  }
});
