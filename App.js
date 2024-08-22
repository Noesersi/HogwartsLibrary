import HomeScreen from './src/screens/homeScreen/HomeScreen.jsx'
import AddBookScreen from './src/screens/addBookScreen/AddBookScreen.jsx'
import BookDetailScreen from './src/screens/bookDetailScreen/BookDetailScreen.jsx'
import EditScreen from './src/screens/editScreen/EditScreen.jsx'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { BookProvider } from './src/context/context.jsx'
import { StatusBar, View } from 'react-native'
import BottomBar from './src/components/BottomBar/BottomBar.jsx'
import SearchBooksView from './src/screens/googleBookApi/Search/SearchBooksView.jsx'
import PopularBooksView from './src/screens/googleBookApi/Populars/PopularBooksView.jsx'

const Stack = createStackNavigator()

export default function App () {
  return (
    <BookProvider>
    <NavigationContainer>
      <View style={ { flex: 1 } }>
        <StatusBar hidden={true}/>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddBook" component={AddBookScreen} />
          <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} />
          <Stack.Screen name="EditScreen" component={EditScreen} />
          <Stack.Screen name="Search" component={SearchBooksView} />
          <Stack.Screen name="Popular" component={PopularBooksView} />
        </Stack.Navigator>
        <BottomBar />
      </View>
    </NavigationContainer>
  </BookProvider>
  )
}
