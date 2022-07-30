import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native'; // To add styles

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen

import HomeScreen from './HomeScreen';// Home screen
import AboutScreen from './AboutScreen';// About Screen

const Stack = createStackNavigator();// createStackNavigator is used to create a stack like structure. 
//Whenever we navigate to a screen, it gets pushed to the stack and whenever we click the back button, 
//the screen pops off from the top of the stack.



class App extends Component {
  render() {
    return (
      <NavigationContainer> 
          <Stack.Navigator>

          <Stack.Screen
            name="Home"
            component={HomeScreen}
          /> 

          <Stack.Screen
            name="About"
            component={AboutScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;