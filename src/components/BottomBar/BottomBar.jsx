import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const BottomBar = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Home')}
      >
        <FontAwesome name="home" size={24} color="white" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Search')}
      >
        <FontAwesome name="search" size={24} color="white" />
        <Text style={styles.iconText}>Search Books</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Popular')}
      >
        <FontAwesome name="star" size={24} color="white" />
        <Text style={styles.iconText}>Popular</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomBar: {
    width: '100%',
    padding: 10,
    backgroundColor: '#333',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconButton: {
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 10, 
    marginTop: 2, 
  },
})

export default BottomBar
