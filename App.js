import 'react-native-gesture-handler'
import * as React from 'react';
//import { AppRegistry } from 'react-native';
import Home from './components/Home'
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

