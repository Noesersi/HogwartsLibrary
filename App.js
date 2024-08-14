import HomeScreen from './src/screens/homeScreen/HomeScreen.jsx'
import AddBookScreen from './src/screens/addBookScreen/AddBookScreen.jsx'
import BookDetailScreen from './src/screens/bookDetailScreen/BookDetailScreen.jsx'
import EditScreen from './src/screens/editScreen/EditScreen.jsx'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { BookProvider } from './src/context/context.jsx'
import { View } from 'react-native'
import BottomBar from './src/components/BottomBar/BottomBar.jsx'
import SearchOpenLibrary from './src/screens/openLibrary/Search/SearchBooks.jsx'
import GetPopularBooks from './src/screens/openLibrary/Populars/PopularBooks.jsx'

const Stack = createStackNavigator()

export default function App () {
  return (
    <BookProvider>
    <NavigationContainer>
      <View style={ { flex: 1 } }>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddBook" component={AddBookScreen} />
          <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} />
          <Stack.Screen name="EditScreen" component={EditScreen} />
          <Stack.Screen name="Search" component={SearchOpenLibrary} />
          <Stack.Screen name="Popular" component={GetPopularBooks} />
        </Stack.Navigator>
        <BottomBar />
      </View>
    </NavigationContainer>
  </BookProvider>
  )
}
