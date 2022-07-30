import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Alert, TouchableOpacity, ImageBackground } from 'react-native';

import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';

import Navigate from './navigate';

import { MaterialCommunityIcons } from '@expo/vector-icons';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




class MyTabs extends Component {
  render() {
    return(
      
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
      >

      <Tab.Screen
        name="Home"
        component={HomeScreen}  
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}  
        />
      
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        />

    </Tab.Navigator>
    
    );
    
  }
  
}


export default function App({ navigation }) {
  const herewr = () => Alert.prompt("Here: ")
  const handleButtonPress = () => Alert.alert('Hi')
  const handleButtonPress2 = () => Alert.alert('Hi', 'Main', [
    {text: 'Да', onPress: () => console.log('Yes by')},
    {text: 'Отмена', onPress: () => console.log('No by')}
  ]);
  const handleButtonPress3 = () =>  Alert.alert(herewr)
  
  return (
      
      <NavigationContainer>
                
        <MyTabs />
      
      </NavigationContainer>
    );
}
