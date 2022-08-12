import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { StyleSheet, Dimensions, View } from 'react-native';

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AddGameScreen from '../screens/AddGameScreen'

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = ({ route }) => {

  return (

    <SafeAreaProvider>
      <Tab.Navigator screenOptions={{ headerShown: false, animationEnabled: false, gestureEnabled: false }}>

          <RootStack.Screen name="Home" component={HomeScreen}
                            options={{
                              
                                      tabBarLabel: 'Home',
                                      tabBarIcon: ({ color, size }) => (
                                      <MaterialCommunityIcons name="home" color={color} size={size} />
                                    ),
  }}
/>


          <RootStack.Screen name="Profile" component={ProfileScreen}
                            options={{
                                      tabBarLabel: 'Profile',
                                      tabBarIcon: ({ color, size }) => (
                                      <MaterialCommunityIcons name="account" color={color} size={size} />
                                    ),
  }}
/>
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};


export default MainScreen;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
