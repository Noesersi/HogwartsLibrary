import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const BookDetailScreen = ({ route }) => {
  const { book } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{book.title}</Text>

      <Text>
        <Text style={styles.detailsTag}>Author: </Text>
        {book.author}
      </Text>
      <Text>
        <Text style={styles.detailsTag}>Genre: </Text>
        {book.genre}
      </Text>
      <Text>
        <Text style={styles.detailsTag}>Year: </Text>
        {book.year}
      </Text>
      <Text>
        <Text style={styles.detailsTag}>Rating: </Text>
        {book.rating}/5
      </Text>
      <Text style={styles.centerDescription}>
        <Text style={styles.detailsTag}>Resume: </Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod
        tempor incididunt ut labore et dol acceptet. Ut enim ad minim veniam,
        quis nostrud.
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.editButton}>✏️ Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.deleteButton}>❌ Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>🔙 Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  
  title: {
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    margin: 20,
  },
  detailsTag: {
    fontWeight: "bold",
  },
  centerDescription: {
    textAlign: "center",
    marginHorizontal: 10,
  },
  image: {
    textAlign: "center",
    width: 250,
    height: 340,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    gap: 3,
    marginTop: 20,
  },
  editButton: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "black",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    textAlign: "center",
  },
  deleteButton: {
    color: "white",
    backgroundColor: "black",
    fontWeight: "bold",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    textAlign: "center",
  },
  backButton: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "black",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
  },
});

export default BookDetailScreen;
