import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Alert, TouchableOpacity, ImageBackground } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import MainScreen from './src/components/Main';
import AddGameScreen from './src/screens/AddGameScreen'

import TwentyFour from './src/components/Card/TwentyFour'
import ThirtySix from './src/components/Card/ThirtySix'
import FiftyTwo from './src/components/Card/FiftyTwo'
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator()
//


export default class App extends Component {
  render() {
    return (

      <NavigationContainer>

        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false, animationEnabled: false, gestureEnabled: false }} />
            <Stack.Screen name='New Game' component={AddGameScreen} />
            <Stack.Screen name='Twenty Four' component={TwentyFour} />
            <Stack.Screen name='Thirty Six' component={ThirtySix} />
            <Stack.Screen name='Fifty Two' component={FiftyTwo} />
        </Stack.Navigator>

      </NavigationContainer>
    )
  }
}
