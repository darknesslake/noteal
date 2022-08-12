import React, { Component, useEffect, useState, useLayoutEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert, ImageBackground, Image, TextInput } from 'react-native'; // importing components
// import Dialog from "react-native-dialog";

import AddGameScreen from './AddGameScreen'

import styles from '../styles/styles.js'

// const RootStack = createNativeStackNavigator();
// import Icon from 'react-native-ionicons';

// The home screen contains the text “You are on the home page” and a button.




export default class HomeScreen extends Component {

  render() {
    const herewr = () => Alert.prompt("Here: ")
    const handleButtonPress = () => Alert.alert('Hi')
    const handleButtonPress2 = () => Alert.alert('Hi', 'Main', [
      {text: 'Да', onPress: () => console.log('Yes by')},
      {text: 'Отмена', onPress: () => console.log('No by')}
    ]);
    const handleButtonPress3 = () =>  Alert.alert(herewr)





    return (

        <View style={styles.container}>
        <ImageBackground  style={styles.backgroundtone}>
        <View style={styles.containertwo}>

              <Image
                // source={require("../assets/images/1.png")}
                style={styles.imageLine} />

              <Text style={styles.header}>You are on the home page.
              </Text>

              <Button
                  title="New Game"
                  onPress={() => {
                      this.props.navigation.navigate("New Game");
                  }}
              />


      </View>
      </ImageBackground>
      </View>

    );

  }
}


/*
              <Button
                  title="Profile Page"
                  onPress={() => this.props.navigation.navigate('Profile')}
              />
              <Image
                // source={require("../assets/images/1.png")}
                style={styles.imageLine} />

              <Button
                  title="New Game"
                  onPress={() => {
                      this.props.navigation.navigate("New Game");
                  }}
              />

                <Image
                // source={require("../assets/images/1.png")}
                style={styles.imageLine} />

              <Button
                  title="Button 1"
                  onPress={handleButtonPress2}
              />

              <Image
                // source={require("../assets/images/1.png")}
                style={styles.imageLine} />

              <Button
                  style={styles.buttonp}
                  title="Button 2"
                  onPress={handleButtonPress3}
              />
              <Image
                // source={require("../assets/images/1.png")}
                style={styles.imageLine} />
 */
