import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login';

import HomeScreen from './src/screens/homeScreen';

import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function App() {
 

 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          /*options={{
            headerShown: false,
          }}*/
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
