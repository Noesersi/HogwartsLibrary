import HomeScreen from './src/screens/homeScreen/HomeScreen.jsx'
import AddBookScreen from './src/screens/addBookScreen/AddBookScreen.jsx'
import BookDetailScreen from './src/screens/bookDetailScreen/BookDetailScreen.jsx'
import EditScreen from './src/screens/editScreen/EditScreen.jsx'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
    <Stack.Navigator options={{ header: () => null }} initialRouteName="Home">
      <Stack.Screen name="Home" options={{ header: () => null }} component={HomeScreen} />
      <Stack.Screen name="AddBook" options={{ header: () => null }} component={AddBookScreen} />
      <Stack.Screen name="BookDetailScreen" options={{ header: () => null }} component={BookDetailScreen } />
      <Stack.Screen name="EditScreen" options={{ header: () => null }} component={EditScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
