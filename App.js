import HomeScreen from './src/screens/HomeScreen.jsx';
import AddBookScreen from './src/screens/AddBookScreen.jsx';
import BookDetailScreen from './src/screens/BookDetailScreen.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" options={{header: ()=> null }} component={HomeScreen} />
      <Stack.Screen name="AddBook" options={{header: ()=> null }} component={AddBookScreen} />
      <Stack.Screen name="BookDetailScreen" options={{header: ()=> null }} component={BookDetailScreen } />

    </Stack.Navigator>
  </NavigationContainer>
  );
}


